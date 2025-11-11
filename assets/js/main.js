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

  let closed = false;
  function hidePreloader() {
    if (closed) return;
    closed = true;

    document.body.classList.remove('preloader-active');
    document.body.classList.add('preloader-done');

    setTimeout(() => {
      if (preloader && preloader.parentNode) {
        preloader.parentNode.removeChild(preloader);
      }
      document.body.classList.remove('preloader-done');
    }, 600);
  }

  const safety = setTimeout(hidePreloader, 2000);

  window.addEventListener('load', () => {
    clearTimeout(safety);
    setTimeout(hidePreloader, 400);
  });
})();

// (Typewriter JS rimosso su richiesta)


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
