// ---------- Translations (EN default, BS) ----------
const BS = {
  'nav.about': 'O apartmanu', 'nav.rooms': 'Sobe', 'nav.gallery': 'Galerija', 'nav.location': 'Lokacija', 'nav.book': 'Rezerviši',
  'hero.eyebrow': 'Kratki boravak · centar Tuzle',
  'hero.title': 'Vaš miran,<br />moderan dom<br />u Tuzli.',
  'hero.sub': 'Svijetao dvosoban apartman u srcu grada — nekoliko minuta od Panonskih jezera, restorana i trgovina.',
  'cta.whatsapp': 'Rezerviši na WhatsApp', 'cta.explore': 'Pogledaj apartman',
  'price.from': 'već od', 'price.per': '/ noć', 'price.note': 'Najbolja cijena u centru · ograničeni termini',
  'facts.bedrooms': 'spavaće sobe', 'facts.beds': 'queen i bračni krevet', 'facts.sofaTitle': 'Kauč na razvlačenje',
  'facts.sofa': 'u dnevnom boravku', 'facts.centerTitle': 'Centar', 'facts.center': 'sve na dohvat ruke',
  'about.eyebrow': 'Dobrodošli', 'about.title': 'Udobnost, privatnost i opuštena atmosfera.',
  'about.p1': 'Bilo da u Tuzlu dolazite poslovno, na kratki odmor ili da istražite grad i poznata Panonska jezera, naš apartman nudi sve što vam treba za ugodan i praktičan boravak.',
  'about.p2': 'Apartman je potpuno opremljen i pažljivo pripremljen — čist, moderan prostor s pouzdanim Wi-Fi-jem i svim osnovnim stvarima. Idealan za turiste, poslovne putnike i sve koji traže mirno mjesto blizu restorana, trgovina i znamenitosti.',
  'about.sign': 'Radujemo se vašem dolasku.',
  'rooms.eyebrow': 'Sobe', 'rooms.title': 'Prostor za odmor i opuštanje.',
  'rooms.queen.title': 'Spavaća soba s queen krevetom',
  'rooms.queen.text': 'Udoban krevet 160×200 cm za miran san — savršen za parove ili poslovne putnike.',
  'rooms.double.title': 'Spavaća soba s bračnim krevetom',
  'rooms.double.text': 'Bračni krevet 140×200 cm u svijetloj sobi s toplim, ugodnim osvjetljenjem — idealno za parove ili prijatelje.',
  'rooms.living.title': 'Dnevni boravak s ugaonom garniturom',
  'rooms.living.text': 'Prostrana ugaona garnitura na razvlačenje, Smart TV za filmove i serije i puno dnevnog svjetla — mjesto za odmor nakon dana u gradu.',
  'chip.guests2': '2 gosta', 'chip.wifi': 'Brzi Wi-Fi', 'chip.ac': 'Klima uređaj', 'chip.light': 'Dnevno svjetlo', 'chip.sofabed': 'Kauč na razvlačenje',
  'am.eyebrow': 'Sadržaji', 'am.title': 'Sve što vam treba, ništa suvišno.',
  'am.wifi.t': 'Brzi Wi-Fi', 'am.wifi.d': 'Brz i pouzdan, u svakoj prostoriji.',
  'am.ac.t': 'Klima uređaj', 'am.ac.d': 'Grijanje i hlađenje tokom cijele godine.',
  'am.tv.d': 'TV kanali i streaming servisi.',
  'am.kitchen.t': 'Opremljena kuhinja', 'am.kitchen.d': 'Kuhajte kao kod kuće.',
  'am.bath.t': 'Moderno kupatilo', 'am.bath.d': 'Čisto, svijetlo, svježi peškiri.',
  'am.light.t': 'Svijetle prostorije', 'am.light.d': 'Puno prirodnog dnevnog svjetla.',
  'gal.eyebrow': 'Galerija', 'gal.title': 'Razgledajte apartman.',
  'loc.eyebrow': 'Lokacija', 'loc.title': 'U srcu Tuzle.', 'loc.text': 'Izađite na vrata i već ste u centru grada. Sve što vam treba je blizu:',
  'loc.lakes': 'Panonska jezera', 'loc.center': 'Stari grad i centar', 'loc.food': 'Restorani, kafići i trgovine',
  'loc.airport': 'Međunarodni aerodrom Tuzla', 'loc.directions': 'Otvori u Google Maps',
  'book.eyebrow': 'Rezervišite boravak', 'book.title': 'Već od 49€ po noći.',
  'book.sub': 'Rezervišite preko platforme koju preferirate — ili nam pišite direktno na WhatsApp za najbolju cijenu.',
  'book.direct': 'Direktno · najbolja cijena', 'book.platform': 'Platforma', 'book.instant': 'Recenzije i sigurno plaćanje',
  'book.form': 'Radije putem forme?', 'book.formLink': 'Pošaljite upit za rezervaciju →',
  'footer.text': 'Moderan apartman u centru Tuzle.',
};

