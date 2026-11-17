(function () {
  var nav = document.getElementById('nav');
  var navToggle = document.getElementById('navToggle');
  var navLinks = document.getElementById('navLinks');
  var video = document.querySelector('.hero__media');

  function setMenuOpen(open) {
    nav.classList.toggle('is-open', open);
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  }

  navToggle.addEventListener('click', function () {
    setMenuOpen(!nav.classList.contains('is-open'));
  });

  navLinks.addEventListener('click', function (e) {
    if (e.target.closest('a')) {
      setMenuOpen(false);
    }
  });

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches && video) {
    video.pause();
  }
})();