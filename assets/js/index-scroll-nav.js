document.addEventListener('DOMContentLoaded', function () {
  var body = document.body;
  if (!body || !body.classList.contains('home')) return;
  var cool = false;
  var cd = 900;
  var tThresh = 50;
  var mql = (function () { try { return matchMedia('(max-width: 767px)'); } catch (_) { return { matches: false }; } })();
  var coarse = (function () { try { return matchMedia('(hover: none) and (pointer: coarse)').matches; } catch (_) { return false; } })();
  var navIndex = document.querySelector('.nav-link[data-view="index"]');
  var navAbout = document.querySelector('.nav-link[data-view="about"]');
  function canRun() { return mql && mql.matches && !document.body.classList.contains('privacy-open'); }
  function goAbout() { if (navAbout) { navAbout.click(); } else { try { location.hash = '#about'; } catch (_) { location.href = './#about'; } } }
  function goIndex() { if (navIndex) { navIndex.click(); } else { try { if (location.hash) { history.replaceState(null, '', location.pathname); } } catch (_) { } location.href = './'; } }
  function trigger(dir) { if (cool || !canRun()) return; cool = true; if (dir < 0) { goAbout(); } else { goIndex(); } setTimeout(function () { cool = false; }, cd); }
  var startX = 0, startY = 0, dx = 0, dy = 0, tracking = false;
  function tStart(e) { if (!coarse || !canRun()) return; if (e.touches && e.touches.length > 1) return; var t = e.touches ? e.touches[0] : e; startX = t.clientX; startY = t.clientY; dx = 0; dy = 0; tracking = true; }
  function tMove(e) { if (!tracking) return; if (!canRun()) return; var t = e.touches ? e.touches[0] : e; dx = t.clientX - startX; dy = t.clientY - startY; if (Math.abs(dx) > Math.abs(dy)) { e.preventDefault(); } }
  function tEnd() { if (!tracking) return; tracking = false; if (!canRun()) return; if (Math.abs(dx) >= tThresh && Math.abs(dx) > Math.abs(dy) * 1.2) { trigger(dx < 0 ? -1 : 1); } }
  document.addEventListener('touchstart', tStart, { passive: true });
  document.addEventListener('touchmove', tMove, { passive: false });
  document.addEventListener('touchend', tEnd, { passive: true });
  document.addEventListener('touchcancel', tEnd, { passive: true });
});
