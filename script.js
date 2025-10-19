// Make dropdown clickable for mobile
document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll('.dropdown > a').forEach(drop => {
    drop.addEventListener('click', e => {
      e.preventDefault();
      const content = drop.nextElementSibling;
      content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
  });

  // Click outside to close
  window.addEventListener('click', e => {
    if (!e.target.matches('.dropdown > a')) {
      document.querySelectorAll('.dropdown-content').forEach(dc => dc.style.display = 'none');
    }
  });
});
