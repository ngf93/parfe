const swiper = new Swiper('.swiper-reviews', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 50,
    }
  }
});

const swiper2 = new Swiper('.swiper-thumbs', {
  loop: false,
  slidesPerView: 3,
  spaceBetween: 14,
  breakpoints: {
    576: {
      slidesPerView: 5,
      spaceBetween: 14,
    }
  }
});
const swiper3 = new Swiper('.swiper-main', {
  loop: false,
  slidesPerView: 1,
  spaceBetween: 0,
  effect: "fade",
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  thumbs: {
    swiper: swiper2,
  }
});

const swiper4 = new Swiper('.swiper-parfume', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,
  effect: "fade",
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  }
});

const swiper5 = new Swiper('.swiper-1', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,
  effect: "fade",
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiper6 = new Swiper('.swiper-product-thumbs', {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 14,
});
const swiper7 = new Swiper('.swiper-product-main', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,
  thumbs: {
    swiper: swiper6,
  }
});

// const swiper7 = new Swiper('.swiper-quiz', {
//   loop: false,
//   slidesPerView: 1,
//   spaceBetween: 0,
//   effect: "fade",
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// });

const myViewer = new ImgPreviewer('.img-preview-box');