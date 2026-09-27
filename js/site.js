import { nisGjuhen, perkthe, gjuhaAktuale } from './gjuha.js?v=b3cb586a';
/* Aboneja — website publik. Pa varësi, pa gjurmues, pa cookie.
 *
 * Lexon vetëm dy skedarë: `site-config.json` (mjedisi dhe veçoritë) dhe
 * `data/catalog.json` (katalogu nga API-ja publike). Asnjë çmim nuk jeton
 * këtu: nëse katalogu nuk lexohet, faqja e thotë, nuk shpik.
 *
 * Teksti dinamik (çmimet, numrat) shkruhet në gjuhën aktive dhe rishkruhet kur
 * ndërrohet gjuha — përkthimi me fjalor nuk i kap dot fjalitë me numra.
 */

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => Array.from(el.querySelectorAll(s));

const FUSHEVEPRIMET = ['LINE', 'COMPANY', 'NETWORK'];
const PERSHKRIMET = {
  LINE: ['Një linjë autobusi, që e zgjedh kur blen.', 'One bus line, chosen when you buy.'],
  COMPANY: ['Të gjitha linjat e një operatori.', 'Every line of one operator.'],
  NETWORK: ['I gjithë rrjeti i linjave në Abonejë.', 'The whole network of lines in Aboneja.'],
};
const EMRAT = { LINE: 'Linjë', COMPANY: 'Kompani', NETWORK: 'Rrjet' };
const EMRAT_EN = { LINE: 'Line', COMPANY: 'Company', NETWORK: 'Network' };
/** Trajta e shquar, për fjali: «për rrjetin», «për kompaninë». */
const TE_SHQUARA = { LINE: 'linjën', COMPANY: 'kompaninë', NETWORK: 'rrjetin' };
const TE_SHQUARA_EN = { LINE: 'the line', COMPANY: 'the company', NETWORK: 'the whole network' };
/** Paketat turistike: emri dhe shënimi i secilës fushë — tekste që ka edhe fjalori. */
const TURISTI = {
  LINE: ['Një linjë', 'një linjë', 'në linjën që zgjedh'],
  COMPANY: ['Një kompani', 'të gjitha linjat e një kompanie', 'në të gjitha linjat e saj'],
  NETWORK: ['Gjithë Shqipëria', 'të gjitha linjat në Shqipëri', 'në të gjitha linjat'],
};
const TURISTI_EN = { LINE: 'one line', COMPANY: 'every line of one company', NETWORK: 'every line in Albania' };
const TURISTI_EMRI_EN = { LINE: 'One line', COMPANY: 'One company', NETWORK: 'All of Albania' };

/** Kohëzgjatja që shet V1. Katalogu vjen i filtruar; ky është rrjeti i dytë. */
const gjendja = { konfig: null, katalogu: null, kohezgjatja: 30 };

const en = () => gjuhaAktuale() === 'en';
const t = (sq, anglisht) => (en() ? anglisht : sq);

