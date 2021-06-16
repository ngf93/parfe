/* current year */
let now = new Date();
let cur_year = now.getFullYear();
document.querySelector('#year').innerHTML = cur_year;


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


const myViewer = new ImgPreviewer('.img-preview-box');

function fav(el){
  el.dataset.fav = (el.dataset.fav == 'false') ? 'true' : 'false'
}


window.addEventListener('scroll', function() {
  let h_header = document.querySelector('header').offsetHeight;
  let st = window.pageYOffset;
  if (st > h_header) {
    console.log(1);
    document.querySelector('header').classList.add("h-sticky");
  } else {
    document.querySelector('header').classList.remove("h-sticky");
  }
});


function closeDiv(cl){
  let arr = Array.from(document.querySelectorAll(cl));
  arr.forEach(function(item, i, arr) {
    item.animate({
      "top": "calc(100% + 2em)",
      "opacity": "0"
    }, {
      duration: 200,
      fill: "forwards",
    });
    item.style.display = 'none';
  });
}


function openSubmenu(id){
  closeDiv('.submenu');
  document.getElementById(id).style.display = 'block';
  document.getElementById(id).animate({
    "top": "100%",
    "opacity": "1",
  }, {
    duration: 200,
    fill: "forwards",
  });
  document.getElementById('shadow').style.zIndex = '99';
  document.getElementById('shadow').animate({
    "opacity": "1",
  }, {
    duration: 200,
    fill: "forwards",
  });
}

function closeSubmenu(id){
  document.getElementById(id).animate({
    "top": "calc(100% + 2em)",
    "opacity": "0"
  }, {
    duration: 200,
    fill: "forwards",
  });
  document.getElementById(id).style.display = 'none';

  document.getElementById('shadow').animate({
    "opacity": "0"
  }, {
    duration: 200,
    fill: "forwards",
  });
  document.getElementById('shadow').style.zIndex = '0';
}


function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show');
    }
  });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');
for (let elm of elements) {
  observer.observe(elm);
}