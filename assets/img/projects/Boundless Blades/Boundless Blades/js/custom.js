(function(){
  try {
    var qs = new URLSearchParams(String(window.location.search||''));
    if (!qs.has('embed')) return;
    var style = document.createElement('style');
    style.type = 'text/css';
    style.textContent = [
      'html, body { background: transparent !important; }',
      '#xreaderUI, #overlay, #navigation, #playScreen { display: none !important; }'
    ].join('\n');
    document.head.appendChild(style);
    function enableAutoplay(){
      try {
        document.body.style.background = 'transparent';
        if (window.app) {
          app.autoplay = true;
          var ps = document.getElementById('playScreen');
          var spr = document.getElementById('spread');
          if (ps) ps.style.display = 'none';
          if (spr) spr.style.display = 'block';
          if (typeof app.updateReader === 'function') app.updateReader(true);
        }
      } catch(_){}
    }
    if (document.readyState === 'complete' || document.readyState === 'interactive') enableAutoplay();
    window.addEventListener('load', enableAutoplay, { once: true });
  } catch(_){}
})();
