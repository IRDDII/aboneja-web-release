// ── Gjuha e faqes: shqip ↔ anglisht ─────────────────────────────────────────
//
// Faqja shkruhet SHQIP. Anglishtja vjen si përkthim i rreshtave që shihen, jo si
// faqe e dytë: një faqe e dytë do të kërkonte dy burime të vërtete dhe do të
// dilte jashtë sinkroni brenda javës.
//
// Përkthimi ndodh mbi NYJET E TEKSTIT, prandaj asnjë atribut, lidhje ose skript
// nuk preket. Ajo që nuk ka përkthim, mbetet shqip — dhe kjo duket, që të shtohet.
// Fjalitë me numra (çmimet, linjat) i shkruan `site.js` vetë në gjuhën aktive:
// një fjalor me përputhje të saktë nuk i kap dot.
const EN = {
  'Kalo te përmbajtja': 'Skip to content',
  // Hyrja «Rrjeti ndizet» (index.html, 26 shtator)
  'Abonimi i autobusit, në telefonin tënd.': 'Your bus subscription, on your phone.',
  'Kalo': 'Skip',
  'Një linjë': 'One line',
  'Një kompani': 'One company',
  'Gjithë rrjeti': 'The whole network',
  // Kapitujt si stacione (01–09): titujt e mëdhenj që nuk janë emra seksionesh
  'Pesë hapa. Një udhëtim.': 'Five steps. One journey.',
  'Linjë. Kompani. Rrjet.': 'Line. Company. Network.',
  'Skaneri pyet. Serveri vendos.': 'The scanner asks. The server decides.',
  'Stacioni i fundit': 'Last stop',
  'Menuja': 'Menu',
  'Si funksionon': 'How it works',
  'Abonimet': 'Subscriptions',
  'Turistët': 'Visitors',
  'Operatorët': 'Operators',
  'Siguria': 'Security',
  'Historia': 'Why Aboneja',
  'Pyetje': 'FAQ',
  'Kontakt': 'Contact',
  'Rreth': 'About',
  'Hap demon': 'Open the demo',
  'Hap aplikacionin': 'Open the app',
  'Në pilot. Pagesat reale ende nuk janë aktive.': 'In pilot. Real payments are not active yet.',
  'Një mënyrë më e thjeshtë për transportin urban.': 'A simpler way to ride the city.',
  'Abonimi i autobusit, në telefonin tënd. Zgjedh një linjë, një kompani ose gjithë rrjetin, dhe e tregon me një kod QR që verifikohet në çast kur hip.':
    'Your bus subscription, on your phone. Choose one line, one company or the whole network, and show a QR code that is verified the moment you board.',
  'Shiko abonimet': 'See subscriptions',
  'Linja': 'Lines',
  'Kompani': 'Companies',
  'Qyteti': 'City',
  'Tiranë': 'Tirana',
  'Çfarë blen?': 'What do you buy?',
  'Një abonim 30-ditësh për autobusin urban. Pa kartë plastike: abonimi rri te llogaria jote.':
    'A 30-day city bus subscription. No plastic card: the subscription lives in your account.',
  'Ku vlen?': 'Where is it valid?',
  'Në linjën që zgjedh, në të gjitha linjat e një kompanie, ose në gjithë rrjetin': 'On the line you choose, on every line of one company, or across the whole network',
  'e Abonejës': 'of Aboneja',
  'Sa kushton?': 'What does it cost?',
  'Çmimet lexohen nga katalogu i Abonejës, te seksioni Abonimet.': 'Prices are read from the Aboneja catalogue, in the Subscriptions section.',
  'Pesë hapa, një herë. Pastaj çdo udhëtim është vetëm hapi i fundit.': 'Five steps, once. After that every ride is only the last step.',
  'Regjistrohu': 'Sign up',
  'Krijo llogarinë me email dhe fjalëkalim, dhe konfirmo emailin me një kod.': 'Create the account with an email and password, then confirm the email with a code.',
  'Zgjidh abonimin': 'Choose the subscription',
  'Linjë, kompani ose rrjet, për 30 ditë. Çmimi shfaqet para se të vendosësh.': 'Line, company or network, for 30 days. The price is shown before you decide.',
  'Aktivizo': 'Activate',
  'Pas blerjes abonimi del te «Abonimet e mia», me datën kur nis dhe kur mbaron.': 'After the purchase the subscription appears under “My subscriptions”, with its start and end date.',
  'Shfaq QR-në': 'Show the QR',
  'Aplikacioni merr nga serveri një kod të ri, që vlen vetëm për pak minuta.': 'The app fetches a fresh code from the server, valid for a couple of minutes only.',
  'Udhëto': 'Ride',
  'Skaneri i operatorit e verifikon kodin te serveri dhe të tregon përgjigjen menjëherë.': 'The operator’s scanner verifies the code with the server and shows the answer at once.',
  'Tre shtrirje. Zgjidh sa larg të çon abonimi.': 'Three scopes. Choose how far your subscription takes you.',
  'Të gjitha vlejnë': 'All of them last',
  '30 ditë': '30 days',
  'Po lexohen çmimet nga katalogu…': 'Reading prices from the catalogue…',
  'Linjë': 'Line',
  'Vlen në një linjë të vetme, që e zgjedh te blerja. E përshtatshme kur shkon çdo ditë në të njëjtin drejtim.':
    'Valid on a single line, chosen at purchase. Right for people who travel the same way every day.',
  'Vlen në të gjitha linjat e një operatori. Para blerjes sheh cilat linja mbulon ajo kompani.':
    'Valid on every line of one operator. Before buying you see which lines that company covers.',
  'Rrjet': 'Network',
  'Vlen në të gjitha linjat e të gjitha kompanive që janë në Abonejë. Nuk ke nevojë të mendosh kush e drejton autobusin.':
    'Valid on every line of every company in Aboneja. You never have to think about who runs the bus.',

  // ── Turistët ─────────────────────────────────────────────────────────────
  'Përditësimi i ardhshëm': 'Next update',
  'Viziton Shqipërinë?': 'Visiting Albania?',
  'Paketa turistike 7-ditore, vetëm për turistët. Regjistrohesh me pasaportë, konfirmon emailin me një kod, merr QR-në dhe udhëton shtatë ditë.':
    'A 7-day visitor pack, for visitors only. You sign up with your passport, confirm your email with a code, get the QR and ride for seven days.',
  'Turistët nuk blejnë abonimet mujore të qytetarëve: kanë ofertat e tyre. Paketat turistike nuk janë ende në shitje; këtu tregohen çmimet e vendosura, që të dihen para se të hapen.':
    'Visitors do not buy the citizens’ monthly subscriptions: they have their own offers. Visitor packs are not on sale yet; the agreed prices are shown here so they are known before they open.',
  'Çmimet e paketave turistike publikohen së shpejti.': 'Visitor pack prices will be published soon.',

  // ── Operatorët ───────────────────────────────────────────────────────────
  'Për operatorët': 'For operators',
  'Kompanitë e transportit marrin skanerin, verdiktin e serverit dhe një pamje të qartë të udhëtimeve në linjat e tyre.':
    'Transport companies get the scanner, the server’s verdict and a clear view of the rides on their lines.',
  'Skanimi': 'Scanning',
  'Fatorino skanon kodin QR të udhëtarit me pajisjen e kompanisë.': 'The conductor scans the passenger’s QR with the company device.',
  'Verifikimi': 'Verification',
  'Serveri vendos: i vlefshëm, i skaduar, i revokuar ose i përdorur tashmë. Pajisja nuk vendos vetë.':
    'The server decides: valid, expired, revoked or already used. The device never decides on its own.',
  'Kontrolli': 'Inspection',
  'Kontrollori mund ta rikontrollojë një udhëtar pas hipjes, pa e numëruar udhëtimin dy herë.':
    'An inspector can re-check a passenger after boarding without counting the ride twice.',
  'Menaxhimi': 'Management',
  'Kompania mban pajisjet e veta të skanimit dhe sheh skanimet në linjat që drejton.': 'The company manages its own scanners and sees the scans on the lines it runs.',
  'Ndarja': 'Revenue split',
  'Abonimi i rrjetit nuk i shkon kompanisë ku u ble: ndahet sipas udhëtimeve që ndodhën vërtet — kush e mbarti udhëtarin, merr pjesën.':
    'A network subscription does not belong to the company that sold it: it is split by the rides that actually happened — whoever carried the passenger gets the share.',

  // ── Siguria ──────────────────────────────────────────────────────────────
  'Siguria dhe privatësia': 'Security and privacy',
  'Si i mbajmë të dhënat e tua, pa premtime më të mëdha se sistemi.': 'How we hold your data, with no promises bigger than the system.',
  'Identiteti i mbrojtur': 'Protected identity',
  'Identiteti vuloset një herë dhe nuk ndryshohet më nga profili. Aboneja nuk ruan foto të dokumentit, dhe numri i tij shfaqet i maskuar edhe për administratorët.':
    'Identity is sealed once and is never edited from the profile. Aboneja stores no photo of the document, and its number is masked even for administrators.',
  'Verifikim te serveri': 'Verified on the server',
  'Çdo skanim vendoset te serveri, jo te telefoni apo te skaneri. Një aplikacion i ndryshuar nuk e bën dot një abonim të skaduar të vlefshëm.':
    'Every scan is decided on the server, not on the phone or the scanner. A modified app cannot make an expired subscription valid.',
  'Kodi QR': 'The QR code',
  'Një abonim ka vetëm një kod aktiv. Kodi skadon pas pak minutash, dhe i njëjti kod i përdorur në dy vende kapet.':
    'A subscription has only one live code. It expires within minutes, and the same code used in two places is caught.',
  'Fjalëkalimet': 'Passwords',
  'Fjalëkalimi nuk ruhet kurrë ashtu siç e shkruan: baza mban vetëm një hash të tij.': 'A password is never stored as you type it: the database keeps only a hash.',
  'Gjurmë auditimi': 'Audit trail',
  'Hyrjet dhe veprimet e ndjeshme të administratorëve regjistrohen, që çdo ndryshim të ketë emër dhe kohë.':
    'Sign-ins and sensitive administrator actions are recorded, so every change carries a name and a time.',
  'Ende në pilot': 'Still in pilot',
  'Pagesat reale me bankë': 'Real bank payments',
  'Dërgimi i emailit te kutia jote reale': 'Email delivery to your real inbox',
  'Leximi i dokumentit me kamerë': 'Reading the document with the camera',

  // ── Pyetje ───────────────────────────────────────────────────────────────
  'Pyetje të shpeshta': 'Frequently asked questions',
  'Përgjigje nga mënyra si punon sistemi sot.': 'Answers from how the system works today.',
  'Çfarë është Aboneja?': 'What is Aboneja?',
  'Abonimi i autobusit urban në telefon. Blen një abonim 30-ditësh për një linjë, një kompani ose gjithë rrjetin, dhe e tregon me një kod QR që skanohet kur hip.':
    'The city bus subscription on your phone. You buy a 30-day subscription for one line, one company or the whole network, and show a QR code that is scanned when you board.',
  'Çmimet janë te seksioni Abonimet dhe lexohen nga i njëjti katalog që përdor aplikacioni.': 'Prices are in the Subscriptions section and come from the same catalogue the app uses.',
  'Në linjat e autobusëve urbanë të Tiranës që janë në Abonejë.': 'On the Tirana city bus lines that are in Aboneja.',
  'Abonimi i linjës vlen në linjën që zgjedh, ai i kompanisë në linjat e saj, dhe ai i rrjetit kudo.': 'A line subscription is valid on the chosen line, a company one on its lines, and a network one everywhere.',
  'A funksionon pa internet?': 'Does it work without internet?',
  'Jo ende. Kodi QR krijohet nga serveri dhe vlen vetëm pak minuta, prandaj telefoni ka nevojë për internet kur e hap. Edhe skaneri i verifikon kodet te serveri.':
    'Not yet. The QR is created by the server and lasts only a few minutes, so the phone needs internet when you open it. The scanner also verifies codes with the server.',
  'Si regjistrohem?': 'How do I sign up?',
  'Nis me dokumentin: shkruan emrin, mbiemrin, datëlindjen dhe numrin personal, dhe i konfirmon. Pastaj krijon llogarinë me email dhe fjalëkalim dhe konfirmon emailin me një kod. Identiteti vuloset nga serveri dhe nuk ndryshohet më. Më pas zgjedh abonimin.':
    'You start with the document: enter your first name, last name, date of birth and personal number, and confirm them. Then you create the account with an email and password and confirm the email with a code. The server seals the identity and it never changes again. After that you choose the subscription.',
  'Çfarë ndodh kur ndryshoj telefon?': 'What happens when I change phone?',
  'Abonimi rri te llogaria, jo te telefoni. Hyr me të njëjtën llogari në telefonin e ri: kodi i ri QR e zëvendëson menjëherë të vjetrin.':
    'The subscription lives in the account, not the phone. Sign in on the new phone and the new QR immediately replaces the old one.',
  'Si funksionon QR?': 'How does the QR work?',
  'Kur hap abonimin, aplikacioni merr një kod të ri nga serveri. Skaneri e dërgon kodin te serveri, i cili kontrollon abonimin dhe kthen përgjigjen: i vlefshëm, i skaduar, i revokuar ose i përdorur tashmë.':
    'When you open the subscription, the app fetches a fresh code from the server. The scanner sends that code back to the server, which checks the subscription and answers: valid, expired, revoked or already used.',
  'A mund ta përdor si turist?': 'Can I use it as a visitor?',
  'Jo me abonimet e qytetarëve. Turistët kanë seksionin e tyre, vetëm për turistë, me ofertat e veta: paketat turistike 7-ditore (shih seksionin Turistët). Turisti regjistrohet me pasaportë dhe konfirmon emailin me një kod, që ta ruajë llogarinë edhe kur ndërron telefon. Seksioni hapet me përditësimin e ardhshëm; leximi i pasaportës me kamerë nuk është ende gati.':
    'Not with the citizens’ subscriptions. Visitors have their own section, for visitors only, with their own offers: 7-day visitor packs (see the Visitors section). A visitor signs up with a passport and confirms the email with a code, so the account survives a change of phone. The section opens with the next update; reading the passport with the camera is not ready yet.',
  'Çfarë ndodh nëse më skadon abonimi?': 'What if my subscription expires?',
  'Skaneri e tregon si të skaduar dhe hipja nuk pranohet me atë abonim. Abonimi nuk rinovohet vetë: blen një të ri nga aplikacioni kur të duash.':
    'The scanner shows it as expired and boarding is not accepted with it. A subscription never renews itself: you buy a new one from the app whenever you want.',
  'A mund të paguaj sot?': 'Can I pay today?',
  'Jo ende. Pagesat reale hapen vetëm pasi lidhja me bankën të provohet plotësisht. Deri atëherë blerjet në pilot janë demo.':
    'Not yet. Real payments open only after the bank connection is fully proven. Until then, pilot purchases are demo.',
  'Si kontaktoj mbështetjen?': 'How do I contact support?',
  'Adresa zyrtare e mbështetjes publikohet para nisjes së pilotit.': 'The official support address will be published before the pilot starts.',

  // ── Pse u krijua ─────────────────────────────────────────────────────────
  'Pse u krijua Aboneja Ime': 'Why Aboneja Ime was built',
  '«Pa radhë, pa sportele.»': '“No queues, no counters.”',
  'Problemi': 'The problem',
  'Qytetarët shqiptarë që përdorin transportin publik urban përballen çdo ditë me radhë të gjata, orare të kufizuara të sporteleve dhe mungesë informacioni në kohë reale.':
    'Albanians who use urban public transport face long queues every day, limited counter hours and no real-time information.',
  'Klasa punëtore — shtresa që mbështetet më shumë te transporti publik — humbet kohë dhe energji të çmuar vetëm për të blerë një abonim mujor.':
    'The working class — the people who rely on public transport the most — lose precious time and energy just to buy a monthly subscription.',
  'Zgjidhja': 'The solution',
  'Aboneja Ime është një platformë digjitale që mundëson blerjen e abonimeve të transportit publik urban direkt nga smartfoni, 24/7, pa radhë dhe pa sportele.':
    'Aboneja Ime is a digital platform for buying urban public transport subscriptions straight from your smartphone, 24/7, with no queues and no counters.',
  'Funksionalitetet kryesore': 'Key features',
  'Blerja e abonimit mujor online, me pagesë digjitale': 'Buying the monthly subscription online, with digital payment',
  'Në pilot: blerjet janë demo derisa të lidhet banka': 'In pilot: purchases are demo until the bank is connected',
  'Aktive': 'Live',
  'QR kod personal për validim në transport': 'A personal QR code for validation on board',
  'Gati: kodi lëshohet nga serveri dhe vlen dy minuta': 'Ready: the server issues the code and it lasts two minutes',
  'Gjurmim i pozicionit të mjeteve në kohë reale': 'Real-time vehicle tracking',
  'Në zhvillim: kërkon pajisje GPS në autobus': 'In development: needs a GPS device on the bus',
  'Dashboard personal me statusin dhe skadimin e abonimit': 'A personal dashboard with the subscription’s status and expiry',
  'Gati: skadimi tregohet deri në orë': 'Ready: the expiry is shown down to the hour',
  'Panel administrativ për institucionet': 'An administration panel for institutions',
  'Në pilot: del online pas hyrjes me dy faktorë': 'In pilot: goes online after two-factor sign-in',
  'Sot Aboneja është në pilot: udhëtari regjistrohet, blen, merr QR-në dhe skanohet — me para demo. Pagesat reale mbeten të mbyllura derisa banka dhe provat e parave të jenë në vend. Kjo faqe nuk e fsheh asnjë nga këto.':
    'Today Aboneja is in pilot: the passenger signs up, buys, gets the QR and is scanned — with demo money. Real payments stay closed until the bank and the money tests are in place. This page hides none of it.',

  // ── Rreth, kontakt ───────────────────────────────────────────────────────
  'Rreth Aboneja': 'About Aboneja',
  'Aboneja Ime është një projekt shqiptar për transportin urban, i ndërtuar në Tiranë.': 'Aboneja Ime is an Albanian project for city transport, built in Tirana.',
  'Qëllimi është i thjeshtë: udhëtari ta blejë, ta mbajë dhe ta tregojë abonimin nga telefoni, dhe kompanitë e transportit të kenë të dhëna të sakta për udhëtimet në linjat e tyre.':
    'The aim is simple: the passenger buys, keeps and shows the subscription from their phone, and transport companies get accurate data about the rides on their lines.',
  'Kalimi nga sporteli fizik te telefoni heq pritjen dhe oraret e kufizuara. Platforma mbështetet te validimi me kod QR pa kontakt dhe te një panel drejtimi për institucionet vendore; gjurmimi i mjeteve në kohë reale është hapi i radhës.':
    'Moving from the physical counter to the phone removes the waiting and the limited opening hours. The platform rests on contactless QR validation and a management dashboard for local authorities; real-time vehicle tracking is the next step.',
  'Aboneja u ndërtua nga një person, me ndihmën e inteligjencës artificiale dhe me kosto minimale. Sot nuk është më ide: ka bazë të dhënash të vetën, verifikim identiteti, kod QR që lëshohet nga serveri, skanim me verdikt të serverit dhe një regjistër ku çdo transaksion mbyllet në zero.':
    'Aboneja was built by one person, with the help of artificial intelligence and at minimal cost. It is no longer an idea: it has its own database, identity verification, a QR code issued by the server, scanning with a server verdict, and a ledger where every transaction sums to zero.',
  'Synimi është të shërbejë bashkitë e Shqipërisë, duke nisur nga një linjë e vetme me një operator. Aboneja është sot në fazë pilot, dhe çdo veçori që nuk është ende gati shënohet si e tillë në këtë faqe.':
    'The aim is to serve the municipalities of Albania, starting from a single line with a single operator. Aboneja is in its pilot phase today, and any feature that is not ready yet is marked as such on this page.',
  'Ky është një hap drejt infrastrukturës së qytetit të mençur: bashkëpunim mes sektorit publik dhe atij privat, me teknologji që e bën abonimin më të arritshëm për ata që udhëtojnë çdo ditë.':
    'This is a step toward smart city infrastructure: public–private collaboration, with technology that makes the subscription more accessible for the people who travel every day.',
  'Adresa zyrtare e mbështetjes publikohet para nisjes së pilotit. Deri atëherë, Aboneja është në testim.':
    'The official support address will be published before the pilot starts. Until then, Aboneja is in testing.',
  'Aboneja Ime': 'Aboneja Ime',
  'Shqip': 'Shqip',
  'English': 'English',
};

