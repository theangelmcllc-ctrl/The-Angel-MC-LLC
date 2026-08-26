/* ============================================================
   THE ANGEL MC LLC — shared script
   Used by: index.html, services.html, reviews.html, contacts.html,
   appointment.html. Handles the parts that are identical on every
   page: footer year, mobile hamburger menu, and active-link
   highlighting. Page-specific behavior (forms, reviews, service
   cards) stays in that page's own <script> block.
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen);
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* Highlight the current page in the nav + footer */
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .footer-nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    const hrefPage = href.split('#')[0] || 'index.html';
    if (hrefPage === path) {
      link.classList.add('active');
    }
  });
});