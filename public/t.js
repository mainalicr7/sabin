// Visit counter for two pages only. No cookies, no IP, no fingerprint.
//   Homepage "/": always on.  OKTAI pages "/preview/oktai/...": on until END, then off by itself.
// Sends the page, how the visitor arrived, time on page, scroll depth and sections seen to /api/hit.
// Open any page with ?notrack=1 to stop counting your own visits (?notrack=0 undoes it).
(function () {
  var END = Date.UTC(2026, 9, 5, 18, 15); // 2026-10-06 00:00 Nepal time, OKTAI pages only
  var path = location.pathname;
  var oktai = /^\/preview\/oktai(\/|$)/.test(path);
  if (!oktai && path !== '/') return;
  if ((oktai && Date.now() > END) || navigator.webdriver || !navigator.sendBeacon || !window.JSON) return;
  var q = new URLSearchParams(location.search);
  try {
    if (q.get('notrack') === '1') localStorage.setItem('sm_notrack', '1');
    if (q.get('notrack') === '0') localStorage.removeItem('sm_notrack');
    if (localStorage.getItem('sm_notrack') === '1') return;
  } catch (e) {}

  var id = '';
  try {
    var b = new Uint8Array(8);
    crypto.getRandomValues(b);
    for (var i = 0; i < b.length; i++) id += ('0' + b[i].toString(16)).slice(-2);
  } catch (e) {
    id = String(Math.random()).slice(2, 18);
  }

  var ref = '';
  try {
    if (document.referrer) {
      var rh = new URL(document.referrer).host;
      if (rh !== location.host) ref = rh;
    }
  } catch (e) {}

  var tz = '';
  try { tz = Intl.DateTimeFormat().resolvedOptions().timeZone || ''; } catch (e) {}

  var w = window.innerWidth || 0;
  function send(data) {
    try {
      navigator.sendBeacon('/api/hit', new Blob([JSON.stringify(data)], { type: 'application/json' }));
    } catch (e) {}
  }

  send({
    t: 'v',
    id: id,
    p: location.pathname,
    h: location.hash.slice(0, 40),
    f: (q.get('from') || '').toLowerCase().replace(/[^a-z0-9_-]/g, '').slice(0, 30),
    r: ref,
    tz: tz,
    l: (navigator.language || '').slice(0, 16),
    d: w < 768 ? 'mobile' : w < 1100 ? 'tablet' : 'desktop'
  });

  var seen = [];
  function mark(s) {
    if (s && seen.indexOf(s) < 0 && seen.length < 30) seen.push(s);
  }
  mark(location.hash.slice(1, 41));
  window.addEventListener('hashchange', function () { mark(location.hash.slice(1, 41)); });
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          var hd = e.target.querySelector('h1, h2, h3');
          var label = e.target.id + (hd ? ': ' + hd.textContent.replace(/\s+/g, ' ').trim().slice(0, 28) : '');
          mark(label.slice(0, 40));
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.4 });
    var els = document.querySelectorAll('section[id]');
    for (var j = 0; j < els.length && j < 60; j++) io.observe(els[j]);
  }

  var depth = 0;
  function onScroll() {
    var h = document.documentElement.scrollHeight - window.innerHeight;
    var d = h > 0 ? Math.round((window.scrollY / h) * 100) : 100;
    if (d > depth) depth = Math.min(100, d);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  var visibleMs = 0, since = document.visibilityState === 'visible' ? Date.now() : 0;
  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'hidden') {
      if (since) { visibleMs += Date.now() - since; since = 0; }
      send({ t: 'l', id: id, p: location.pathname, s: Math.round(visibleMs / 1000), sd: depth, sec: seen });
    } else {
      since = Date.now();
    }
  });
})();
