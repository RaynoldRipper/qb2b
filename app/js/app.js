document.addEventListener("DOMContentLoaded", function (event) {

  let tableOpenBtn = document.querySelector('.btn-open');
  let tableWrapper = document.querySelector('.table-wrapper');
  let routineItem = document.querySelectorAll('.routine-service');
  let ipadTable = document.querySelector('.ipad-table'),
    ipadKvartal = document.querySelector('.ipad-kvartal'),
    ipadAnalitica = document.querySelector('.ipad-analitica'),
    ipadIndicators = document.querySelector('.ipad-indicators'),
    screenTable = document.querySelector('#ipad-screen-table'),
    screenAnalitica = document.querySelector('#ipad-screen-analitica');
  let subList = document.querySelector('.capabilities'),
    freeList = document.querySelector('.free-list'),
    freeItem = freeList.querySelectorAll('.sub-item'),
    taskList = document.querySelectorAll('.task-link'),
    subItem = subList.querySelectorAll('.sub-item'),
    activeClass = "sub-item--active";
  let reviewBlocks = document.querySelectorAll('.review-block');
  let tabButtons = document.querySelectorAll('.tab-link');


  freeList.addEventListener("click", function (event) {
    const element = event.target.closest(".sub-item");
    if (!element) return;
    const activeElement = element.parentElement.querySelector(".sub-item--active");
    activeElement && activeElement.classList.remove(activeClass);
    (element === activeElement) || element.classList.add(activeClass);
  });
  subList.addEventListener("mouseover", function (event) {
    const element = event.target.closest(".sub-item");
    if (!element) return;
    const activeElement = element.parentElement.querySelector(".sub-item--active");
    activeElement && activeElement.classList.remove(activeClass);
    (element === activeElement) || element.classList.add(activeClass);
  });

  for (var i = 0; i < subItem.length; i++) {
    if (subItem[i].nextSibling.length !== null) {
      subItem[i].addEventListener('mouseover', function () {
        $('.ipad-screen-horizontal .ipad-screen-item').removeClass('active');
        screenAnalitica.classList.remove('active');
        if (this.id == 'ipad-table') {
          screenTable.classList.add('active');
          ipadTable.classList.add('active');
        } else if (this.id == 'ipad-kvartal') {
          screenTable.classList.add('active');
          ipadKvartal.classList.add('active');
        } else if (this.id == 'ipad-analitica') {
          screenAnalitica.classList.add('active');
          ipadAnalitica.classList.add('active');
        } else if (this.id == 'ipad-indicators') {
          screenAnalitica.classList.add('active');
          ipadIndicators.classList.add('active');
        }

        if (this.dataset.image) {
          // console.log(this.dataset.image);
          document.getElementById(this.dataset.image).classList.add('active');
        }
      });
      subItem[i].addEventListener('mouseout', function () {
        ipadTable.classList.remove('active');
        ipadKvartal.classList.remove('active');
        ipadAnalitica.classList.remove('active');
        ipadIndicators.classList.remove('active');
      });
    }
  }
  for (var i = 0; i < tabButtons.length; i++) {
    if (tabButtons[i].nextSibling.length !== null) {
      tabButtons[i].addEventListener('click', function () {
        if ($('.sub-item').hasClass('sub-item--active')) {
          let subActive = document.querySelectorAll('.sub-item.sub-item--active[data-image]');
          for (let i = 0; i < subActive.length; i++) {
            document.getElementById(subActive[i].dataset.image).classList.add('active');
          }
        }
      });
    }
  }

  function timeOut() {
    i = 0;
    (function iterate(i) {
      if (i < subItem.length) {
        subListActive = document.querySelector('.sm_slide.active');
        console.log(subListActive);
        setTimeout(function () {
          iterate(i + 1);
        }, 2000);
      }
    })(0);
  }


  // timeOut();

  for (var i = 0; i < taskList.length; i++) {
    if (taskList[i].nextSibling.length !== null) {
      taskList[i].addEventListener('mouseover', function () {
        $('.screen-item-task.screen-item').removeClass('active');
        if (this.id == 'phone-1') {
          document.querySelector('#tasks-phone-1').classList.add('active');
        } else if (this.id == 'phone-2') {
          document.querySelector('#tasks-phone-2').classList.add('active');
        } else if (this.id == 'phone-3') {
          document.querySelector('#tasks-phone-3').classList.add('active');
        }
      });
    }
  }
  // Секция отзывов
  for (var i = 0; i < reviewBlocks.length; i++) {
    if (reviewBlocks[i].nextSibling.length !== null) {
      reviewBlocks[i].addEventListener('mouseover', function () {
        $('.reviews .screen-item').removeClass('active');
        if (this.id == 'review-block-yandex') {
          document.querySelector('#review-screen-yandex').classList.add('active');
        } else if (this.id == 'review-block-google') {
          document.querySelector('#review-screen-google').classList.add('active');
        } else if (this.id == 'review-block-2gis') {
          document.querySelector('#review-screen-2gis').classList.add('active');
        }
      });
    }
  }
  // 
  for (var i = 0; i < freeItem.length; i++) {
    if (freeItem[i].nextSibling.length !== null) {
      freeItem[i].addEventListener('mouseover', function () {
        $('.macbook-screen .screen-item').removeClass('active');
        if (this.id == 'free-ecp') {
          document.querySelector('#mac-screen-ecp').classList.add('active');
        } else if (this.id == 'free-eso') {
          document.querySelector('#mac-screen-eso').classList.add('active');
        } else if (this.id == 'free-buh') {
          document.querySelector('#mac-screen-buh').classList.add('active');
        }
      });
    }
  }

  var h = $('.table-content').css('height');
  console.log(h);
  $('head').append('<style>.table-item::before { height: ' + h + '; }</style>');


  wow = new WOW({
    boxClass: 'wow', // класс, скрывающий элемент до момента отображения на экране (по умолчанию, wow)
    animateClass: 'animated', // класс для анимации элемента (по умолчанию, animated)
    offset: 0, // расстояние в пикселях от нижнего края браузера до верхней границы элемента, необходимое для начала анимации (по умолчанию, 0)
    mobile: true, // включение/отключение WOW.js на мобильных устройствах (по умолчанию, включено)
    live: true, // поддержка асинхронно загруженных элементов (по умолчанию, включена)
    callback: function (box) {
      // функция срабатывает каждый раз при старте анимации
      // аргумент box — элемент, для которого была запущена анимация
    },
    scrollContainer: null // селектор прокручивающегося контейнера (опционально, по умолчанию, window)
  });
  wow.init();

  (function () {
    var body = document.body,
      pen = document.querySelector('.pen-image'),
      startX = -30,
      startY = -30,
      w = window.innerWidth,
      h = window.innerHeight;
    body.addEventListener('mousemove', function (evt) {
      var posX = Math.abs(evt.clientX / w * startX)
      var posY = Math.abs(evt.clientY / h * startY)
      pen.style.transform = 'translate(' + posX + 'px,' + posY + 'px)';
      // console.log(posY);
    })
  })()
  $('.burger-menu').click(function () {
    $('.burger-menu ').toggleClass('active');
    $('#menu').toggleClass('open');
  });
  $(document).mouseup(function (e) { // событие клика по веб-документу
    var div = $("#menu"); // тут указываем ID элемента
    if (!div.is(e.target) // если клик был не по нашему блоку
      &&
      div.has(e.target).length === 0 || $('.menu__link').is(e.target)) { // и не по его дочерним элементам
      div.removeClass('open'); // скрываем его
      $('.burger-menu').removeClass('active');
    }
  });
  var angrednsol1 = $('#block_1').offset().top;
  var angrednsol2 = $('#block_2').offset().top;
  var angrednsol3 = $('#block_3').offset().top;
  var angrednsol4 = $('#block_4').offset().top;
  var angrednsol5 = $('#block_5').offset().top;

  var scrollOffset = 0;

  $(window).scroll(function () {

    var scroll = $(window).scrollTop() + window.innerHeight + scrollOffset;
    var halfPhoneHeight = ($('#sticky-phone').height() + 24) / 2;
    var posPhone = $('#sticky-phone').offset().top + halfPhoneHeight;
    var routineTop = $('.routine').offset().top;
    var routineBottom = $('.routine').offset().top + $('.routine').height();
    if (scroll > routineTop && scroll < routineBottom) {
      if (posPhone > angrednsol1) {
        $('.routine-screen').removeClass('active');
        $('#routine-screen-buh').addClass('active');
      }

      if (posPhone > angrednsol2) {
        $('.routine-screen').removeClass('active');
        $('#routine-screen-uchet').addClass('active');
      }

      if (posPhone > angrednsol3) {
        $('.routine-screen').removeClass('active');
        $('#routine-screen-lawyer').addClass('active');
      }

      if (posPhone > angrednsol4) {
        $('.routine-screen').removeClass('active');
        $('#routine-screen-mark').addClass('active');
      }
      if (posPhone > angrednsol5) {
        $('.routine-screen').removeClass('active');
        $('#routine-screen-it').addClass('active');
      }
    }
  });
});

(jQuery, window, document);

$(document).ready(function () {
  $('#sm_slider').smSlider({
    duration: 500,
    subMenuClass: 'tab-link',
    delay: 8000,
    subMenu: true,
    autoArr: false,
    pagination: false
  });
})