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

    const thesisLink = document.querySelector('.detail-links .thesis-link[aria-label="view the thesis"]');
    const thesisModal = document.getElementById('thesis-modal');
    const thesisOverlay = document.getElementById('thesisOverlay');
    const thesisClose = document.getElementById('thesisClose');
    function openThesis(e) {
      e.preventDefault();
      if (!thesisModal) return;
      thesisModal.classList.add('is-visible');
      document.body.style.overflow = 'hidden';
      document.body.classList.add('thesis-open');
    }
    function closeThesis() {
      if (!thesisModal) return;
      thesisModal.classList.remove('is-visible');
      document.body.style.overflow = '';
      document.body.classList.remove('thesis-open');
    }
    if (thesisLink) thesisLink.addEventListener('click', openThesis);
    if (thesisOverlay) thesisOverlay.addEventListener('click', closeThesis);
    if (thesisClose) thesisClose.addEventListener('click', closeThesis);
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeThesis(); });
    if (thesisLink) {
      const origTxt = (thesisLink.textContent || '').trim();
      thesisLink.setAttribute('aria-label', origTxt);
    }

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

    

  
  });
})();