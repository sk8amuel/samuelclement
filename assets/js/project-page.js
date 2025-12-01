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

  const vimeoFrames = Array.from(document.querySelectorAll('.template-hero .hero-media iframe'));
  vimeoFrames.forEach(ifr => {
    const wrap = ifr.closest('.hero-media');
    if (!wrap) return;
    wrap.classList.add('skeleton');
    let player = null;
    try { if (window.Vimeo && window.Vimeo.Player) player = new window.Vimeo.Player(ifr); } catch(_) {}
    if (player) {
      player.on('play', () => { wrap.classList.remove('skeleton'); });
      player.ready().then(() => { player.play().catch(() => {}); }).catch(() => {});
      wrap.addEventListener('click', () => { player.play().catch(() => {}); });
      wrap.addEventListener('touchstart', () => { player.play().catch(() => {}); }, { passive: true });
    } else {
      ifr.addEventListener('load', () => { if (ifr && ifr.contentWindow) { ifr.contentWindow.postMessage('{"method":"play"}', '*'); } }, { once: true });
      wrap.addEventListener('click', () => { if (ifr && ifr.contentWindow) { ifr.contentWindow.postMessage('{"method":"play"}', '*'); } });
      wrap.addEventListener('touchstart', () => { if (ifr && ifr.contentWindow) { ifr.contentWindow.postMessage('{"method":"play"}', '*'); } }, { passive: true });
    }
    setTimeout(() => { if (!wrap.classList.contains('skeleton')) return; ifr.src = ifr.src; }, 1200);
  });

  window.addEventListener('message', (e) => {
    const origin = e.origin || '';
    if (!/vimeo\.com/i.test(origin)) return;
    let data = e.data;
    if (typeof data === 'string') { try { data = JSON.parse(data); } catch(_) {} }
    if (!data || !(data.event === 'play' || data.event === 'playProgress')) return;
    const ifr = vimeoFrames.find(x => { try { return x.contentWindow === e.source; } catch(_) { return false; } });
    if (!ifr) return;
    const wrap = ifr.closest('.hero-media');
    if (wrap) wrap.classList.remove('skeleton');
  });
  
  });
})();
