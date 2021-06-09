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

const myViewer = new ImgPreviewer('.img-preview-box');

function fav(el){
  el.dataset.fav = (el.dataset.fav == 'false') ? 'true' : 'false'
}