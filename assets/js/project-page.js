// Dedicated JS for single project pages
(function() {
  // Mark current nav item (optional simple highlight)
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
  });
})();