document.addEventListener('DOMContentLoaded', () => {
  // ---------- SCROLL FADE-IN UP ANIMATION ----------
  const items = Array.from(document.querySelectorAll('.portfolio-item'));

  if ('IntersectionObserver' in window) {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.05
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const item = entry.target;
          item.classList.add('is-visible');
          observer.unobserve(item);
        }
      });
    }, observerOptions);

    items.forEach((item) => observer.observe(item));
  } else {
    // Fallback: show immediately
    items.forEach((item) => item.classList.add('is-visible'));
  }

  // ---------- LIGHTBOX MODAL ----------
  const modal = document.getElementById('portfolioModal');
  const modalMediaBox = document.getElementById('modalMediaBox');
  const modalCloseBtn = document.getElementById('modalCloseBtn');

  function openModal(item) {
    if (!modal || !modalMediaBox) return;

    modalMediaBox.innerHTML = '';
    const type = item.dataset.type || '';
    const src = item.dataset.src || '';

    if (type === 'video') {
      const video = document.createElement('video');
      video.src = src;
      video.autoplay = true;
      video.controls = true;
      video.loop = true;
      video.muted = false;
      video.playsInline = true;
      modalMediaBox.appendChild(video);
    } else if (type === 'lottie') {
      const lottie = document.createElement('lottie-player');
      lottie.setAttribute('src', src);
      lottie.setAttribute('background', 'transparent');
      lottie.setAttribute('speed', '1');
      lottie.setAttribute('loop', '');
      lottie.setAttribute('autoplay', '');
      modalMediaBox.appendChild(lottie);
    } else {
      // Image or GIF
      const img = document.createElement('img');
      img.src = src;
      modalMediaBox.appendChild(img);
    }

    modal.classList.add('is-active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!modal || !modalMediaBox) return;
    modal.classList.remove('is-active');
    modalMediaBox.innerHTML = '';
    document.body.style.overflow = '';
  }

  items.forEach((item) => {
    item.addEventListener('click', (e) => {
      if (item.tagName === 'A' || item.closest('a')) return;
      openModal(item);
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  });
});
