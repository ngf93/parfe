/* изменение состояния кнопок "в избранное" */
function fav(el){
  el.dataset.fav = (el.dataset.fav == 'false') ? 'true' : 'false'
}

/* фиксированная шапка */
window.addEventListener('scroll', function() {
  let h_header = document.querySelector('header').offsetHeight;
  let st = window.pageYOffset;
  if (st > h_header) {
    document.querySelector('header').classList.add("h-sticky");
  } else {
    document.querySelector('header').classList.remove("h-sticky");
  }
});


/*************** 
DESKTOP SUBMENU
****************/
/* появление подменю */
function openSubmenu(id){
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
/* скрытие подменю */
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
  document.getElementById('shadow').style.zIndex = '-10';
}
let arr_mainMenu = Array.from(document.querySelectorAll('.main-menu'));
arr_mainMenu.forEach(function(item, i, arr) {
  item.addEventListener('mouseenter', function(e) {
    if (item.hasAttribute('data-target')) {
      openSubmenu(item.dataset.target);
    } else {return;}
  });
  item.addEventListener('mouseleave', function(e) {
    if (item.hasAttribute('data-target')) {
      let goingto = e.relatedTarget || event.toElement;
      let check = goingto != document.getElementById(item.dataset.target);
      if(check) {
        closeSubmenu(item.dataset.target);
      }
    } else {return;}
  });
});


/* запуск видео при клике на кнопку */
function play_video(cover){
  let video = cover.previousElementSibling;
  let src = video.getAttribute('src');
  cover.remove();
  video.setAttribute('src', src + '?autoplay=1');
}

/* всплывающее после загрузки страницы модальное окно */
window.onload = function() {
  function popup(){
    let myModal = new bootstrap.Modal(document.getElementById('myModal'), {
      keyboard: false
    });
    myModal.show();
  }
  let popup_delay = 1000*60*1; // 1 минута
  setTimeout(popup, popup_delay);
}

/* анимация появления элементов с классом element-animation при скролле */
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

/* сворачивание фильтра на маленьких экранах */
function filterToggle(btn){
  if (btn.dataset.state == 'closed'){
    btn.nextElementSibling.style.display = 'block';
    btn.dataset.state = 'opened';
  } else {
    btn.nextElementSibling.style.display = 'none';
    btn.dataset.state = 'closed';
  } 
}


/* проверка input-ов с атрибутом required и активация/блокировка кнопки submit */
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


function changeField(){
  document.getElementById('info-field').classList.add('d-none');
  document.getElementById('editing-field').classList.remove('d-none');
}
function changeFieldReverse(){
  document.getElementById('editing-field').classList.add('d-none');
  document.getElementById('info-field').classList.remove('d-none');
}


/*************** 
CUSTOM SELECT
****************/
window.onload = function() {
  let selectElement = document.querySelectorAll('.custom-select');
  let arr_selects = Array.from(selectElement);
  arr_selects.forEach(function(item, i, arr) {
      const btn = item.querySelector('button');
      const options = item.querySelector('.cs-options');
      let inputs = item.querySelectorAll('input');
      let name = inputs[0].name;

      let cur_inp; //выбранный input radio
      for(let i = 0; i < inputs.length; i++){
        if(inputs[i].checked){
          cur_inp = inputs[i];
        }
      }

      if(cur_inp) {
        let label_content = cur_inp.nextElementSibling.innerHTML; //содержимое label следующего после выбранного input
        btn.innerHTML = label_content;
      } else {
        btn.innerHTML = "Не выбрано";
      }

      const toggleMenu = function() {
          // открываем/закрываем окно навигации, добаляя/удаляя активный класс
          options.classList.toggle('opened');
      }

      btn.addEventListener('click', () => { // при клике на кнопку
          toggleMenu();
      });
      
      //скрываем опции при клике вне селекта
      document.addEventListener('click', function(e) {
        const target = e.target;
        const current_sel = target == item || item.contains(target);
        const sel_is_opened = options.classList.contains('opened');
        if (!current_sel && sel_is_opened) {
            toggleMenu();
        }
      });

      let arr_radio = Array.from(inputs);
      arr_radio.forEach(function(item, i, arr) {
        item.addEventListener('change', (event) => {
          changeValueLabel(item);
        });
      });

  
      function changeValueLabel(el){
        let label_content = el.nextElementSibling.innerHTML;
        btn.innerHTML = label_content;
        toggleMenu();
      }
  });
}


/* current year */
let now = new Date();
let cur_year = now.getFullYear();
document.querySelector('#year').innerHTML = cur_year;