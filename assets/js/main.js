// ---------- FIXED PROJECT BOX (solo se presente) ----------

const projectItems = document.querySelectorAll('.project-item');
const fpIndex = document.querySelector('.fp-index');
const fpTitle = document.querySelector('.fp-title');
const fpInfoBox = document.querySelector('.fp-info');

if (fpInfoBox && fpIndex && fpTitle && projectItems.length > 0) {
  function setProjectBox(el) {
    if (!el) return;
    const index = el.dataset.index || '';
    const title = el.dataset.title || '';
    const type = el.dataset.type || '';
    const tags = el.dataset.tags || '';
    const year = el.dataset.year || '';

    fpIndex.textContent = index;
    fpTitle.textContent = title;

    const linesContainer = fpInfoBox.querySelector('.fp-lines');
    if (!linesContainer) return;

    linesContainer.innerHTML = '';

    if (type) {
      const l1 = document.createElement('div');
      l1.className = 'fp-line';
      l1.textContent = type;
      linesContainer.appendChild(l1);
    }

    if (tags) {
      const l2 = document.createElement('div');
      l2.className = 'fp-line';
      l2.textContent = tags;
      linesContainer.appendChild(l2);
    }

    if (year) {
      const l3 = document.createElement('div');
      l3.className = 'fp-line';
      l3.textContent = `Year: ${year}`;
      linesContainer.appendChild(l3);
    }

    // Applica subito l'effetto fade-up anche al primo render e agli aggiornamenti
    const created = Array.from(linesContainer.querySelectorAll('.fp-line'));
    created.forEach((line, idx) => {
      line.classList.add('ty-fade-up');
      line.style.animationDelay = `${80 + idx * 110}ms`;
      line.dataset.tyDone = '1';
    });

    projectItems.forEach(item => item.classList.remove('is-active'));
    el.classList.add('is-active');
    el.style.opacity = 1;
  }

  // Inizializza con il primo progetto
  setProjectBox(projectItems[0]);

  // Cambia al passaggio del mouse
  projectItems.forEach(item => {
    item.addEventListener('mouseenter', () => setProjectBox(item));
    item.addEventListener('focus', () => setProjectBox(item));
  });

  // Scroll-based highlight (solo dove ha senso)
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setProjectBox(entry.target);
        }
      });
    }, { threshold: 0.6 });

    projectItems.forEach(item => observer.observe(item));
  }
}


// ---------- PRELOADER (solo home) ----------

(function () {
  const path = window.location.pathname.replace(/\/+$/, '');
  const isHome =
    path === '' ||
    path === '/' ||
    path.endsWith('/index.html') ||
    path === '/3';

  const preloader = document.getElementById('preloader');
  if (!isHome || !preloader) return;

  document.body.classList.add('preloader-active');
  const preloaderStart = Date.now();
  const minimumMs = 400;

  // Attende che il sito sia pronto: window load, font e immagini non-lazy
  function waitForWindowLoad() {
    return new Promise(resolve => {
      if (document.readyState === 'complete') { resolve(); return; }
      window.addEventListener('load', () => resolve(), { once: true });
    });
  }

  function waitForFonts() {
    if (document.fonts && document.fonts.ready) {
      return document.fonts.ready.catch(() => { });
    }
    return Promise.resolve();
  }

  function waitForImages() {
    const imgs = Array.from(document.images || [])
      .filter(img => img.getAttribute('loading') !== 'lazy');
    const pending = imgs.filter(img => !(img.complete && img.naturalWidth > 0));
    if (pending.length === 0) return Promise.resolve();
    return new Promise(resolve => {
      let remaining = pending.length;
      const done = () => { if (--remaining <= 0) resolve(); };
      pending.forEach(img => {
        img.addEventListener('load', done, { once: true });
        img.addEventListener('error', done, { once: true });
      });
    });
  }

  const safetyTimeoutMs = 6000;
  const safety = new Promise(resolve => setTimeout(resolve, safetyTimeoutMs));

  Promise.race([
    Promise.all([waitForWindowLoad(), waitForFonts(), waitForImages()]),
    safety
  ]).then(() => {
    const elapsed = Date.now() - preloaderStart;
    const delay = Math.max(0, minimumMs - elapsed);
    setTimeout(() => {
      document.body.classList.remove('preloader-active');
      document.body.classList.add('preloader-done');
      setTimeout(() => {
        document.body.classList.add('grid-ready');
        if (preloader && preloader.parentNode) {
          preloader.parentNode.removeChild(preloader);
        }
        document.body.classList.remove('preloader-done');
      }, 160);
    }, delay);
  });
})();

