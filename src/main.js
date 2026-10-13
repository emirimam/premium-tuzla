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

const langBtn = document.getElementById('lang');
function setLang(lang) {
  const dict = lang === 'bs' ? BS : EN;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const v = dict[el.dataset.i18n]; if (v) el.textContent = v;
  });
  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const v = dict[el.dataset.i18nHtml]; if (v) el.innerHTML = v;
  });
  document.documentElement.lang = lang;
  langBtn.textContent = lang === 'bs' ? 'EN' : 'BS';
  try { localStorage.setItem('lang', lang); } catch {}
}
let saved = null;
try { saved = localStorage.getItem('lang'); } catch {}
const browserBs = /^(bs|hr|sr|sh)/i.test(navigator.language || '');
let current = saved || (browserBs ? 'bs' : 'en');
setLang(current);
langBtn.addEventListener('click', () => { current = current === 'bs' ? 'en' : 'bs'; setLang(current); });

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
document.querySelectorAll('.room-media img').forEach((img) => img.addEventListener('click', () => open(img.dataset.full, img.alt)));
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
