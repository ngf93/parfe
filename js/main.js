/* current year */
let now = new Date();
let cur_year = now.getFullYear();
document.querySelector('#year').innerHTML = cur_year;


function fav(el){
  el.dataset.fav = (el.dataset.fav == 'false') ? 'true' : 'false'
}


window.addEventListener('scroll', function() {
  let h_header = document.querySelector('header').offsetHeight;
  let st = window.pageYOffset;
  if (st > h_header) {
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

function play_video(cover){
  let video = cover.previousElementSibling;
  let src = video.getAttribute('src');
  cover.remove();
  video.setAttribute('src', src + '?autoplay=1');
}


window.onload = function() {
  function popup(){
    let myModal = new bootstrap.Modal(document.getElementById('myModal'), {
      keyboard: false
    });
    myModal.show();
  }
  let popup_delay = 1000*1*1; // 1 минута
  setTimeout(popup, popup_delay);
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

/* password button state change */
function change_state(btn) {
  if(btn.dataset.state == 'invisible'){
    btn.previousElementSibling.setAttribute('type', 'text');
    btn.dataset.state = 'visible';
  } else {
    btn.previousElementSibling.setAttribute('type', 'password');
    btn.dataset.state = 'invisible';
  }
}

/* swap 'entrance' & 'registration' forms */
function swap_form(form) {
  let parent_el = form.closest('.change-forms');
  if(form.classList.contains('entrance') == true){
    parent_el.querySelector('form.registration').classList.remove('d-none');
  } else if(form.classList.contains('registration') == true){
    parent_el.querySelector('form.entrance').classList.remove('d-none');
  } else {
    alert('произошла ошибка');
  }
  form.classList.add('d-none');
}

function filterToggle(btn){
  if (btn.dataset.state == 'closed'){
    btn.nextElementSibling.style.display = 'block';
    btn.dataset.state = 'opened';
  } else {
    btn.nextElementSibling.style.display = 'none';
    btn.dataset.state = 'closed';
  } 
}


function verifyInput(form){
  let arr_inputs = Array.from(form.querySelectorAll('input[required]'));
  console.log(arr_inputs.length);

  function notNull(element, index, array) {
    if(element.type == 'checkbox' && element.checked){
      return element;
    } else if(element.type == 'text' && element.value.trim() != '') {
      return element;
    }
  }
  let flag = arr_inputs.every(notNull);

  if (flag) {
    console.log('все поля заполнены');
    form.querySelector('button[type="submit"]').removeAttribute('disabled');
  } else {
    console.log('есть не заполненые поля');
    form.querySelector('button[type="submit"]').setAttribute('disabled', 'disabled');
  }
}