// ---------- MOBILE SWIPE OVERLAY (index, dopo preloader) ----------
(function () {
  function estimateGifDuration(url) {
    return fetch(url, { cache: 'force-cache' }).then(r => r.arrayBuffer()).then(buf => {
      const a = new Uint8Array(buf);
      let total = 0;
      for (let i = 0; i < a.length - 7; i++) {
        if (a[i] === 0x21 && a[i + 1] === 0xF9 && a[i + 2] === 0x04) {
          const lo = a[i + 4];
          const hi = a[i + 5];
          const delay = (hi << 8) | lo;
          total += delay;
        }
      }
      const ms = total * 10;
      return Math.max(500, Math.min(ms || 2500, 15000));
    }).catch(() => 2500);
  }

  function initSwipe() {
    const isHome = document.body && document.body.classList.contains('home');
    if (!isHome) return;
    const mql = window.matchMedia('(max-width: 768px)');
    if (!(mql && mql.matches)) return;
    if (localStorage.getItem('lottieOverlaySeen')) return;
    // Crea overlay mobile (trasparente) e prepara struttura interna
    const overlay = document.getElementById('mobile-swipe-overlay') || (() => {
      const el = document.createElement('div');
      el.id = 'mobile-swipe-overlay';
      document.body.appendChild(el);
      return el;
    })();
    overlay.classList.add('is-visible');
    overlay.style.background = 'rgba(0, 0, 0, 0.65)';
    overlay.style.transition = 'none';
    overlay.style.justifyContent = 'flex-end';
    overlay.style.alignItems = 'center';
    overlay.style.paddingRight = '12px';
    overlay.innerHTML = '';
    // Wrapper: area della GIF con sfondo nero al 50% (proporzioni rispettate)
    const wrap = document.createElement('div');
    wrap.className = 'swipe-wrap';
    overlay.appendChild(wrap);
    // Lottie animation al posto della GIF
    const lottie = document.createElement('dotlottie-wc');
    lottie.className = 'swipe-gif';
    lottie.setAttribute('src', 'https://lottie.host/980f7a73-7249-43d3-ace8-78d67d71b571/8vAudaUC0f.lottie');
    lottie.setAttribute('autoplay', '');
    lottie.setAttribute('loop', '');
    lottie.style.width = '160px';
    lottie.style.height = '160px';
    wrap.appendChild(lottie);
    const hide = () => {
      wrap.classList.remove('swipe-enter');
      overlay.classList.remove('swipe-enter');
      wrap.classList.add('swipe-exit');
      overlay.classList.add('swipe-exit');
      setTimeout(() => {
        overlay.classList.remove('is-visible');
        if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
      }, 380);
    };
    lottie.addEventListener('error', hide, { once: true });
    let started = false;
    const start = () => {
      if (started) return; started = true;
      wrap.classList.add('swipe-enter');
      overlay.classList.add('swipe-enter');
      localStorage.setItem('lottieOverlaySeen', '1');
      const dur = 1200;
      setTimeout(hide, dur);
    };
    ['ready', 'load'].forEach(ev => lottie.addEventListener(ev, start, { once: true }));
    setTimeout(start, 300);
  }

  // Avvio con ritardo di 1s dalla fine del preloader (home ready)
  function startSwipeWithDelay() {
    setTimeout(initSwipe, 3000);
  }

  window.addEventListener('load', () => {
    if (document.body.classList.contains('grid-ready')) { startSwipeWithDelay(); return; }
    const mo = new MutationObserver(() => {
      if (document.body.classList.contains('grid-ready')) { startSwipeWithDelay(); mo.disconnect(); }
    });
    mo.observe(document.body, { attributes: true, attributeFilter: ['class'] });
  }, { once: true });
})();

