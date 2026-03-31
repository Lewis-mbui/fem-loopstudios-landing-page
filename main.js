const navToggler = document.querySelector('.nav-toggler');
const headerNav = document.querySelector('.header__nav');

function toggleNav() {
  navToggler.classList.toggle('show-close');
  headerNav.classList.toggle('expanded');
  document.body.classList.toggle('no-scroll');
}

navToggler.addEventListener('click', toggleNav);