/** Numrat: shqip me pikë («1.600»), anglisht me presje («1,600»). */
const leke = (n) => `${String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, en() ? ',' : '.')}`;
const data = (iso) => {
  const d = new Date(iso);
  const p = (x) => String(x).padStart(2, '0');
  return `${p(d.getDate())}.${p(d.getMonth() + 1)}.${d.getFullYear()}`;
};
const ora = (iso) => {
  const d = new Date(iso);
  return `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
};

async function lexoJson(url, afati = 8000) {
  const nderpres = new AbortController();
  const k = setTimeout(() => nderpres.abort(), afati);
  try {
    const r = await fetch(url, { signal: nderpres.signal, cache: 'no-store', headers: { accept: 'application/json' } });
    if (!r.ok) throw new Error(`HTTP ${r.status}`);
    return await r.json();
  } finally {
    clearTimeout(k);
  }
}

function el(tag, klasa, tekst) {
  const e = document.createElement(tag);
  if (klasa) e.className = klasa;
  if (tekst != null) e.textContent = tekst;
  return e;
}

// ── Demoja lokale — butoni thotë të vërtetën ────────────────────────────────
//
// Butoni i vetëm me veprim te kjo faqe çonte te një port që shpesh është i fikur.
// Klikim pa rezultat është vetë defekti që kjo faqe nuk e lejon: ose punon, ose
// thotë pse jo. Prova bëhet nga serveri lokal (`/demo-gjendja`), sepse shfletuesi
// nuk e lexon dot gjendjen e një origjine tjetër.
async function provoDemon() {
  const lidhjet = $$('[data-app-link]');
  if (!lidhjet.length) return;
  let demo;
  try {
    const r = await fetch('/demo-gjendja', { cache: 'no-store' });
    if (!r.ok) return;                       // mjedis statik: rruga nuk ekziston
    demo = await r.json();
  } catch { return; }                        // pa përgjigje: lëre si ishte
  const shenimi = $('[data-demo-shenim]');
  if (demo.gati) {
    if (shenimi) shenimi.hidden = true;
    return;
  }
  for (const a of lidhjet) {
    a.removeAttribute('href');
    a.removeAttribute('target');
    a.setAttribute('aria-disabled', 'true');
    a.setAttribute('role', 'link');
    a.textContent = t('Demoja lokale është e fikur', 'The local demo is off');
  }
  if (shenimi) {
    shenimi.textContent = demo.arsyeja || t('Demoja lokale nuk përgjigjet.', 'The local demo does not respond.');
    shenimi.hidden = false;
  }
}

// ── Konfigurimi ─────────────────────────────────────────────────────────────
function zbatoKonfigurimin(k) {
  const f = k.features || {};
  const pilot = Boolean(f.pilot_badges);

  $('[data-pilot]').hidden = !(pilot && !f.payments_live);
  $$('[data-pilot-tag]').forEach((x) => { x.hidden = !pilot; });
  $$('[data-feature-off]').forEach((x) => { x.hidden = Boolean(f[x.dataset.featureOff]); });
  $$('[data-feature-on]').forEach((x) => { x.hidden = !f[x.dataset.featureOn]; });
  const lista = $('[data-pilot-list]');
  if (lista) lista.hidden = !$$('li', lista).some((li) => !li.hidden);
  const kamera = $('[data-tourist-camera]');
  if (kamera) kamera.hidden = Boolean(f.tourist_camera_reading);

  // Pa skemë («/demo/» ose «demo/») = e vetë faqes. Relative duhet kur faqja
  // rri në një nën-dosje (GitHub Pages), ku «/demo/» do të dilte jashtë saj.
  const eVetes = Boolean(k.appUrl) && !/^[a-z][a-z\d+.-]*:/i.test(k.appUrl);
  $$('[data-app-link]').forEach((a) => {
    if (k.appUrl) {
      a.href = k.appUrl;
      a.rel = 'noopener';
      // Demoja e vetë faqes hapet në të njëjtën skedë: «kthehu» të sjell këtu.
      if (eVetes) a.removeAttribute('target'); else a.target = '_blank';
      a.textContent = k.appLinkLabel || 'Hap aplikacionin';
      a.removeAttribute('aria-disabled');
    } else {
      a.removeAttribute('href');
      a.setAttribute('aria-disabled', 'true');
      a.setAttribute('role', 'link');
      a.textContent = k.appLinkLabel || 'Aplikacioni vjen së shpejti';
    }
  });
  // Demoja shërbehet nga vetë faqja (`/demo/`): prova e një porti tjetër s'ka kuptim.
  if (k.appUrl && !eVetes) provoDemon();
  else { const sh = $('[data-demo-shenim]'); if (sh) sh.hidden = true; }

  if (Array.isArray(k.catalogDurations) && k.catalogDurations.length) gjendja.kohezgjatja = k.catalogDurations[0];
  zbatoTekstetEKonfigurimit();
  vizatoTuristet();
}

/** Fjalitë që varen nga konfigurimi — rishkruhen edhe kur ndërrohet gjuha. */
function zbatoTekstetEKonfigurimit() {
  const k = gjendja.konfig;
  if (!k) return;
  if (k.features?.payments_live) {
    $('[data-fill="payments-faq"]').textContent = t(
      'Po. Pagesa bëhet brenda aplikacionit, dhe abonimi aktivizohet pasi banka ta konfirmojë.',
      'Yes. You pay inside the app, and the subscription activates once the bank confirms it.',
    );
  }
  const email = k.contact?.email;
  for (const key of ['contact-main', 'contact-faq']) {
    const p = $(`[data-fill="${key}"]`);
    if (!p || !email) continue;
    p.textContent = t('Shkruaj te ', 'Write to ');
    const a = el('a', null, email);
    a.href = `mailto:${email}`;
    p.append(a, document.createTextNode(t('. Përgjigjemi në ditët e punës.', '. We reply on working days.')));
  }
  if (k.contact?.city) $('[data-fact="city"]').textContent = k.contact.city;
  const env = $('[data-env]');
  if (k.environment !== 'PRODUCTION') {
    env.textContent = k.label || k.environment;
    env.hidden = false;
  }
}

// ── Turistët — çmime të njoftuara, jo katalog ───────────────────────────────
function vizatoTuristet() {
  const vendi = $('[data-tourist-plans]');
  const tur = gjendja.konfig?.tourist;
  if (!vendi || !tur?.offers?.length) return;
  const dite = tur.duration_days;
  vendi.replaceChildren(...tur.offers.filter((o) => TURISTI[o.scope]).map((o) => {
    const li = el('li');
    li.append(
      el('span', 'tourist-plans__price', `${leke(o.price_lek)} L`),
      el('span', 'tourist-plans__name', t(TURISTI[o.scope][0], TURISTI_EMRI_EN[o.scope])),
      el('span', 'tourist-plans__note', t(`${dite} ditë ${TURISTI[o.scope][2]}`, `${dite} days on ${TURISTI_EN[o.scope]}`)),
    );
    return li;
  }));
  const faq = $('[data-fill="tourist-faq"]');
  if (faq) {
    const liste = tur.offers.filter((o) => TURISTI[o.scope]).map((o) => (en()
      ? `${TURISTI_EN[o.scope]} ${leke(o.price_lek)} L`
      : `${TURISTI[o.scope][1]} ${leke(o.price_lek)} L`)).join(', ');
    faq.textContent = t(
      `Jo me abonimet e qytetarëve. Turistët kanë seksionin e tyre, vetëm për turistë, me ofertat e veta: paketat turistike ${dite}-ditore — ${liste}. `
        + 'Turisti regjistrohet me pasaportë dhe konfirmon emailin me një kod, që ta ruajë llogarinë edhe kur ndërron telefon. '
        + 'Seksioni hapet me përditësimin e ardhshëm; leximi i pasaportës me kamerë nuk është ende gati.',
      `Not with the citizens’ subscriptions. Visitors have their own section, for visitors only, with their own offers: ${dite}-day visitor packs — ${liste}. `
        + 'A visitor signs up with a passport and confirms the email with a code, so the account survives a change of phone. '
        + 'The section opens with the next update; reading the passport with the camera is not ready yet.',
    );
  }
}

// ── Katalogu ────────────────────────────────────────────────────────────────
/** Vetëm kohëzgjatja që shet ky version — edhe nëse një katalog i vjetër sjell më shumë. */
function produktet() {
  return (gjendja.katalogu?.products || []).filter((p) => p.duration_days === gjendja.kohezgjatja);
}
function produkti(scope) {
  return produktet().find((p) => p.scope === scope) || null;
}

function vizatoPlanet() {
  const vendi = $('[data-plans]');
  const kat = gjendja.katalogu;
  vendi.replaceChildren();

  if (!kat || kat.source === 'unavailable') {
    const s = el('div', 'state state--error');
    s.append(el('p', null, gjendja.konfig?.catalog === 'live'
      ? t('Çmimet nuk u lexuan nga katalogu tani. Serveri i Abonejës mund të jetë i fikur.', 'Prices could not be read from the catalogue right now. The Aboneja server may be off.')
      : t('Çmimet publikohen së shpejti.', 'Prices will be published soon.')));
    if (gjendja.konfig?.catalog === 'live') {
      const b = el('button', 'btn btn--small btn--primary', t('Provo sërish', 'Try again'));
      b.type = 'button';
      b.addEventListener('click', ngarkoKatalogun);
      s.append(b);
    }
    vendi.append(s);
    $('[data-catalog-source]').textContent = '';
    return;
  }

  const pagesa = gjendja.konfig?.features?.payments_live;
  for (const scope of FUSHEVEPRIMET) {
    const p = produkti(scope);
    const karta = el('article', `pass${scope === 'NETWORK' ? ' pass--featured' : ''}${p ? '' : ' pass--unavailable'}`);
    const koka = el('div', 'pass__top');
    // Emrat shkruhen drejt në gjuhën aktive: fjalori ka «Kompani» si «Companies»
    // (numëruesi i hero-s), ndërsa këtu është një kompani.
    koka.append(el('h3', 'pass__name', t(EMRAT[scope], EMRAT_EN[scope])), el('span', 'pass__days', t(`${gjendja.kohezgjatja} ditë`, `${gjendja.kohezgjatja} days`)));
    const fundi = el('div', 'pass__foot');
    if (p) {
      const cmimi = el('p', 'pass__price', leke(p.price_lek));
      cmimi.append(el('small', null, 'L'));
      fundi.append(cmimi, el('p', 'pass__status', pagesa ? t('Blihet te aplikacioni', 'Bought in the app') : t('Blerje demo gjatë pilotit', 'Demo purchase during the pilot')));
    } else {
      fundi.append(el('p', 'pass__price', t('Nuk shitet ende', 'Not on sale yet')), el('p', 'pass__status', t('Jo në katalog', 'Not in the catalogue')));
    }
    karta.append(koka, el('p', 'pass__summary', t(...PERSHKRIMET[scope])), fundi);
    vendi.append(karta);
  }

  $('[data-catalog-source]').textContent = kat.source === 'live'
    ? t(`Çmimet u lexuan nga katalogu i Abonejës në ${ora(kat.measured_at)}.`, `Prices were read from the Aboneja catalogue at ${ora(kat.measured_at)}.`)
    : t(`Çmimet sipas katalogut të Abonejës më ${data(kat.measured_at)}.`, `Prices as in the Aboneja catalogue on ${data(kat.measured_at)}.`);
}

function mbushFaktet() {
  const kat = gjendja.katalogu;
  const rrjeti = kat?.network || {};
  $('[data-fact="routes"]').textContent = rrjeti.routes ?? '—';
  $('[data-fact="companies"]').textContent = rrjeti.companies ?? '—';

  if (rrjeti.routes && rrjeti.companies) {
    $('[data-fill="network-short"]').textContent = t(`e Abonejës: ${rrjeti.routes} linja nga ${rrjeti.companies} kompani`,
      `of Aboneja: ${rrjeti.routes} lines from ${rrjeti.companies} companies`);
    $('[data-fill="network-faq"]').textContent = t(`Në ${rrjeti.routes} linja të autobusëve urbanë të Tiranës, nga ${rrjeti.companies} kompani.`,
      `On ${rrjeti.routes} Tirana city bus lines, from ${rrjeti.companies} companies.`);
  }

  const muaj = produktet().slice().sort((a, b) => a.price_lek - b.price_lek);
  if (muaj.length) {
    const i = muaj[0];
    const f = muaj[muaj.length - 1];
    const short = $('[data-fill="price-short"]');
    const dite = gjendja.kohezgjatja;
    short.replaceChildren(document.createTextNode(t('Nga ', 'From ')), el('b', null, `${leke(i.price_lek)} L`),
      document.createTextNode(t(` për ${dite} ditë në një ${EMRAT[i.scope].toLowerCase()}`, ` for ${dite} days on one ${EMRAT_EN[i.scope].toLowerCase()}`)),
      ...(muaj.length > 1
        ? [document.createTextNode(t(' deri në ', ' to ')), el('b', null, `${leke(f.price_lek)} L`),
          document.createTextNode(t(` për ${TE_SHQUARA[f.scope]}.`, ` for ${TE_SHQUARA_EN[f.scope]}.`))]
        : [document.createTextNode('.')]));
    const liste = FUSHEVEPRIMET.map((s) => produkti(s)).filter(Boolean)
      .map((p) => `${en() ? EMRAT_EN[p.scope] : EMRAT[p.scope]} ${leke(p.price_lek)} L`).join(' · ');
    $('[data-fill="price-faq"]').textContent = t(
      `Abonimi mujor, ${dite} ditë: ${liste}. Sot shitet vetëm abonimi ${dite}-ditor. Çmimet vijnë nga i njëjti katalog që përdor aplikacioni.`,
      `Monthly subscription, ${dite} days: ${liste}. Only the ${dite}-day subscription is sold today. Prices come from the same catalogue the app uses.`,
    );
  }
}

async function ngarkoKatalogun() {
  $('[data-plans]').replaceChildren(el('div', 'state state--loading', t('Po lexohen çmimet nga katalogu…', 'Reading prices from the catalogue…')));
  try {
    gjendja.katalogu = await lexoJson('data/catalog.json');
  } catch {
    gjendja.katalogu = null;
  }
  vizatoPlanet();
  mbushFaktet();
  perkthe();
}

// ── Ndërveprimet ────────────────────────────────────────────────────────────
function lidhMenune() {
  const butoni = $('[data-menu-toggle]');
  const nav = $('[data-nav]');
  const mbyll = () => { butoni.setAttribute('aria-expanded', 'false'); nav.removeAttribute('data-open'); };
  butoni.addEventListener('click', () => {
    const hapur = butoni.getAttribute('aria-expanded') === 'true';
    butoni.setAttribute('aria-expanded', String(!hapur));
    if (hapur) nav.removeAttribute('data-open'); else nav.setAttribute('data-open', 'true');
  });
  $$('a', nav).forEach((a) => a.addEventListener('click', mbyll));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && butoni.getAttribute('aria-expanded') === 'true') { mbyll(); butoni.focus(); }
  });
}

function ndiqSeksionet() {
  if (!('IntersectionObserver' in window)) return;
  // Butoni «Hap demon» nis me href=#abonimet para se të vijë konfigurimi: pa këtë përjashtim,
  // Map-i e mbante atë në vend të lidhjes «Abonimet» dhe e ndizte (tekst i bardhë mbi të bardhë).
  const lidhjet = new Map($$('[data-nav] a[href^="#"]:not([data-app-link])').map((a) => [a.getAttribute('href').slice(1), a]));
  const vezhguesi = new IntersectionObserver((hyrjet) => {
    for (const h of hyrjet) {
      if (!h.isIntersecting) continue;
      lidhjet.forEach((a, id) => { if (id === h.target.id) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current'); });
    }
  }, { rootMargin: '-45% 0px -50% 0px' });
  lidhjet.forEach((_, id) => { const s = document.getElementById(id); if (s) vezhguesi.observe(s); });
}

// Kur ndërrohet gjuha, fjalitë me numra rishkruhen; pjesa tjetër përkthehet nga fjalori.
document.addEventListener('aboneja:gjuha', () => {
  if (gjendja.konfig) { zbatoTekstetEKonfigurimit(); vizatoTuristet(); }
  if (gjendja.katalogu !== null) { vizatoPlanet(); mbushFaktet(); }
  perkthe();
});

// ── Nisja ───────────────────────────────────────────────────────────────────
async function nis() {
  $('[data-year]').textContent = String(new Date().getFullYear());
  lidhMenune();
  ndiqSeksionet();
  try {
    gjendja.konfig = await lexoJson('site-config.json');
    zbatoKonfigurimin(gjendja.konfig);
  } catch {
    // Pa konfigurim, faqja mbetet në gjendjen më të kujdesshme: pa lidhje aplikacioni.
    gjendja.konfig = null;
    $$('[data-app-link]').forEach((a) => { a.removeAttribute('href'); a.setAttribute('aria-disabled', 'true'); });
  }
  await ngarkoKatalogun();
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', nis);
else nis();

// Gjuha nis menjëherë për tekstin statik; teksti dinamik përkthehet kur vjen.
nisGjuhen();
