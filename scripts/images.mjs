// Source photos come from the original Google Sites page (premiumtuzla).
// Google Sites image URLs are signed per page-load, so the build reads the
// live pages and picks the photos (=w1280 images) in document order.
export const pages = [
  {
    url: 'https://sites.google.com/view/premiumtuzla/home',
    names: ['hero', 'hero-2', 'living', 'queen', 'double', 'kitchen', 'bathroom', 'hallway'],
  },
  {
    url: 'https://sites.google.com/view/premiumtuzla/rooms',
    names: ['queen-2', 'double-2', 'living-2'],
  },
];

const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128 Safari/537.36';

export async function resolveImages() {
  const out = [];
  for (const page of pages) {
    const html = await (await fetch(page.url, { headers: { 'user-agent': UA } })).text();
    const seen = new Set();
    const urls = [];
    for (const m of html.matchAll(/https:\/\/sites\.google\.com\/sitesv-images-rt\/[A-Za-z0-9_-]+=w1280/g)) {
      if (!seen.has(m[0])) { seen.add(m[0]); urls.push(m[0]); }
    }
    if (urls.length < page.names.length) throw new Error(`Only ${urls.length} photos on ${page.url}`);
    page.names.forEach((name, i) => out.push({ name, url: urls[i].replace(/=w1280$/, '=w2400') }));
  }
  return { images: out, headers: { 'user-agent': UA, referer: 'https://sites.google.com/' } };
}