// ---------- TYPEWRITER (riattivato) ----------
(function () {
  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function typewrite(el, speed = 40) {
    if (!el || el.dataset.tyDone === '1') return;
    const anchor = el.querySelector('a');
    const target = anchor || el;
    const original = (target.textContent || '').trim();
    if (!original) { el.dataset.tyDone = '1'; return; }
    const step = Number(el.dataset.tyStep) || 1;
    const start = Number(el.dataset.tyStart) || 0;
    const split = el.dataset.tySplit;
    if (split === 'sentence') {
      const parts = original.split(/(?<=\.)\s+/);
      el.textContent = '';
      const lines = [];
      parts.forEach((part) => {
        const wrap = document.createElement('span');
        wrap.className = 'ty-line';
        const textSpan = document.createElement('span');
        textSpan.className = 'ty-text';
        const caret = document.createElement('span');
        caret.className = 'ty-caret';
        wrap.appendChild(textSpan);
        wrap.appendChild(caret);
        el.appendChild(wrap);
        lines.push({ textSpan, caret, text: part });
      });
      el.style.opacity = '1';
      let running = lines.length;
      lines.forEach((ln) => {
        let i = 0;
        const len = ln.text.length;
        const timer = setInterval(() => {
          ln.textSpan.textContent += ln.text.slice(i, i + step);
          i += step;
          if (i >= len) {
            clearInterval(timer);
            ln.caret.remove();
            running -= 1;
            if (running === 0) el.dataset.tyDone = '1';
          }
        }, speed);
      });
      return;
    }
    const textSpan = document.createElement('span');
    textSpan.className = 'ty-text';
    const caret = document.createElement('span');
    caret.className = 'ty-caret';
    if (anchor) {
      anchor.textContent = '';
      anchor.appendChild(textSpan);
      anchor.appendChild(caret);
    } else {
      el.textContent = '';
      el.appendChild(textSpan);
      el.appendChild(caret);
    }
    el.style.opacity = '1';
    let i = start;
    const len = original.length;
    if (start > 0) {
      textSpan.textContent = original.slice(0, Math.min(start, len));
      if (start >= len) {
        caret.remove();
        el.dataset.tyDone = '1';
        return;
      }
    }
    const timer = setInterval(() => {
      textSpan.textContent += original.slice(i, i + step);
      i += step;
      if (i >= len) {
        clearInterval(timer);
        caret.remove();
        el.dataset.tyDone = '1';
      }
    }, speed);
  }

  function typewriteInPlace(el, speed = 15) {
    if (!el || el.dataset.tyDone === '1' || el.dataset.tyRun === '1') return;
    el.dataset.tyRun = '1';
    const anchor = el.querySelector('a');
    const target = anchor || el;
    const originalHTML = (target.innerHTML || '').trim();
    if (!originalHTML) { el.dataset.tyDone = '1'; return; }

    const step = Number(el.dataset.tyStep) || 1;
    const start = Number(el.dataset.tyStart) || 0;

    // Clona il contenuto per mantenerlo durante l'animazione
    const tempContainer = document.createElement('div');
    tempContainer.innerHTML = originalHTML;

    // Trova tutti i nodi di testo e wrappa ogni carattere
    const allChars = [];
    const textNodes = [];

    function findTextNodes(node) {
      if (node.nodeType === Node.TEXT_NODE) {
        if (node.textContent.trim()) {
          textNodes.push(node);
        }
      } else {
        node.childNodes.forEach(child => findTextNodes(child));
      }
    }

    findTextNodes(tempContainer);

    // Wrappa ogni carattere in ogni text node
    textNodes.forEach(textNode => {
      const text = textNode.textContent;
      const parent = textNode.parentNode;
      const fragment = document.createDocumentFragment();

      for (let i = 0; i < text.length; i++) {
        const char = text[i];
        const charSpan = document.createElement('span');
        charSpan.className = 'ty-ch';
        charSpan.textContent = char;
        charSpan.style.opacity = '0';
        charSpan.style.transition = 'opacity 0.1s ease';
        fragment.appendChild(charSpan);
        allChars.push(charSpan);
      }

      parent.replaceChild(fragment, textNode);
    });

    // Crea il caret
    const caret = document.createElement('span');
    caret.className = 'ty-caret';
    caret.style.display = 'inline-block';
    caret.style.width = '1px';
    caret.style.height = '1em';
    caret.style.background = 'currentColor';
    caret.style.marginLeft = '2px';
    caret.style.verticalAlign = 'baseline';
    caret.style.animation = 'ty-caret-blink 1s steps(1, end) infinite';

    // Sostituisci il contenuto con la versione wrappata
    if (anchor) {
      anchor.innerHTML = '';
      // Append children individually from tempContainer to anchor
      while (tempContainer.firstChild) {
        anchor.appendChild(tempContainer.firstChild);
      }
    } else {
      el.innerHTML = '';
      // Append children individually from tempContainer to el
      while (tempContainer.firstChild) {
        el.appendChild(tempContainer.firstChild);
      }
    }

    el.style.opacity = '1';

    const len = allChars.length;
    let i = start;

    // Mostra i caratteri iniziali se start > 0
    for (let j = 0; j < start && j < len; j++) {
      allChars[j].style.opacity = '1';
    }

    if (i >= len) {
      el.dataset.tyDone = '1';
      return;
    }

    // Funzione per posizionare il caret dopo l'ultimo carattere visibile
    function updateCaretPosition() {
      if (i > 0 && i <= len) {
        const lastVisibleChar = allChars[i - 1];
        if (lastVisibleChar && lastVisibleChar.parentNode) {
          // Inserisci il caret dopo l'ultimo carattere visibile
          if (caret.parentNode) caret.remove();
          lastVisibleChar.parentNode.insertBefore(caret, lastVisibleChar.nextSibling);
        }
      } else if (i === 0) { // If no characters are visible yet, place caret at the beginning
        if (caret.parentNode) caret.remove();
        if (allChars.length > 0) {
          allChars[0].parentNode.insertBefore(caret, allChars[0]);
        } else if (anchor) {
          anchor.appendChild(caret);
        } else {
          el.appendChild(caret);
        }
      }
    }

    // Initial caret position
    updateCaretPosition();

    const timer = setInterval(() => {
      // Rendi visibili i prossimi 'step' caratteri
      for (let j = 0; j < step && i < len; j++, i++) {
        if (allChars[i]) {
          allChars[i].style.opacity = '1';
        }
      }

      updateCaretPosition();

      if (i >= len) {
        clearInterval(timer);
        // Rimuovi il caret e ripristina HTML originale
        setTimeout(() => {
          if (caret.parentNode) caret.remove();
          if (anchor) {
            anchor.innerHTML = originalHTML;
          } else {
            el.innerHTML = originalHTML;
          }
          el.dataset.tyDone = '1';
        }, 150);
        el.dataset.tyDone = '1';
      }
    }, speed);
  }

  function initTypewriter() {
    if (reduceMotion) return;

    const selectors = [
      // Header
      '.top-left .brand',
      '.top-left .role',
      '.top-nav a',
      '.fp-title',
      '.fp-index',
      '.project-number',
      '.ph-cell',
      '.pi-cell',
      '.project-title',
      '.project-content p',
      '.project-info li',
      '.template-intro',
      '.template-title',
      '.template-desc .template-meta',
      '.template-desc .emph',
      '.mobile-intro .mi-title',
      '.mobile-intro .mi-name',
      '.about-grid .about-block p',
      '.about-grid .about-label',
      '.fixed-bottom-left a',
      '.fixed-bottom-left span'
    ];

    const isProject = document.body && document.body.classList.contains('project-page');
    let sels = selectors.slice();
    if (isProject) {
      sels = sels.filter(s => s !== '.project-title' && s !== '.project-content p' && s !== '.project-info li');
    }
    const targets = Array.from(document.querySelectorAll(sels.join(',')));
    const aboutTargets = targets.filter(el => !!el.closest('.page-about'));
    const otherTargets = targets.filter(el => !el.closest('.page-about'));

    if (!('IntersectionObserver' in window)) {
      if (aboutTargets.length) {
        const g1Sel = ['.about-block.col-1.intro', '.about-block.col-2.design-approach', '.about-block.col-3.background', '.about-block.col-4.education'];
        const g2Sel = ['.about-block.col-1.contact'];
        const g4Sel = ['.about-block.col-1.selected-work', '.about-block.col-2.focus', '.about-block.col-4.capabilities'];
        const getTargetsFor = (sels) => {
          const set = new Set();
          sels.forEach(s => Array.from(document.querySelectorAll(s)).forEach(c => {
            aboutTargets.forEach(t => { if (c.contains(t)) set.add(t); });
          }));
          return Array.from(set);
        };
        const g1 = getTargetsFor(g1Sel);
        const g2 = getTargetsFor(g2Sel);
        const g4 = getTargetsFor(g4Sel);
        const groupGap = 140;
        const speedFast = 10;
        const runGroup = (arr) => arr.forEach(el => typewriteInPlace(el, Number(el.dataset.tySpeed) || speedFast));
        setTimeout(() => runGroup(g1), 0);
        setTimeout(() => runGroup(g2), groupGap);
        setTimeout(() => runGroup(g4), groupGap * 3);
      }
      otherTargets.forEach(el => typewrite(el, Number(el.dataset.tySpeed) || 15));
      return;
    }

    // Applica un effetto fade-up alle linee già presenti nella fixed project box
    const fpInfo = document.querySelector('.fp-info');
    if (fpInfo) {
      const initialLines = fpInfo.querySelectorAll('.fp-line');
      const baseDelay = 80; // ritardo iniziale ancora più rapido
      const stagger = 110;  // ritardo tra le righe più rapido
      initialLines.forEach((line, idx) => {
        line.classList.remove('ty-fade-in');
        line.classList.add('ty-fade-up');
        line.style.animationDelay = `${baseDelay + idx * stagger}ms`;
        line.dataset.tyDone = '1';
      });
    }

    const io = new IntersectionObserver((entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        if (isIntersecting) {
          const mode = (target.dataset.tyMode || '').toLowerCase();
          if (mode === 'fade-up') {
            const dur = Number(target.dataset.tySpeed) || 420;
            target.style.animationDuration = `${dur}ms`;
            target.classList.add('ty-fade-up');
            target.dataset.tyDone = '1';
          } else {
            const speed = Number(target.dataset.tySpeed) || 15;
            typewrite(target, speed);
          }
          io.unobserve(target);
        }
      });
    }, { threshold: 0.2 });
    otherTargets.forEach(el => io.observe(el));

    if (aboutTargets.length) {
      const g1Sel = ['.about-block.col-1.intro', '.about-block.col-2.design-approach', '.about-block.col-3.background', '.about-block.col-4.education'];
      const g2Sel = ['.about-block.col-1.contact'];
      const g3Sel = [];
      const g4Sel = ['.about-block.col-1.selected-work', '.about-block.col-2.focus', '.about-block.col-4.capabilities'];
      const getTargetsFor = (sels) => {
        const set = new Set();
        sels.forEach(s => Array.from(document.querySelectorAll(s)).forEach(c => {
          aboutTargets.forEach(t => { if (c.contains(t) || t.matches(s)) set.add(t); });
        }));
        return Array.from(set);
      };
      const g1Text = getTargetsFor(g1Sel);
      const g2Text = getTargetsFor(g2Sel);
      const g3Text = [];
      const g3ImgEl = null;
      const g4Text = getTargetsFor(g4Sel);

      let g1Started = false, g2Started = false, g3Started = false, g4Started = false;
      const speedFast = 10;
      const runGroup = (arr) => arr.forEach(el => typewriteInPlace(el, Number(el.dataset.tySpeed) || speedFast));
      const container = document.querySelector('.page-about .about-grid') || document.querySelector('.page-about');
      if (container && 'IntersectionObserver' in window) {
        const aboutIo = new IntersectionObserver((entries) => {
          entries.forEach(({ isIntersecting }) => {
            if (!isIntersecting) return;
            const groupGap = 140;
            setTimeout(() => { runGroup(g1Text); g1Started = true; }, 0);
            setTimeout(() => { runGroup(g2Text); g2Started = true; }, groupGap);
            setTimeout(() => { runGroup(g4Text); g4Started = true; }, groupGap * 3);
            aboutIo.disconnect();
          });
        }, { threshold: 0.08 });
        aboutIo.observe(container);
      } else {
        const groupGap = 140;
        setTimeout(() => { runGroup(g1Text); g1Started = true; }, 0);
        setTimeout(() => { runGroup(g2Text); g2Started = true; }, groupGap);
        setTimeout(() => { runGroup(g4Text); g4Started = true; }, groupGap * 3);
      }

      if ('IntersectionObserver' in window) {
        const aboutElemIo = new IntersectionObserver((entries) => {
          entries.forEach(({ target, isIntersecting }) => {
            if (!isIntersecting) return;
            if (target.dataset.tyDone === '1' || target.dataset.tyRun === '1') { aboutElemIo.unobserve(target); return; }
            const spd = Number(target.dataset.tySpeed) || speedFast;
            typewriteInPlace(target, spd);
            aboutElemIo.unobserve(target);
          });
        }, { threshold: 0.12 });
        g1Text.concat(g2Text, g4Text).forEach(el => aboutElemIo.observe(el));
      }
    }
  }

  // Avvio solo quando i testi sono effettivamente visibili:
  // - sulle altre pagine: dopo DOMContentLoaded
  // - sulla home: dopo la fine del preloader (quando body riceve la classe 'grid-ready')
  document.addEventListener('DOMContentLoaded', () => {
    const isHome = document.body && document.body.classList.contains('home');
    if (!isHome) { initTypewriter(); return; }
    if (document.body.classList.contains('grid-ready')) { initTypewriter(); return; }
    const mo = new MutationObserver(() => {
      if (document.body.classList.contains('grid-ready')) {
        initTypewriter();
        mo.disconnect();
      }
    });
    mo.observe(document.body, { attributes: true, attributeFilter: ['class'] });
  });

  // Gestione linee dinamiche nella fixed project box (Index):
  // quando setProjectBox aggiorna .fp-info e aggiunge nuove .fp-line,
  // applico subito l'animazione o almeno rendo visibili i nuovi nodi.
  document.addEventListener('DOMContentLoaded', () => {
    if (reduceMotion) return;
    const linesWrap = document.querySelector('.fp-lines');
    if (!linesWrap || !('MutationObserver' in window)) return;
    const moLines = new MutationObserver((mutations) => {
      mutations.forEach(m => {
        m.addedNodes.forEach(node => {
          if (node.nodeType === 1 && node.classList && node.classList.contains('fp-line')) {
            node.classList.remove('ty-fade-in');
            node.classList.add('ty-fade-up');
            const all = Array.from(linesWrap.querySelectorAll('.fp-line'));
            const idx = all.indexOf(node);
            const baseDelay = 80; // ritardo iniziale ancora più rapido
            const stagger = 110;  // spaziatura tra linee più rapida
            if (idx >= 0) node.style.animationDelay = `${baseDelay + idx * stagger}ms`;
            node.dataset.tyDone = '1';
          }
        });
      });
    });
    moLines.observe(linesWrap, { childList: true });
  });
})();

