// Build: copy src/ to dist/ and optimise the apartment photos from photos/.
// Each photo is gently brightened, sharpened and saved as WebP in two sizes:
// a large version (max 2000px) and a 4:3 thumbnail cropped to the most
// interesting part of the image.
import { mkdir, cp, readdir } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const photos = path.join(root, 'photos');
const dist = path.join(root, 'dist');
const out = path.join(dist, 'img');

await mkdir(out, { recursive: true });
await cp(path.join(root, 'src'), dist, { recursive: true });

const enhance = (file) => sharp(file)
  .rotate()
  .normalise({ lower: 1, upper: 99 })
  .modulate({ brightness: 1.03, saturation: 1.05 })
  .sharpen({ sigma: 0.7 });

const files = (await readdir(photos)).filter((f) => /\.(jpe?g|png|webp)$/i.test(f));
for (const f of files) {
  const name = f.replace(/\.[^.]+$/, '');
  const src = path.join(photos, f);
  const { width } = await sharp(src).metadata();
  await enhance(src)
    .resize({ width: Math.min(2000, width), withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(path.join(out, `${name}.webp`));
  await enhance(src)
    .resize({ width: 900, height: 675, fit: 'cover', position: sharp.strategy.attention })
    .webp({ quality: 78 })
    .toFile(path.join(out, `${name}-sm.webp`));
  console.log(`✓ ${name}`);
}

// Social preview image (1200×630)
await enhance(path.join(photos, 'hero.jpg'))
  .resize({ width: 1200, height: 630, fit: 'cover', position: 'centre' })
  .jpeg({ quality: 82 })
  .toFile(path.join(out, 'og.jpg'));

console.log('Build done →', dist);
