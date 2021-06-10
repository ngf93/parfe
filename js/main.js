/* current year */
let now = new Date();
let cur_year = now.getFullYear();
document.querySelector('#year').innerHTML = cur_year;


// let anchors = Array.from(document.querySelectorAll('.to-anchor'));
// anchors.forEach(function(item, i, arr) {
//   item.addEventListener('click', () => {
//     document.querySelectorAll(item.href).scrollIntoView({
//       behavior: 'smooth',
//       block: 'start'
//     });
//   });
// });


const swiper = new Swiper('.swiper-reviews', {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 50,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiper2 = new Swiper('.swiper-thumbs', {
  loop: false,
  slidesPerView: 5,
  spaceBetween: 14,
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



const myViewer = new ImgPreviewer('.img-preview-box');

function fav(el){
  el.dataset.fav = (el.dataset.fav == 'false') ? 'true' : 'false'
}