// (rimosso) Effetto pixel in overlay: eliminato completamente su richiesta


// ---------- DATI PROGETTI PER MODAL ----------

const projectsData = {
  atm: {
    title: "At the Mountains of Madness",
    meta: "Personal Project · 2024 · Editorial / Illustration",
    body: `
      Editorial project inspired by Lovecraft. Strict grid, cold typography and layered illustration
      exploring vertical tension and monotone atmospheres.
    `,
    images: [
      "assets/img/projects/At The Mountains Of Madness/At-the-mountains-of-madness-1.jpg",
      "assets/img/projects/At The Mountains Of Madness/At-the-mountains-of-madness-2.jpeg",
      "assets/img/projects/At The Mountains Of Madness/At-the-mountains-of-madness-4.jpeg",
      "assets/img/projects/At The Mountains Of Madness/At-the-mountains-of-madness-6.jpeg"
    ]
  },
  ilgermoglio: {
    title: "Il Germoglio",
    meta: "Client: Il Germoglio · 2024 · Brand Identity / Packaging",
    body: `
      Identity and packaging for an organic store. Modular system, soft tones and clear hierarchy between product lines.
    `,
    images: [
      "assets/img/projects/ilgermoglio-project.png"
    ]
  },
  jabberwocky: {
    title: "Jabberwocky",
    meta: "Personal Project · 2024 · Motion / Visual Experiment",
    body: `
      Experimental motion piece translating Lewis Carroll’s poem into fractured typography,
      grain, and glitch transitions.
    `,
    images: [
      "assets/img/projects/Jabberwocky/Jabberwocky-1.jpg",
      "assets/img/projects/Jabberwocky/Jabberwocky-2.jpg",
      "assets/img/projects/Jabberwocky/Jabberwocky-3.jpeg",
      "assets/img/projects/Jabberwocky/Jabberwocky-4.jpeg",
      "assets/img/projects/Jabberwocky/Jabberwocky-extract-1.jpeg",
      "assets/img/projects/Jabberwocky/Jabberwocky-detail.webp"
    ]
  },
  knoted: {
    title: "Knoted",
    meta: "Collaborative · 2024 · Identity / Motion",
    body: `
      Visual identity and motion assets for a digital platform. Interlocking forms,
      tight grid and kinetic behaviour across media.
    `,
    images: [
      "assets/img/projects/Knoted/Logo-Mockup-knoted.png"
    ],
    videos: [
      "assets/img/projects/Knoted-project.webm",
      "assets/img/projects/Knoted/Knoted-Splash-Logo.webm",
      "assets/img/projects/Knoted/Animazione-cards-Knoted.webm",
      "assets/img/projects/Knoted/Animazione-sito-Knoted.webm",
      "https://www.youtube-nocookie.com/embed/WQWhOHWkcBY?controls=1&modestbranding=1&rel=0&playsinline=1"
    ]
  },
  afterbook: {
    title: "After Book",
    meta: "School Project · 2023 · Identity / Motion",
    body: `
      After Book is a concept app brought to life through an animated promotional video, designed to enhance your reading experience through sound.
      The app generates adaptive background audio based on the content you're reading, whether it's a tense thriller, a peaceful fantasy, or a dramatic novel.
      As the story shifts, so does the atmosphere. I developed the idea and created the animated video to showcase how After Book turns every page into an immersive, multi-sensory experience.
    `,
    images: [
      "assets/img/projects/After Book/Afterbook-mockup.webp",
      "assets/img/projects/After Book/Afterbook-mockup-2.webp",
      "assets/img/projects/After Book/Afterbook-mockup-3.webp"
    ]
  },
  "365posters": {
    title: "365 Posters",
    meta: "Collaborative · 2024 · Identity / Motion",
    body: `
      Daily poster exploration focused on rhythm, contrast and iterative structures.
    `,
    images: [
      "assets/img/projects/365/Poster-1.jpeg",
      "assets/img/projects/365/Poster-2.jpg",
      "assets/img/projects/365/Poster-3.jpg",
      "assets/img/projects/365/Poster-4.jpg",
      "assets/img/projects/365/Poster-5.jpg",
      "assets/img/projects/365/Poster-6.jpg",
      "assets/img/projects/365/Poster-7.jpg",
      "assets/img/projects/365/Poster-8.jpg",
      "assets/img/projects/365/Poster-9.jpg",
      "assets/img/projects/365/Poster-10.jpg",
      "assets/img/projects/365/Poster-11.jpg",
      "assets/img/projects/365/Poster-12.jpg",
      "assets/img/projects/365/Poster-13.jpg",
      "assets/img/projects/365/Poster-14.jpg",
      "assets/img/projects/365/Poster-15.jpg"
    ]
  },
  boundless: {
    title: "Boundless Blades",
    meta: "Collaborative · 2024 · Identity / Motion",
    body: `
      High-energy visual system merging metallic textures, sharp forms and fluid motion.
    `,
    images: [
      "assets/img/projects/Boundless Blades/Boundless-blades-mockup.webp",
      "assets/img/projects/Boundless Blades/Boundless Blades/Payload/1.1.1/OEBPS/assets/1/thumbnail.png",
      "assets/img/projects/Boundless Blades/Boundless Blades/Payload/1.1.1/OEBPS/assets/2/thumbnail.png",
      "assets/img/projects/Boundless Blades/Boundless Blades/Payload/1.1.1/OEBPS/assets/3/thumbnail.png",
      "assets/img/projects/Boundless Blades/Boundless Blades/Payload/1.1.1/OEBPS/assets/4/thumbnail.png",
      "assets/img/projects/Boundless Blades/Boundless Blades/Payload/1.1.1/OEBPS/assets/5/thumbnail.png",
      "assets/img/projects/Boundless Blades/Boundless Blades/Payload/1.1.1/OEBPS/assets/6/thumbnail.png",
      "assets/img/projects/boundless-blades-project.gif"
    ]
  },
  cumpa: {
    title: "Cumpa",
    meta: "Collaborative · 2024 · Identity / Motion",
    body: `
      Brand and motion design for a creative collective — bold, warm and grid-conscious.
    `,
    images: [
      "assets/img/projects/Cumpa-project.jpg"
    ]
  },
  luminal: {
    title: "Luminal",
    meta: "Collaborative · 2024 · Identity / Motion",
    body: `
      Conceptual identity built on light refraction, minimal typography and slow motion.
    `,
    images: [
      "assets/img/projects/Luminal-project.gif"
    ]
  },
  speaklouder: {
    title: "Speak Louder",
    meta: "Collaborative · 2024 · Identity / Motion",
    body: `
      Typographic motion manifesto about clarity and presence; bold, direct and kinetic.
    `,
    images: [
      "assets/img/projects/speak-louder-project.png"
    ]
  },
  futureai: {
    title: "The Future of AI",
    meta: "School project · 2024 · Motion Graphic",
    body: `
      Animated short exploring AI’s human impact with textured, fast-paced motion.
      Frame-by-frame simulation style, dynamic shadows and a playful yet reflective tone.
    `,
    images: [
      "assets/img/projects/the-future-of-ai.gif",
      "assets/img/projects/The future of Ai/ThefutureofAi-Storyboard.jpg"
    ],
    videos: [
      "https://www.youtube-nocookie.com/embed/cx0mgJdX250?controls=1&modestbranding=1&rel=0&playsinline=1"
    ]
  },
  pastiglie: {
    title: "Pastiglie Leone",
    meta: "Collaborative · 2024 · Identity / Motion",
    body: `
      Contemporary reinterpretation of an iconic confectionery brand with refined textures and motion nostalgia.
    `,
    images: [
      "assets/img/projects/pastiglie-leone-project.png"
    ]
  }
};


