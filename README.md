# Premium Tuzla Apartment

Website for a modern two-bedroom apartment in Tuzla city center.

- Static site (HTML/CSS/JS) in `src/`, in Bosnian, English and German.
  The language is picked from the visitor's browser settings (BS/HR/SR → BS,
  DE → DE, everything else → EN); a manual choice is remembered, and
  `?lang=de|bs|en` forces a language (handy for links in ads or messages).
- `npm run build` copies `src/` to `dist/` and optimises the apartment photos
  from `photos/` with `sharp`
  (auto-crop, light exposure/colour correction, sharpening, WebP).
- Deployed on Vercel (`vercel.json`).

To replace or add photos: put new .jpg files in `photos/` and reference
them in `src/index.html` as `/img/<name>.webp` (or `<name>-sm.webp`).
