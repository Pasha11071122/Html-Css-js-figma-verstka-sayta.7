const menuBtn = document.querySelector('.menu-btn');
const menuMobile = document.querySelector('.menu-btn');

menuBtn.addEventListener('click', () => {
  menuMobile.classList.toggle('menu--open');
});

const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-button-right',
    prevEl: '.swiper-button-left',
  },
});