// ---------- MODAL LOGIC ----------

document.addEventListener('DOMContentLoaded', () => {
  // Fade-in d'ingresso per le card progetto sulla home
  const reduceMotionFade = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  // Disabilitato effetto opacità su caricamento delle card

  const modal = document.getElementById('project-modal');
  if (!modal) return;

  const overlay = document.getElementById('project-modal-overlay');
  const closeBtn = document.getElementById('project-modal-close');
  const imagesWrap = document.getElementById('project-modal-images');
  const titleEl = document.getElementById('project-modal-title');
  const metaEl = document.getElementById('project-modal-meta');
  const bodyEl = document.getElementById('project-modal-body');

  function openProjectModal(projectKey) {
    const data = projectsData[projectKey];
    if (!data) return;

    titleEl.textContent = data.title || "";
    metaEl.textContent = data.meta || "";
    bodyEl.innerHTML = (data.body || "").trim();

    imagesWrap.innerHTML = "";
    const imgs = Array.isArray(data.images) && data.images.length ? data.images : [];

    imgs.forEach(src => {
      const img = document.createElement('img');
      img.src = src;
      img.loading = "lazy";
      img.alt = data.title || "";
      imagesWrap.appendChild(img);
    });

    if (!imgs.length) {
      const placeholder = document.createElement('div');
      placeholder.style.fontSize = "9px";
      placeholder.style.color = "#666";
      placeholder.textContent = "No media available for this project yet.";
      imagesWrap.appendChild(placeholder);
    }

    modal.classList.add('is-visible');
    document.body.style.overflow = 'hidden';
  }

  function closeProjectModal() {
    modal.classList.remove('is-visible');
    document.body.style.overflow = '';
  }

  // Qualsiasi elemento con data-project apre il modal
  document.querySelectorAll('[data-project]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const key = el.getAttribute('data-project');
      if (!key) return;
      openProjectModal(key);
    });
  });

  if (overlay) overlay.addEventListener('click', closeProjectModal);
  if (closeBtn) closeBtn.addEventListener('click', closeProjectModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeProjectModal();
  });
});
// (Transizioni pagina e fallback Safari rimossi per ripristinare stato precedente)

