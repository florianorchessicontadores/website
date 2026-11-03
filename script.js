/* Florián Orchessi & Asociados — interacciones mínimas (sin dependencias) */
(function () {
  var d = document;
  d.documentElement.classList.remove('no-js');

  // Menú móvil accesible
  var b = d.querySelector('.burger'), m = d.querySelector('.menu');
  if (b && m) {
    var set = function (o) {
      m.classList.toggle('open', o); b.classList.toggle('open', o);
      b.setAttribute('aria-expanded', o); d.body.style.overflow = o ? 'hidden' : '';
    };
    b.addEventListener('click', function () { set(!m.classList.contains('open')); });
    m.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { set(false); }); });
    d.addEventListener('keydown', function (e) { if (e.key === 'Escape') set(false); });
    window.addEventListener('resize', function () { if (innerWidth > 820) set(false); });
  }

  // Línea inferior del navbar al hacer scroll
  var nav = d.querySelector('.nav');
  var onScroll = function () { if (nav) nav.classList.toggle('scrolled', scrollY > 8); };
  onScroll(); addEventListener('scroll', onScroll, { passive: true });

  // Animaciones de entrada discretas
  var els = d.querySelectorAll('.rv');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: .12 });
    els.forEach(function (e) { io.observe(e); });
  } else { els.forEach(function (e) { e.classList.add('in'); }); }
})();