const SQ = new Map();          // teksti anglisht → shqipja origjinale, për kthimin
let gjuha = 'sq';

function nyjet(rrenja) {
  const w = document.createTreeWalker(rrenja, NodeFilter.SHOW_TEXT, {
    acceptNode(n) {
      const p = n.parentElement;
      if (!p || p.closest('script, style, svg')) return NodeFilter.FILTER_REJECT;
      return n.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    },
  });
  const lista = [];
  let n; while ((n = w.nextNode())) lista.push(n);
  return lista;
}

/** Gjuha aktive: 'sq' ose 'en'. */
export function gjuhaAktuale() {
  return gjuha;
}

/**
 * Zbaton gjuhën aktive mbi çdo nyje teksti. Pa ngjarje dhe pa ruajtje, që
 * `site.js` ta thërrasë pasi fut tekst të ri (çmimet vijnë pas nisjes).
 * I sigurt për t'u thirrur shumë herë: një nyje e përkthyer nuk ndryshon më.
 */
export function perkthe(rrenja = document.body) {
  for (const n of nyjet(rrenja)) {
    const v = n.nodeValue.trim();
    if (!v) continue;
    if (gjuha === 'en') {
      if (EN[v]) { SQ.set(EN[v], v); n.nodeValue = n.nodeValue.replace(v, EN[v]); }
    } else if (SQ.has(v)) {
      n.nodeValue = n.nodeValue.replace(v, SQ.get(v));
    }
  }
}

export function vendosGjuhen(e) {
  gjuha = e === 'en' ? 'en' : 'sq';
  document.documentElement.lang = gjuha;
  perkthe();
  const b = document.querySelector('[data-lang-toggle]');
  if (b) { b.textContent = gjuha === 'en' ? 'Shqip' : 'English'; b.setAttribute('aria-label', gjuha === 'en' ? 'Kalo në shqip' : 'Switch to English'); }
  try { localStorage.setItem('aboneja-gjuha', gjuha); } catch { /* dritare private */ }
  // Fjalitë me numra i rishkruan `site.js` — ai e dëgjon këtë ngjarje.
  document.dispatchEvent(new CustomEvent('aboneja:gjuha', { detail: gjuha }));
}

export function nisGjuhen() {
  const b = document.querySelector('[data-lang-toggle]');
  if (b) b.addEventListener('click', () => vendosGjuhen(gjuha === 'en' ? 'sq' : 'en'));
  let ruajtur = null;
  try { ruajtur = localStorage.getItem('aboneja-gjuha'); } catch { /* pa ruajtje */ }
  if (ruajtur === 'en') vendosGjuhen('en');
}