// (Toggle tema chiaro rimosso su richiesta)
document.addEventListener('DOMContentLoaded', () => {
  const links = Array.from(document.querySelectorAll('#privacyLink, #privacyLinkDesktop'));
  const modal = document.getElementById('privacy-modal');
  const overlay = document.getElementById('privacyOverlay');
  const closeBtn = document.getElementById('privacyClose');
  if (!links.length || !modal || !overlay || !closeBtn) return;
  function createASCIIShift(el, opts) {
    if (!el) return;
    let origTxt = (el.textContent || '').trim();
    let origChars = origTxt.split('');
    let isAnim = false;
    let cursorPos = 0;
    let waves = [];
    let animId = null;
    let isHover = false;
    let origW = null;
    const cfg = Object.assign({ dur: 600, chars: '.,·-─~+:;=*π""┐┌┘┴┬╗╔╝╚╬╠╣╩╦║░▒▓█▄▀▌▐■!?&#$@0123456789*', preserveSpaces: true, spread: 0.3 }, opts || {});
    function updateCursorPos(e) {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const len = origTxt.length;
      const pos = Math.round((x / rect.width) * len);
      cursorPos = Math.max(0, Math.min(pos, len - 1));
    }
    function startWave() {
      waves.push({ startPos: cursorPos, startTime: Date.now(), id: Math.random() });
      if (!isAnim) start();
    }
    function cleanupWaves(t) {
      waves = waves.filter(w => t - w.startTime < cfg.dur);
    }
    function calcWaveEffect(charIdx, t) {
      let shouldAnim = false;
      let resultChar = origChars[charIdx];
      for (const w of waves) {
        const age = t - w.startTime;
        const prog = Math.min(age / cfg.dur, 1);
        const dist = Math.abs(charIdx - w.startPos);
        const maxDist = Math.max(w.startPos, origChars.length - w.startPos - 1);
        const rad = (prog * (maxDist + 5)) / cfg.spread;
        if (dist <= rad) {
          shouldAnim = true;
          const intens = Math.max(0, rad - dist);
          if (intens <= 3 && intens > 0) {
            const cidx = (dist * 3 + Math.floor(age / 40)) % cfg.chars.length;
            resultChar = cfg.chars[cidx];
          }
        }
      }
      return { shouldAnim, char: resultChar };
    }
    function genScrambledTxt(t) {
      return origChars.map((char, i) => {
        if (cfg.preserveSpaces && char === ' ') return ' ';
        const res = calcWaveEffect(i, t);
        return res.shouldAnim ? res.char : char;
      }).join('');
    }
    function stop() {
      el.textContent = origTxt;
      el.classList.remove('as');
      if (origW !== null) { el.style.width = ''; origW = null; }
      isAnim = false;
    }
    function start() {
      if (isAnim) return;
      if (origW === null) { origW = el.getBoundingClientRect().width; el.style.width = origW + 'px'; }
      isAnim = true;
      el.classList.add('as');
      function animate() {
        const t = Date.now();
        cleanupWaves(t);
        if (!waves.length) { stop(); return; }
        el.textContent = genScrambledTxt(t);
        animId = requestAnimationFrame(animate);
      }
      animId = requestAnimationFrame(animate);
    }
    function handleEnter(e) { isHover = true; updateCursorPos(e); startWave(); }
    function handleMove(e) { if (!isHover) return; const prev = cursorPos; updateCursorPos(e); if (cursorPos !== prev) startWave(); }
    function handleLeave() { isHover = false; }
    function resetToOrig() {
      waves = [];
      if (animId) { cancelAnimationFrame(animId); animId = null; }
      if (origW !== null) { el.style.width = ''; origW = null; }
      stop();
    }
    function updateTxt(newTxt) {
      origTxt = newTxt;
      origChars = newTxt.split('');
      if (!isAnim) el.textContent = newTxt;
    }
    function destroy() {
      resetToOrig();
      el.removeEventListener('mouseenter', handleEnter);
      el.removeEventListener('mousemove', handleMove);
      el.removeEventListener('mouseleave', handleLeave);
    }
    el.addEventListener('mouseenter', handleEnter);
    el.addEventListener('mousemove', handleMove);
    el.addEventListener('mouseleave', handleLeave);
    return { updateTxt, resetToOrig, destroy };
  }
  const open = (e) => {
    e.preventDefault();
    modal.classList.add('is-visible');
    document.body.style.overflow = 'hidden';
    document.body.classList.add('privacy-open');
    const title = document.getElementById('privacyTitle');
    if (!title) return;
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const text = (title.textContent || '').trim();
    if (!text) return;
    if (reduce) { title.textContent = text; return; }
    title.innerHTML = '';
    const textSpan = document.createElement('span');
    textSpan.className = 'ty-text';
    const caret = document.createElement('span');
    caret.className = 'ty-caret';
    title.appendChild(textSpan);
    title.appendChild(caret);
    let i = 0;
    const len = text.length;
    const timer = setInterval(() => {
      textSpan.textContent += text[i];
      i++;
      if (i >= len) {
        clearInterval(timer);
        caret.remove();
        createASCIIShift(textSpan, { dur: 1000, spread: 1 });
      }
    }, 40);
  };
  const close = () => { modal.classList.remove('is-visible'); document.body.style.overflow = ''; document.body.classList.remove('privacy-open'); };
  links.forEach(l => l.addEventListener('click', open));
  overlay.addEventListener('click', close);
  closeBtn.addEventListener('click', close);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
  const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduce) Array.from(document.querySelectorAll('.privacy-body p')).forEach(el => createASCIIShift(el, { dur: 1000, spread: 1 }));
});
document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  if (!body || !body.classList.contains('home')) return;
  const isMobile = window.matchMedia('(max-width: 900px)').matches;
  if (!isMobile) return;
  const grid = document.querySelector('.projects-grid');
  if (!grid) return;
  const items = Array.from(grid.querySelectorAll('.project-item'));
  if (!items.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        el.classList.add('reveal-rotate');
        const media = el.querySelector('img, video');
        if (media) {
          media.addEventListener('animationend', () => {
            el.classList.remove('reveal-rotate');
          }, { once: true });
        } else {
          setTimeout(() => el.classList.remove('reveal-rotate'), 700);
        }
        io.unobserve(el);
      }
    });
  }, { threshold: 0.75 });
  items.forEach(i => io.observe(i));
});
document.addEventListener('DOMContentLoaded', () => {
  const vids = Array.from(document.querySelectorAll('video'));
  const playIfPossible = (v) => {
    try {
      const r = v.play();
      if (r && typeof r.then === 'function') r.catch(() => { });
    } catch (_) { }
  };
  vids.forEach(v => {
    v.muted = true;
    v.autoplay = true;
    v.playsInline = true;
    v.setAttribute('playsinline', '');
    v.setAttribute('webkit-playsinline', '');
    v.preload = 'metadata';
    v.addEventListener('loadeddata', () => playIfPossible(v), { once: true });
  });
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        if (isIntersecting) { playIfPossible(target); io.unobserve(target); }
      });
    }, { threshold: 0.1 });
    vids.forEach(v => io.observe(v));
  } else {
    vids.forEach(playIfPossible);
  }
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) vids.forEach(v => { if (v.paused) playIfPossible(v); });
  });
  let touched = false;
  const onTouch = () => {
    if (touched) return;
    touched = true;
    vids.forEach(v => { if (v.paused) playIfPossible(v); });
  };
  document.addEventListener('touchstart', onTouch, { once: true });
});
document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  if (!body || !body.classList.contains('projects')) return;
  const blocks = Array.from(document.querySelectorAll('.project-detail'));
  blocks.forEach(block => {
    const inner = block.querySelector('.project-detail-inner');
    if (!inner) return;
    const imgLink = inner.querySelector('.detail-image-wrap[href]');
    if (!imgLink) return;
    const href = imgLink.getAttribute('href');
    if (!href) return;
    if (inner.querySelector('.detail-link-overlay')) return;
    const a = document.createElement('a');
    a.className = 'detail-link-overlay';
    a.href = href;
    const t = inner.querySelector('.detail-title');
    if (t && t.textContent) a.setAttribute('aria-label', t.textContent.trim());
    const dt = imgLink.getAttribute('data-transition');
    if (dt !== null) a.setAttribute('data-transition', dt);
    inner.appendChild(a);
  });
});
// Sticky About Grid controlled by IntersectionObserver
(function () {
  function attach(el) {
    if (!el) return;
    const a = el.closest('a');
    const href = a && a.getAttribute('href');
    const isCopyTarget = a && (href && (href.startsWith('mailto:') || href.startsWith('tel:')));
    if (!isCopyTarget) return;
    if (el.dataset.copyInit === '1') return;
    el.classList.add('copyelement');
    el.dataset.copyInit = '1';
    el.addEventListener('click', (e) => {
      if (e) { e.preventDefault(); e.stopPropagation(); }
      const text = (el.textContent || '').trim();
      if (!text) return;
      navigator.clipboard.writeText(text).then(() => {
        const prev = el.querySelector('.copy-tooltip');
        if (prev) prev.remove();
        const tip = document.createElement('div');
        tip.className = 'copy-tooltip';
        el.appendChild(tip);
        const tw = document.createElement('span');
        tw.className = 'typewriter';
        tip.appendChild(tw);
        const s = 'Copied';
        tw.textContent = '';
        s.split('').forEach((ch, i) => {
          setTimeout(() => {
            const strong = 'Copied'.includes(ch) ? true : false;
            if (strong) {
              const b = document.createElement('strong');
              b.textContent = ch;
              tw.appendChild(b);
            } else {
              tw.textContent += ch;
            }
          }, i * 50);
        });
        const caret = document.createElement('span');
        caret.className = 'ty-caret';
        tip.appendChild(caret);
        setTimeout(() => {
          tip.style.opacity = '0';
          setTimeout(() => tip.remove(), 300);
        }, 2000);
      });
    });
  }
  function detach(el) {
    if (!el || el.dataset.copyInit !== '1') return;
    const prev = el.querySelector('.copy-tooltip');
    if (prev) prev.remove();
    el.classList.remove('copyelement');
    el.removeAttribute('data-copy-init');
    const clone = el.cloneNode(true);
    el.parentNode && el.parentNode.replaceChild(clone, el);
  }
  function init() {
    const contact = document.querySelector('.about-block.contact');
    if (!contact) return;
    const all = contact.querySelectorAll('.ty-text');
    all.forEach(el => {
      const a = el.closest('a');
      const href = a && a.getAttribute('href');
      const isCopyTarget = a && (href && (href.startsWith('mailto:') || href.startsWith('tel:')));
      if (isCopyTarget) attach(el); else detach(el);
    });
    if ('MutationObserver' in window) {
      const mo = new MutationObserver(() => {
        const nodes = contact.querySelectorAll('.ty-text');
        nodes.forEach(el => {
          const a = el.closest('a');
          const href = a && a.getAttribute('href');
          const isCopyTarget = a && (href && (href.startsWith('mailto:') || href.startsWith('tel:')));
          if (isCopyTarget) attach(el); else detach(el);
        });
      });
      mo.observe(contact, { childList: true, subtree: true });
    }
  }
  document.addEventListener('DOMContentLoaded', init);
})();

