/* Бургер-меню*/
const burgerMenu = () => {
  let navMain = document.querySelector(".main-navigation");
  let navToggle = document.querySelector(".main-navigation__toggle");

  navMain.classList.remove("main-navigation--nojs");
  navMain.classList.add("main-navigation--closed");

  navToggle.addEventListener("click", function() {
    if (navMain.classList.contains("main-navigation--closed")) {
      navMain.classList.remove("main-navigation--closed");
      navMain.classList.add("main-navigation--opened");
    } else {
      navMain.classList.add("main-navigation--closed");
      navMain.classList.remove("main-navigation--opened");
    }
  });
}

burgerMenu();

/* Slider */

const swiper = new Swiper('.swiper', {
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});
