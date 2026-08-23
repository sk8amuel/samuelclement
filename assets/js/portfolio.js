document.addEventListener('DOMContentLoaded', () => {
  // ---------- ENSURE ALL INLINE VIDEOS PLAY ON SAFARI / MOBILE SAFARI ----------
  const allVideos = document.querySelectorAll('.portfolio-item video');
  allVideos.forEach((vid) => {
    vid.muted = true;
    vid.defaultMuted = true;
    vid.playsInline = true;
    vid.setAttribute('playsinline', '');
    vid.setAttribute('webkit-playsinline', '');
    vid.setAttribute('muted', '');
    vid.setAttribute('autoplay', '');
    vid.setAttribute('loop', '');

    // Safari fix: force video play on canplay / loadedmetadata
    const tryPlay = () => {
      const playPromise = vid.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Play on user interaction fallback for Safari Low Power Mode
          const playOnInteraction = () => {
            vid.play().catch(() => {});
            window.removeEventListener('touchstart', playOnInteraction);
            window.removeEventListener('scroll', playOnInteraction);
            window.removeEventListener('click', playOnInteraction);
          };
          window.addEventListener('touchstart', playOnInteraction, { passive: true });
          window.addEventListener('scroll', playOnInteraction, { passive: true });
          window.addEventListener('click', playOnInteraction, { passive: true });
        });
      }
    };

    if (vid.readyState >= 2) {
      tryPlay();
    } else {
      vid.addEventListener('loadeddata', tryPlay, { once: true });
    }
  });

  // ---------- BOOMERANG / BOUNCE LOTTIE HANDLER ----------
  const lottiePlayers = document.querySelectorAll('lottie-player[mode="bounce"]');
  lottiePlayers.forEach((player) => {
    player.addEventListener('complete', () => {
      if (player.getAttribute('mode') === 'bounce') {
        const instance = player.getLottie ? player.getLottie() : null;
        if (instance) {
          const nextDir = instance.playDirection === 1 ? -1 : 1;
          instance.setDirection(nextDir);
          instance.play();
        }
      }
    });
  });

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
          const vid = item.querySelector('video');
          if (vid) {
            vid.play().catch(() => {});
          }
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
    const mode = item.dataset.mode || '';

    if (type === 'video') {
      const video = document.createElement('video');
      video.autoplay = true;
      video.controls = true;
      video.loop = true;
      video.muted = true;
      video.defaultMuted = true;
      video.playsInline = true;
      video.setAttribute('playsinline', '');
      video.setAttribute('webkit-playsinline', '');
      video.setAttribute('preload', 'auto');
      
      const source = document.createElement('source');
      source.src = src;
      source.type = 'video/mp4';
      video.appendChild(source);

      modalMediaBox.appendChild(video);
      video.play().catch((e) => console.log('Modal video autoplay notice:', e));
    } else if (type === 'lottie') {
      const lottie = document.createElement('lottie-player');
      lottie.setAttribute('src', src);
      lottie.setAttribute('background', 'transparent');
      lottie.setAttribute('speed', '1');
      lottie.setAttribute('loop', '');
      lottie.setAttribute('autoplay', '');
      
      if (mode === 'bounce') {
        lottie.setAttribute('mode', 'bounce');
        lottie.addEventListener('complete', () => {
          const instance = lottie.getLottie ? lottie.getLottie() : null;
          if (instance) {
            const nextDir = instance.playDirection === 1 ? -1 : 1;
            instance.setDirection(nextDir);
            instance.play();
          }
        });
      }

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