const EN = {};
document.querySelectorAll('[data-i18n]').forEach((el) => { EN[el.dataset.i18n] = el.textContent; });
document.querySelectorAll('[data-i18n-html]').forEach((el) => { EN[el.dataset.i18nHtml] = el.innerHTML; });

const DE = {
  'nav.about': 'Über uns', 'nav.rooms': 'Zimmer', 'nav.gallery': 'Galerie', 'nav.location': 'Lage', 'nav.book': 'Jetzt buchen',
  'hero.eyebrow': 'Kurzaufenthalt · Stadtzentrum Tuzla',
  'hero.title': 'Ihr ruhiges,<br />modernes Zuhause<br />in Tuzla.',
  'hero.sub': 'Eine helle Wohnung mit zwei Schlafzimmern im Herzen der Stadt — nur wenige Minuten von den Pannonischen Seen, Restaurants und Geschäften entfernt.',
  'cta.whatsapp': 'Über WhatsApp buchen', 'cta.explore': 'Wohnung ansehen',
  'price.from': 'ab', 'price.per': '/ Nacht', 'price.note': 'Bester Preis im Zentrum · begrenzte Termine',
  'facts.bedrooms': 'Schlafzimmer', 'facts.beds': 'Queen- & Doppelbett', 'facts.sofaTitle': 'Schlafsofa',
  'facts.sofa': 'im Wohnzimmer', 'facts.centerTitle': 'Zentrum', 'facts.center': 'alles zu Fuß erreichbar',
  'about.eyebrow': 'Willkommen', 'about.title': 'Komfort, Privatsphäre und eine entspannte Atmosphäre.',
  'about.p1': 'Ob Sie Tuzla geschäftlich besuchen, einen Kurzurlaub planen oder die Stadt und die berühmten Pannonischen Seen erkunden möchten — unsere Wohnung bietet alles für einen angenehmen und bequemen Aufenthalt.',
  'about.p2': 'Die Wohnung ist voll ausgestattet und liebevoll vorbereitet — ein sauberer, moderner Raum mit zuverlässigem WLAN und allem Nötigen. Ideal für Touristen, Geschäftsreisende und alle, die einen ruhigen Ort in der Nähe von Restaurants, Geschäften und Sehenswürdigkeiten suchen.',
  'about.sign': 'Wir freuen uns auf Ihren Besuch.',
  'rooms.eyebrow': 'Die Zimmer', 'rooms.title': 'Raum zum Ausruhen, Raum zum Entspannen.',
  'rooms.queen.title': 'Schlafzimmer mit Queen-Size-Bett',
  'rooms.queen.text': 'Ein bequemes Bett (160×200 cm) für erholsamen Schlaf — perfekt für Paare oder Geschäftsreisende.',
  'rooms.double.title': 'Schlafzimmer mit Doppelbett',
  'rooms.double.text': 'Ein Doppelbett (140×200 cm) in einem hellen Zimmer mit warmer, gemütlicher Beleuchtung — ideal für Paare oder Freunde.',
  'rooms.living.title': 'Wohnzimmer mit Ecksofa',
  'rooms.living.text': 'Ein geräumiges Ecksofa mit Schlaffunktion, Smart TV für Filme und Serien und viel Tageslicht — der perfekte Ort nach einem Tag in der Stadt.',
  'chip.guests2': '2 Gäste', 'chip.wifi': 'Schnelles WLAN', 'chip.ac': 'Klimaanlage', 'chip.light': 'Viel Tageslicht', 'chip.sofabed': 'Schlafsofa',
  'am.eyebrow': 'Ausstattung', 'am.title': 'Alles, was Sie brauchen — nichts Überflüssiges.',
  'am.wifi.t': 'Schnelles WLAN', 'am.wifi.d': 'Schnell und zuverlässig, in jedem Raum.',
  'am.ac.t': 'Klimaanlage', 'am.ac.d': 'Heizen und Kühlen das ganze Jahr.',
  'am.tv.d': 'TV-Sender und Streaming-Dienste.',
  'am.kitchen.t': 'Ausgestattete Küche', 'am.kitchen.d': 'Kochen wie zu Hause.',
  'am.bath.t': 'Modernes Bad', 'am.bath.d': 'Sauber, hell, frische Handtücher.',
  'am.light.t': 'Helle Räume', 'am.light.d': 'Viel natürliches Tageslicht.',
  'gal.eyebrow': 'Galerie', 'gal.title': 'Schauen Sie sich um.',
  'loc.eyebrow': 'Lage', 'loc.title': 'Im Herzen von Tuzla.', 'loc.text': 'Vor der Haustür beginnt das Stadtzentrum. Alles Wichtige ist ganz in der Nähe:',
  'loc.lakes': 'Pannonische Seen', 'loc.center': 'Altstadt & Stadtzentrum', 'loc.food': 'Restaurants, Cafés & Geschäfte',
  'loc.airport': 'Internationaler Flughafen Tuzla', 'loc.directions': 'In Google Maps öffnen',
  'book.eyebrow': 'Aufenthalt buchen', 'book.title': 'Ab 49€ pro Nacht.',
  'book.sub': 'Buchen Sie über die Plattform Ihrer Wahl — oder schreiben Sie uns direkt auf WhatsApp für den besten Preis.',
  'book.direct': 'Direkt · bester Preis', 'book.platform': 'Plattform', 'book.instant': 'Bewertungen & sichere Zahlung',
  'book.form': 'Lieber per Formular?', 'book.formLink': 'Buchungsanfrage senden →',
  'footer.text': 'Moderne Wohnung im Stadtzentrum von Tuzla.',
};

