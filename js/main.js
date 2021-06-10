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

/* sticky header */
// $(window).scroll(function () {
//   var h_header = $('header').outerHeight();
//   var st = $(this).scrollTop();
//   if (st > h_header) {
//     $('.header_sticky').fadeIn(300);
//   } else if (st < h_header) {
//     $('.header_sticky').fadeOut(300);
//   }
// });

window.addEventListener('scroll', function() {
  let h_header = document.querySelector('header').offsetHeight;
  let st = window.pageYOffset;
  if (st > h_header) {
    document.getElementById('nav-sticky').style.display = 'block';
  } else {
    document.getElementById('nav-sticky').style.display = 'none';
  }
  // document.getElementById('showScroll').innerHTML = pageYOffset + 'px';
});