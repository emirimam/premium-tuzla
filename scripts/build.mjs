// Build: copy src/ to dist/, download the apartment photos and optimise them.
// Photos are cropped to consistent ratios, gently brightened, sharpened and
// saved as WebP in two sizes (large + thumbnail).
import { mkdir, cp, writeFile, access } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
import { images } from './images.mjs';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const dist = path.join(root, 'dist');
const out = path.join(dist, 'img');
const cache = path.join(root, '.cache');

await mkdir(out, { recursive: true });
await mkdir(cache, { recursive: true });
await cp(path.join(root, 'src'), dist, { recursive: true });

async function download(img) {
  const file = path.join(cache, `${img.name}.orig`);
  try { await access(file); return file; } catch {}
  for (let attempt = 1; attempt <= 3; attempt++) {
    const res = await fetch(img.url, { redirect: 'follow' });
    if (res.ok) {
      await writeFile(file, Buffer.from(await res.arrayBuffer()));
      return file;
    }
    console.warn(`  ${img.name}: HTTP ${res.status} (try ${attempt})`);
    await new Promise((r) => setTimeout(r, 1000 * attempt));
  }
  throw new Error(`Could not download ${img.name}`);
}

function enhance(pipeline) {
  return pipeline
    .rotate() // respect EXIF orientation
    .normalise({ lower: 1, upper: 99 }) // lift flat phone exposure
    .modulate({ brightness: 1.04, saturation: 1.06 })
    .sharpen({ sigma: 0.8 });
}

for (const img of images) {
  const src = await download(img);
  const base = sharp(src);
  const meta = await base.metadata();
  // large: max 2000px wide, keep the photo's own framing
  await enhance(sharp(src))
    .resize({ width: Math.min(2000, meta.width || 2000), withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(path.join(out, `${img.name}.webp`));
  // thumbnail: 4:3 crop focused on the most interesting area
  await enhance(sharp(src))
    .resize({ width: 900, height: 675, fit: 'cover', position: sharp.strategy.attention })
    .webp({ quality: 76 })
    .toFile(path.join(out, `${img.name}-sm.webp`));
  console.log(`✓ ${img.name} (${meta.width}×${meta.height})`);
}

// Social preview image (1200×630)
await enhance(sharp(await download(images[0])))
  .resize({ width: 1200, height: 630, fit: 'cover', position: sharp.strategy.attention })
  .jpeg({ quality: 82 })
  .toFile(path.join(out, 'og.jpg'));

console.log('Build done →', dist);
