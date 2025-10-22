// Mobile menu toggle
document.addEventListener('click', e => {
  const toggle = e.target.closest('.menu-toggle');
  const nav = document.querySelector('.top-nav');
  if (toggle && nav) {
    nav.classList.toggle('active');
    toggle.setAttribute('aria-expanded', nav.classList.contains('active'));
  }
});
