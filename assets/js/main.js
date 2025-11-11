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
      line.style.animationDelay = `${idx * 80}ms`;
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

  // Attende che il sito sia pronto: window load, font e immagini non-lazy
  function waitForWindowLoad() {
    return new Promise(resolve => {
      if (document.readyState === 'complete') { resolve(); return; }
      window.addEventListener('load', () => resolve(), { once: true });
    });
  }

  function waitForFonts() {
    if (document.fonts && document.fonts.ready) {
      return document.fonts.ready.catch(() => {});
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
    // Chiude il preloader solo quando tutto è pronto (o dopo il fallback)
    document.body.classList.remove('preloader-active');
    document.body.classList.add('preloader-done');
    setTimeout(() => {
      document.body.classList.add('grid-ready');
      if (preloader && preloader.parentNode) {
        preloader.parentNode.removeChild(preloader);
      }
      document.body.classList.remove('preloader-done');
    }, 160);
  });
})();

// ---------- TYPEWRITER (riattivato) ----------
(function () {
  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function typewrite(el, speed = 40) {
    if (!el || el.dataset.tyDone === '1') return;
    const original = (el.textContent || '').trim();
    if (!original) { el.dataset.tyDone = '1'; return; }

    const textSpan = document.createElement('span');
    textSpan.className = 'ty-text';
    const caret = document.createElement('span');
    caret.className = 'ty-caret';

    // Sostituisci solo il contenuto testuale, preservando il nodo e l'interattività (es. <a>)
    el.textContent = '';
    el.appendChild(textSpan);
    el.appendChild(caret);

    // Mostra l'elemento solo quando parte l'animazione
    el.style.opacity = '1';

    let i = 0;
    const len = original.length;
    const timer = setInterval(() => {
      textSpan.textContent += original[i];
      i++;
      if (i >= len) {
        clearInterval(timer);
        caret.remove();
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
      '.about-grid .about-block p',
      '.about-grid .about-label',
      '.about-hero-word',
      '.fixed-bottom-left a',
      '.fixed-bottom-left span'
    ];

    const targets = Array.from(document.querySelectorAll(selectors.join(',')));

    if (!('IntersectionObserver' in window)) {
      targets.forEach(el => typewrite(el, Number(el.dataset.tySpeed) || 40));
      return;
    }

    // Applica un effetto fade-up alle linee già presenti nella fixed project box
    const fpInfo = document.querySelector('.fp-info');
    if (fpInfo) {
      const initialLines = fpInfo.querySelectorAll('.fp-line');
      const baseDelay = 120; // ritardo iniziale leggero
      const stagger = 140;   // ritardo tra le righe
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
          const speed = Number(target.dataset.tySpeed) || 40;
          typewrite(target, speed);
          io.unobserve(target);
        }
      });
    }, { threshold: 0.2 });

    targets.forEach(el => io.observe(el));
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
            const baseDelay = 120;
            const stagger = 140;
            if (idx >= 0) node.style.animationDelay = `${baseDelay + idx * stagger}ms`;
            node.dataset.tyDone = '1';
          }
        });
      });
    });
    moLines.observe(linesWrap, { childList: true });
  });
})();


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
      "assets/img/projects/At-the-Mountains-of-Madness-project.png"
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
      "assets/img/projects/Jabberwocky-project.webp"
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
      "assets/img/projects/Knoted-project.gif"
    ]
  },
  afterbook: {
    title: "After Book",
    meta: "Collaborative · 2024 · Identity / Motion",
    body: `
      Dynamic typographic and motion system for an experimental publication.
    `,
    images: [
      "assets/img/projects/after-book-project.gif"
    ]
  },
  "365posters": {
    title: "365 Posters",
    meta: "Collaborative · 2024 · Identity / Motion",
    body: `
      Daily poster exploration focused on rhythm, contrast and iterative structures.
    `,
    images: [
      "assets/img/projects/365-posters-project.jpg"
    ]
  },
  boundless: {
    title: "Boundless Blades",
    meta: "Collaborative · 2024 · Identity / Motion",
    body: `
      High-energy visual system merging metallic textures, sharp forms and fluid motion.
    `,
    images: [
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
    meta: "Collaborative · 2024 · Identity / Motion",
    body: `
      Speculative system visualizing human–machine symbiosis through code fragments, grids and noise.
    `,
    images: [
      "assets/img/projects/the-future-of-ai.gif"
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
