// ── Hyrja «Rrjeti ndizet» (6,7 s) ─────────────────────────────────────────────
//
// Skript klasik në <head>, jo modul: klasa `me-hyrje` duhet të jetë te <html> PARA
// vizatimit të parë, përndryshe hero-ja shfaqet një çast dhe mbulohet — një
// dridhje që duket si gabim. Modulet ekzekutohen pas analizës së faqes.
//
// Kohët nuk jetojnë këtu: janë te :root i css/site.css («Kohët e hyrjes»). Ky skedar
// vetëm vendos nëse hyrja shfaqet dhe e heq kur mbaron.
//
// Hyrja është dekor. Nuk shfaqet kur:
//   • njeriu ka kërkuar më pak lëvizje (prefers-reduced-motion)
//   • hyri nga një lidhje te një seksion (#abonimet…) — ai do përmbajtjen, jo skenën
//   • e ka parë një herë në këtë sesion
// `?hyrja` në adresë e shfaq sërish (për provë), përveçse kur kërkohet më pak lëvizje.
// Çdo klik, tast, rrotullim ose prekje e kalon. Edhe pa këtë skedar mbaron vetë:
// CSS-ja e fsheh mbulesën në fund të animacionit të saj. Kur s'shfaqet, mbulesa
// hiqet nga DOM-i — asnjë tekst i fshehur nuk mbetet në faqe.
(function () {
  var html = document.documentElement;
  var shfaq = false;
  try {
    var detyruar = /(?:^|[?&])hyrja(?:[=&]|$)/.test(location.search.slice(1));
    var paLevizje = Boolean(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    shfaq = !paLevizje && (detyruar || !(location.hash && location.hash.length > 1));
    if (shfaq && !detyruar) {
      try {
        if (window.sessionStorage.getItem('aboneja-hyrja')) shfaq = false;
        else window.sessionStorage.setItem('aboneja-hyrja', '1');
      } catch { /* dritare private: shfaqet, pa kujtesë */ }
    }
    if (shfaq) html.classList.add('me-hyrje');
  } catch { shfaq = false; }

  document.addEventListener('DOMContentLoaded', function () {
    var mbulesa = document.querySelector('[data-hyrja]');
    if (!mbulesa) return;
    var ngjarjet = ['pointerdown', 'keydown', 'wheel', 'touchstart'];
    var svg = mbulesa.querySelector('.hyrja__linjat');
    // Linjat vizatohen në pikselët e ekranit: koordinatat 0–100 të `data-d` shkallëzohen te
    // gjerësia × lartësia. Me një viewBox 100 × 100 të shtrirë, vija do të trashej sipas boshtit
    // dhe copa e dritës së mjeteve do të dilte vezë. `pathLength="1"` i mban vizatimet të sakta.
    function gjeometria() {
      if (!svg) return;
      var w = window.innerWidth, h = window.innerHeight;
      svg.setAttribute('viewBox', '0 0 ' + w + ' ' + h);
      Array.prototype.forEach.call(svg.querySelectorAll('path[data-d]'), function (p) {
        p.setAttribute('d', p.getAttribute('data-d').replace(/(-?\d*\.?\d+)[\s,]+(-?\d*\.?\d+)/g, function (_, x, y) {
          return (x * w / 100).toFixed(1) + ' ' + (y * h / 100).toFixed(1);
        }));
      });
    }
    function hiq() {
      ngjarjet.forEach(function (n) { window.removeEventListener(n, kalo); });
      window.removeEventListener('resize', gjeometria);
      if (mbulesa.parentNode) mbulesa.parentNode.removeChild(mbulesa);
    }
    function kalo() { html.classList.add('hyrja--kaloi'); }
    if (!shfaq) { hiq(); return; }
    gjeometria();
    window.addEventListener('resize', gjeometria);
    ngjarjet.forEach(function (n) { window.addEventListener(n, kalo, { passive: true, once: true }); });
    // Mbulesa hiqet sapo mbaron animacioni i saj (fundi i 6,7 s ose kalimi) — jo kur mbaron një nga fëmijët.
    mbulesa.addEventListener('animationend', function (e) {
      if (e.target === mbulesa && (e.animationName === 'hyrja-mbaro' || e.animationName === 'hyrja-kalo')) hiq();
    });
  });
})();
