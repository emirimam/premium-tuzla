# Premium Tuzla Apartment

Website for a modern two-bedroom apartment in Tuzla city center.

- Static site (HTML/CSS/JS) in `src/`, bilingual EN / BS.
- `npm run build` copies `src/` to `dist/`, downloads the apartment photos
  (list in `scripts/images.mjs`) and optimises them with `sharp`
  (auto-crop, light exposure/colour correction, sharpening, WebP).
- Deployed on Vercel (`vercel.json`).

To replace photos: change the URLs in `scripts/images.mjs`, or drop your own
files in and adjust the build.