const DICTS = { en: EN, bs: BS, de: DE };
const LANGS = Object.keys(DICTS);

function setLang(lang, manual = false) {
  const dict = DICTS[lang] || EN;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const v = dict[el.dataset.i18n] || EN[el.dataset.i18n]; if (v) el.textContent = v;
  });
  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const v = dict[el.dataset.i18nHtml] || EN[el.dataset.i18nHtml]; if (v) el.innerHTML = v;
  });
  document.documentElement.lang = lang;
  document.title = ({ en: 'Premium Tuzla Apartment · City Center Stay', bs: 'Premium Tuzla Apartman · smještaj u centru Tuzle', de: 'Premium Tuzla Apartment · Unterkunft im Zentrum' })[lang] || document.title;
  document.querySelectorAll('.lang-switch button').forEach((b) => {
    b.setAttribute('aria-pressed', String(b.dataset.lang === lang));
  });
  if (manual) { try { localStorage.setItem('lang', lang); } catch {} }
}

// Visitor language: ?lang=xx > own earlier choice > browser languages > English
function detectLang() {
  const param = new URLSearchParams(location.search).get('lang');
  if (param && LANGS.includes(param)) return param;
  try { const saved = localStorage.getItem('lang'); if (saved && LANGS.includes(saved)) return saved; } catch {}
  const prefs = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || 'en'];
  for (const l of prefs) {
    const code = String(l).toLowerCase().split('-')[0];
    if (['bs', 'hr', 'sr', 'sh', 'cnr', 'sl', 'mk'].includes(code)) return 'bs';
    if (code === 'de') return 'de';
    if (code === 'en') return 'en';
  }
  return 'en';
}

setLang(detectLang());
document.querySelectorAll('.lang-switch button').forEach((b) => {
  b.addEventListener('click', () => setLang(b.dataset.lang, true));
});

// ---------- Nav background on scroll ----------
const nav = document.querySelector('.nav');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 40);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// ---------- Reveal on scroll ----------
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

// ---------- Lightbox ----------
const lb = document.getElementById('lightbox');
const lbImg = lb.querySelector('img');
const items = [...document.querySelectorAll('#gal .g')];
const sources = items.map((b) => ({ src: b.dataset.full, alt: b.querySelector('img').alt }));
let idx = 0;
function open(src, alt) {
  const i = sources.findIndex((s) => s.src === src);
  idx = i >= 0 ? i : 0;
  lbImg.src = src; lbImg.alt = alt || '';
  lb.hidden = false; document.body.style.overflow = 'hidden';
}
function show(step) {
  idx = (idx + step + sources.length) % sources.length;
  lbImg.src = sources[idx].src; lbImg.alt = sources[idx].alt;
}
function close() { lb.hidden = true; document.body.style.overflow = ''; }
items.forEach((b) => b.addEventListener('click', () => open(b.dataset.full, b.querySelector('img').alt)));
document.querySelectorAll('.room-media img, .loc-photo').forEach((img) => img.addEventListener('click', () => open(img.dataset.full, img.alt)));
lb.querySelector('.lb-close').addEventListener('click', close);
lb.querySelector('.lb-prev').addEventListener('click', () => show(-1));
lb.querySelector('.lb-next').addEventListener('click', () => show(1));
lb.addEventListener('click', (e) => { if (e.target === lb) close(); });
document.addEventListener('keydown', (e) => {
  if (lb.hidden) return;
  if (e.key === 'Escape') close();
  if (e.key === 'ArrowLeft') show(-1);
  if (e.key === 'ArrowRight') show(1);
});

document.getElementById('year').textContent = new Date().getFullYear();
