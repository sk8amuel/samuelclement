// Dedicated JS for single project pages
(function() {
  window.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.top-nav a');
    navLinks.forEach(l => {
      const href = l.getAttribute('href');
      if (!href) return;
      const isProjectsIndex = /projects\.html$/.test(href);
      if (isProjectsIndex) return; // do not mark; this is a project page
    });

    // Ensure all header/nav links use transition
    document.querySelectorAll('.top-nav a, .back-link').forEach(a => {
      if (!a.hasAttribute('data-transition')) {
        a.setAttribute('data-transition', '');
      }
    });

    const isTemplateKnoted = document.querySelector('.template-knoted');
    const fixedCol = document.querySelector('.template-left');
    const left = document.querySelector('.template-left');
    const leftPh = document.querySelector('.template-left-placeholder');
    function fixLeft() {
      if (!left || !leftPh) return;
      const mobile = window.matchMedia && window.matchMedia('(max-width: 1400px)').matches;
      if (mobile) {
        left.style.position = '';
        left.style.left = '';
        left.style.top = '';
        left.style.width = '';
        left.style.height = '';
        left.style.zIndex = '';
        return;
      }
      const rect = leftPh.getBoundingClientRect();
      left.style.position = 'fixed';
      left.style.left = rect.left + 'px';
      left.style.top = '96px';
      left.style.width = rect.width + 'px';
      left.style.height = 'calc(100vh - 120px)';
      left.style.zIndex = '2147483599';
    }
    let scheduled = false;
    function scheduleFix() {
      if (scheduled) return;
      scheduled = true;
      requestAnimationFrame(() => { scheduled = false; fixLeft(); });
    }
    scheduleFix();
    window.addEventListener('resize', scheduleFix, { passive: true });
    window.addEventListener('scroll', scheduleFix, { passive: true });
    window.addEventListener('load', scheduleFix);
    window.addEventListener('orientationchange', scheduleFix);
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(scheduleFix).catch(() => {});
    }
    const bottomNav = document.querySelector('.project-bottom-nav');
    const hero = document.querySelector('.template-hero');
    const lastBlock = document.querySelector('.template-hero .hero-media.hero-video:last-of-type') || Array.from(document.querySelectorAll('.template-hero .hero-media')).pop();
    const sentinel = document.querySelector('.template-hero .bottom-sentinel');
    function updateBottomNav() {
      if (!bottomNav || !hero) return;
      const rect = hero.getBoundingClientRect();
      bottomNav.style.left = rect.left + 'px';
      bottomNav.style.width = rect.width + 'px';
      const margin = 24;
      let show = false;
      if (lastBlock) {
        const lastRect = lastBlock.getBoundingClientRect();
        if (lastRect.bottom <= window.innerHeight - margin) show = true;
      }
      const scrollEndThreshold = 48; // fallback su mobile
      const scroller = document.scrollingElement || document.documentElement;
      const atEnd = (window.innerHeight + window.scrollY) >= (scroller.scrollHeight - scrollEndThreshold);
      if (show || atEnd) bottomNav.classList.add('is-visible'); else bottomNav.classList.remove('is-visible');
    }
    const run = () => requestAnimationFrame(updateBottomNav);
    run();
    window.addEventListener('scroll', run, { passive: true });
    window.addEventListener('resize', run, { passive: true });
    window.addEventListener('load', run);
    window.addEventListener('pageshow', run);
    window.addEventListener('touchmove', run, { passive: true });

    if (bottomNav && sentinel && 'IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) bottomNav.classList.add('is-visible');
        });
      }, { root: null, rootMargin: '0px 0px -24px 0px', threshold: 0 });
      io.observe(sentinel);
    }

    const thesisModal = document.getElementById('thesis-modal');
    const thesisOverlay = document.getElementById('thesisOverlay');
    const thesisClose = document.getElementById('thesisClose');
    function openPdfModal(url) {
      if (!thesisModal) return false;
      const iframe = thesisModal.querySelector('iframe');
      if (iframe && typeof url === 'string' && url) iframe.src = url;
      thesisModal.classList.add('is-visible');
      document.body.style.overflow = 'hidden';
      document.body.classList.add('thesis-open');
      return true;
    }
    function closeThesis() {
      if (!thesisModal) return;
      thesisModal.classList.remove('is-visible');
      document.body.style.overflow = '';
      document.body.classList.remove('thesis-open');
    }
    if (thesisOverlay) thesisOverlay.addEventListener('click', closeThesis);
    if (thesisClose) thesisClose.addEventListener('click', closeThesis);
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeThesis(); });
    const pdfLinks = Array.from(document.querySelectorAll('a[href$=".pdf"]'));
    const ua = navigator.userAgent || navigator.vendor || window.opera || '';
    const isIOS = /iPad|iPhone|iPod/i.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    const isAndroid = /Android/i.test(ua);
    const isMobile = isIOS || isAndroid;
    pdfLinks.forEach(a => {
      a.addEventListener('click', (e) => {
        const href = a.getAttribute('href') || '';
        if (!href) return;
        e.preventDefault();
        if (isMobile) {
          const win = window.open(href, '_blank');
          if (!win) location.href = href;
          return;
        }
        const opened = openPdfModal(href);
        if (!opened) location.href = href;
      });
    });

  const jabRow = document.querySelector('.template-jabberwocky .hero-row');
  function applyPairAspect(img) {
    if (!img) return;
    const w = img.naturalWidth;
    const h = img.naturalHeight;
    if (!w || !h) return;
    const ratio = w + ' / ' + h;
    jabRow?.querySelectorAll('.hero-media').forEach(el => { el.style.aspectRatio = ratio; });
  }
  if (jabRow) {
    const firstImg = jabRow.querySelector('.hero-media img');
    if (firstImg) {
      if (firstImg.complete) applyPairAspect(firstImg);
      else firstImg.addEventListener('load', () => applyPairAspect(firstImg), { once: true });
    }
  }

  const heroFrames = Array.from(document.querySelectorAll('.template-hero .hero-media iframe'));
  const vimeoFrames = heroFrames.filter(ifr => /vimeo\.com/i.test(String(ifr.src || '')));
  const ytFrames = heroFrames.filter(ifr => /(youtube|youtu\.be|youtube-nocookie\.com)/i.test(String(ifr.src || '')));

  vimeoFrames.forEach(ifr => {
    const wrap = ifr.closest('.hero-media');
    if (!wrap) return;
    wrap.classList.add('skeleton');
    let player = null;
    try { if (window.Vimeo && window.Vimeo.Player) player = new window.Vimeo.Player(ifr); } catch(_) {}
    if (player) {
      let hasStarted = false;
      const clearSkeleton = () => { if (!hasStarted) { hasStarted = true; wrap.classList.remove('skeleton'); } };
      let clearOnReady = false;
      try {
        const u = new URL(ifr.src);
        const bg = u.searchParams.get('background');
        const controls = u.searchParams.get('controls');
        if ((controls === '1') || (bg === '0')) clearOnReady = true;
      } catch (_) {}
      player.on('play', clearSkeleton);
      player.on('timeupdate', (data) => { if (data && (data.seconds > 0 || data.percent > 0)) clearSkeleton(); });
      player.on('loaded', () => { if (clearOnReady) clearSkeleton(); });
      player.ready().then(() => {
        player.setAutopause(false).catch(() => {});
        player.setLoop(true).catch(() => {});
        // Non forzare play: con controls=1 lasciamo che l'utente avvii
        if (clearOnReady) clearSkeleton();
      }).catch(() => {});
      wrap.addEventListener('click', () => { player.play().catch(() => {}); });
      wrap.addEventListener('touchstart', () => { player.play().catch(() => {}); }, { passive: true });
      setTimeout(() => {
        if (!hasStarted) {
          // Se non parte, lascia i controlli visibili
        }
      }, 1200);
      setTimeout(() => {
        if (!hasStarted) {
          // fallback: abilita controlli se non parte
          try {
            const url = new URL(ifr.src);
            url.searchParams.set('background', '0');
            url.searchParams.set('controls', '1');
            ifr.src = url.toString();
          } catch (_) {}
        }
      }, 4000);
      // Ultimo fallback: mostra link Vimeo se ancora bloccato
      setTimeout(() => {
        if (!wrap.classList.contains('skeleton')) return;
        const id = (function(){ try { return new URL(ifr.src).pathname.split('/').pop(); } catch(_) { return ''; } })();
        const a = document.createElement('a');
        a.className = 'hero-video-link';
        a.href = id ? `https://vimeo.com/${id}` : ifr.src;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.textContent = 'Watch on Vimeo';
        wrap.innerHTML = '';
        wrap.appendChild(a);
      }, 7000);
    } else {
      ifr.addEventListener('load', () => { if (ifr && ifr.contentWindow) { ifr.contentWindow.postMessage('{"method":"play"}', '*'); } }, { once: true });
      wrap.addEventListener('click', () => { if (ifr && ifr.contentWindow) { ifr.contentWindow.postMessage('{"method":"play"}', '*'); } });
      wrap.addEventListener('touchstart', () => { if (ifr && ifr.contentWindow) { ifr.contentWindow.postMessage('{"method":"play"}', '*'); } }, { passive: true });
    }
    setTimeout(() => { if (!wrap.classList.contains('skeleton')) return; ifr.src = ifr.src; }, 2000);
  });

  function setupYTPlayers() {
    ytFrames.forEach(ifr => {
      const wrap = ifr.closest('.hero-media');
      if (!wrap) return;
      wrap.classList.add('skeleton');
      // Non modificare lo src dell'iframe per evitare ERR_ABORTED
      ifr._ytAdjusted = true;
      if (window.YT && window.YT.Player) {
        const player = new window.YT.Player(ifr, {
          events: {
            onReady: (e) => { try { e.target.mute(); e.target.playVideo(); wrap.classList.remove('skeleton'); } catch (_) { wrap.classList.remove('skeleton'); } },
            onStateChange: (ev) => { if (ev && ev.data === 1) { wrap.classList.remove('skeleton'); } }
          }
        });
        wrap.addEventListener('click', () => { try { player.playVideo(); } catch (_) {} });
        wrap.addEventListener('touchstart', () => { try { player.playVideo(); } catch (_) {} }, { passive: true });
        setTimeout(() => { if (wrap.classList.contains('skeleton')) { try { player.playVideo(); } catch (_) { wrap.classList.remove('skeleton'); } } }, 1600);
      }
    });
  }

  if (ytFrames.length) {
    if (window.YT && window.YT.Player) setupYTPlayers();
    else {
      const s = document.createElement('script');
      s.src = 'https://www.youtube.com/iframe_api';
      document.head.appendChild(s);
      const old = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = function() { try { setupYTPlayers(); } catch (_) {} if (typeof old === 'function') { try { old(); } catch (_) {} } };
    }
  }

  window.addEventListener('message', (e) => {
    const origin = e.origin || '';
    if (!/vimeo\.com/i.test(origin)) return;
    let data = e.data;
    if (typeof data === 'string') { try { data = JSON.parse(data); } catch(_) {} }
    if (!data || !(data.event === 'play' || data.event === 'playProgress' || data.event === 'timeupdate' || data.event === 'playing')) return;
    const ifr = vimeoFrames.find(x => { try { return x.contentWindow === e.source; } catch(_) { return false; } });
    if (!ifr) return;
    const wrap = ifr.closest('.hero-media');
    if (wrap) wrap.classList.remove('skeleton');
  });
  const testVideo = document.createElement('video');
  const canWebm = !!testVideo.canPlayType && !!testVideo.canPlayType('video/webm');
  if (!canWebm) {
    const vids = Array.from(document.querySelectorAll('.project-page .hero-video'));
    vids.forEach(v => {
      const id = v.getAttribute('data-vimeo');
      const fig = v.closest('.hero-media');
      if (!fig) return;
      const link = document.createElement('a');
      link.className = 'hero-video-link';
      link.href = id ? `https://vimeo.com/${id}` : '#';
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.textContent = 'Watch on Vimeo';
      fig.innerHTML = '';
      fig.appendChild(link);
    });
  }
  
  });
})();
