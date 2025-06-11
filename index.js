const hamburger = document.getElementById('menu-hamburger');
const menu = document.getElementById('mobile-menu');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('mobile-menu--visible');
  document.body.classList.toggle('no-scroll');
  document.getElementById("overlay").classList.toggle("hidden");
});