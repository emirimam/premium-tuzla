// One-off helper (run by GitHub Actions): downloads every image from the old
// Google Sites pages into photos/_source/ so the real apartment photos can be
// picked and committed to the repo. Google's image URLs are signed per page
// load, so they must be read from the live HTML.
import { mkdir, writeFile } from 'node:fs/promises';

const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128 Safari/537.36';
const pages = ['home', 'rooms', 'amenities', 'contact'];
const dir = 'photos/_source';
await mkdir(dir, { recursive: true });

const manifest = [];
const seenAll = new Set();
for (const p of pages) {
  const html = await (await fetch(`https://sites.google.com/view/premiumtuzla/${p}`, { headers: { 'user-agent': UA } })).text();
  const re = /https:\/\/sites\.google\.com\/sitesv-images-rt\/([A-Za-z0-9_-]+)=w(\d+)/g;
  let m; let i = 0;
  while ((m = re.exec(html))) {
    const key = m[1].slice(0, 40);
    if (seenAll.has(m[0])) continue;
    seenAll.add(m[0]);
    const before = html.slice(Math.max(0, m.index - 700), m.index);
    const inLink = before.lastIndexOf('<a ') > before.lastIndexOf('</a>');
    const after = html.slice(m.index + m[0].length, m.index + 1500).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 60);
    const name = `${p}-${String(i++).padStart(2, '0')}`;
    const res = await fetch(`https://sites.google.com/sitesv-images-rt/${m[1]}=w2400`, { headers: { 'user-agent': UA, referer: 'https://sites.google.com/' } });
    if (!res.ok) { manifest.push({ name, status: res.status }); continue; }
    const ext = (res.headers.get('content-type') || '').includes('png') ? 'png' : 'jpg';
    await writeFile(`${dir}/${name}.${ext}`, Buffer.from(await res.arrayBuffer()));
    manifest.push({ name: `${name}.${ext}`, width: m[2], inLink, after, key });
  }
}
await writeFile(`${dir}/manifest.json`, JSON.stringify(manifest, null, 2));
console.log(manifest);
