const button = document.getElementById('visitButton');

button.addEventListener('click', function (event) {
  // Prevents the link from immediately navigating away
  // Remove this line if you want the link to proceed instantly
  event.preventDefault();

  // Toggle the 'blue' class
  this.classList.toggle('blue');

  // Optional: navigate after a short delay (remove if not needed)
  setTimeout(() => {
    window.open(this.href, '_blank');
  }, 200);
});
