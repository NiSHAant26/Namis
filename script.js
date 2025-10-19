// Load header.html into each page
document.addEventListener("DOMContentLoaded", function() {
  fetch('header.html')
    .then(response => response.text())
    .then(data => {
      const headerContainer = document.createElement('header');
      headerContainer.innerHTML = data;
      document.body.prepend(headerContainer);
    })
    .catch(err => console.error('Error loading header:', err));
});
