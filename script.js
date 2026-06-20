// Rotating hero backgrounds (5s cadence, matching the source design)
(function () {
  var slides = document.querySelectorAll('.hero-bg');
  if (slides.length > 1) {
    var i = 0;
    setInterval(function () {
      slides[i].classList.remove('active');
      i = (i + 1) % slides.length;
      slides[i].classList.add('active');
    }, 5000);
  }
})();

// Contact form -> thank-you state
(function () {
  var form = document.getElementById('enquiry');
  var thanks = document.getElementById('thanks');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      form.hidden = true;
      thanks.hidden = false;
    });
  }
})();