// Swipe navigation for mobile
(function () {
  function isCoarse() {
    try { return window.matchMedia && window.matchMedia('(hover: none) and (pointer: coarse)').matches; } catch (_) { return false; }
  }
  function getLinks() {
    var about = document.querySelector('.top-nav a[href*="#about"]') || Array.from(document.querySelectorAll('.top-nav a')).find(function (a) { return ((a.textContent || '').trim().toUpperCase() === 'ABOUT'); });
    var index = Array.from(document.querySelectorAll('.top-nav a')).find(function (a) { var h = a.getAttribute('href') || ''; return /(^|\/)index\.html$/.test(h); }) || Array.from(document.querySelectorAll('.top-nav a')).find(function (a) { return ((a.textContent || '').trim().toUpperCase() === 'INDEX'); }) || document.querySelector('.top-left .brand');
    return { about: about, index: index };
  }
  function navigate(target) {
    if (target) { try { target.click(); } catch (_) { window.location.href = target.getAttribute('href') || 'index.html'; } } else { window.location.href = 'index.html'; }
  }
  function init() {
    var body = document.body;
    if (!body || !body.classList.contains('home')) return;
    var isMobile = (function () { try { return window.matchMedia('(max-width: 900px)').matches; } catch (_) { return false; } })();
    if (!isMobile) return;
    if (!isCoarse()) return;
    var startX = 0, startY = 0, dx = 0, dy = 0, tracking = false, active = false;
    var threshold = 50;
    var currentPress = null;
    function setPress(el) {
      if (currentPress && currentPress !== el) currentPress.classList.remove('nav-press');
      if (el) { el.classList.add('nav-press'); currentPress = el; }
    }
    function clearPress() {
      if (currentPress) { currentPress.classList.remove('nav-press'); currentPress = null; }
    }
    function onStart(e) {
      if (e.touches && e.touches.length > 1) return;
      var t = e.touches ? e.touches[0] : e;
      startX = t.clientX; startY = t.clientY; dx = 0; dy = 0; tracking = true; active = false;
      clearPress();
    }
    function onMove(e) {
      if (!tracking) return;
      var t = e.touches ? e.touches[0] : e;
      dx = t.clientX - startX; dy = t.clientY - startY;
      if (!active) {
        if (Math.abs(dx) > 12 && Math.abs(dx) > Math.abs(dy)) { active = true; }
        else if (Math.abs(dy) > 12) { tracking = false; active = false; clearPress(); return; }
      }
      if (active) {
        var links = getLinks();
        var target = dx < 0 ? (links.about || null) : (links.index || null);
        setPress(target);
      }
    }
    function onEnd() {
      if (!tracking) return;
      tracking = false;
      if (!active) { clearPress(); return; }
      if (Math.abs(dx) >= threshold && Math.abs(dx) > Math.abs(dy)) {
        var links = getLinks();
        var target = dx < 0 ? (links.about || null) : (links.index || null);
        setPress(target);
        setTimeout(function () { navigate(target); clearPress(); }, 300);
      } else {
        clearPress();
      }
    }
    document.addEventListener('touchstart', onStart, { passive: true });
    document.addEventListener('touchmove', onMove, { passive: true });
    document.addEventListener('touchend', onEnd, { passive: true });
    document.addEventListener('touchcancel', onEnd, { passive: true });
  }
  document.addEventListener('DOMContentLoaded', init);
})();
