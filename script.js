document.addEventListener('DOMContentLoaded', () => {
  // Toggle dropdown on small devices when clicking the parent link
  document.querySelectorAll('.drop-toggle').forEach(btn => {
    btn.addEventListener('click', (e) => {
      // only enable toggle on small screens
      if (window.innerWidth < 768) {
        e.preventDefault();
        const dd = btn.nextElementSibling;
        const visible = dd.style.display === 'block';
        // close other dropdowns
        document.querySelectorAll('.dropdown-content').forEach(d => d.style.display = 'none');
        dd.style.display = visible ? 'none' : 'block';
      }
    });
  });

  // Close dropdowns when clicking outside
  window.addEventListener('click', (e) => {
    const isDrop = e.target.closest('.dropdown');
    if (!isDrop) {
      document.querySelectorAll('.dropdown-content').forEach(d => d.style.display = 'none');
    }
  });

  // Mobile menu toggle (simple: toggles dropdowns + shows/hides book/links if you want)
  const menuToggle = document.querySelector('.menu-toggle');
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!expanded));
      // toggle display of nav links (simple approach: toggle class to show more controls)
      document.querySelector('.top-nav').classList.toggle('open-mobile');
    });
  }
});
