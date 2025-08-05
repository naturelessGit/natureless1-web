const nav = document.querySelector('nav');
const hamburger = nav.querySelector('.hamburger');

function toggleMenu() {
  nav.classList.toggle('open');
  const expanded = hamburger.getAttribute('aria-expanded') === 'true';
  hamburger.setAttribute('aria-expanded', String(!expanded));
}

hamburger.addEventListener('click', toggleMenu);
hamburger.addEventListener('keydown', e => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    toggleMenu();
  }
});
