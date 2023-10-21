window.onscroll = function () {
  if (window.screen.width >= 768) {
    scrollY <= 70
      ? document.querySelector('header').classList.remove('header__scroll')
      : document.querySelector('header').classList.add('header__scroll');
  } else {
    scrollY <= 120
      ? document.querySelector('header').classList.remove('header__scroll')
      : document.querySelector('header').classList.add('header__scroll');
  }
};
