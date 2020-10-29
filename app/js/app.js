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
  subList.addEventListener("click", function (event) {
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
  // Секция служба клиентского сервиса
  // for (var i = 0; i < controlBlocks.length; i++) {
  //   if (controlBlocks[i].nextSibling.length !== null) {
  //     controlBlocks[i].addEventListener('mouseover', function () {
  //       $('.ipad-screen-vertical .ipad-screen-item').removeClass('active');
  //       if (this.id == 'srvice-control-1') {
  //         document.querySelector('#service-screen-1').classList.add('active');
  //       } else if (this.id == 'srvice-control-2') {
  //         document.querySelector('#service-screen-2').classList.add('active');
  //       } else if (this.id == 'srvice-control-3') {
  //         document.querySelector('#service-screen-3').classList.add('active');
  //       } else if (this.id == 'srvice-control-4') {
  //         document.querySelector('#service-screen-4').classList.add('active');
  //       }
  //     });
  //   }
  // }
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
  // // Секция слайдера
  // for (var i=0; i<tabButtons.length; i++) {
  //   if (tabButtons[i].nextSibling.length !== null) {
  //     tabButtons[i].addEventListener('click',function(){
  //       for (let sliderItem of document.getElementsByClassName('custom-slider-item')){
  //         if (sliderItem.classList.contains('active')){
  //           sliderItem.classList.remove('active');
  //         }
  //       }
  //       for (let value of document.querySelector('.tab-container').children){
  //         if (value.classList.contains('active')){
  //           value.classList.remove('active');
  //           this.classList.add('active');
  //             document.getElementById(this.dataset.slideid).classList.add('active');
  //         }
  //       }
  //     });
  //   }
  // }

  // tableOpenBtn.addEventListener('click', function () {
  //   tableWrapper.classList.toggle('table-wrapper--opened');
  //   tableOpenBtn.classList.toggle('btn-open--active');
  // });

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
  $(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $("#menu"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0 || $('.menu__link').is(e.target)) { // и не по его дочерним элементам
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

    var scroll = $(window).scrollTop() + scrollOffset;
    var halfPhoneHeight = ($('#sticky-phone').height() + 24) / 2;
    var posPhone = $('#sticky-phone').offset().top + halfPhoneHeight;
    var routineTop = $('.routine').offset().top;
    var routineBottom = $('.routine').offset().top + $('.routine').height();
    if (scroll > routineTop && scroll < routineBottom){
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


/****
 * jQuery Scrollie Plugin v1.0.1
 * https://github.com/Funsella/jquery-scrollie
 *
 * Copyright 2013 JP Nothard
 * Released under the MIT license
 */

;
(function ($, window, document, undefined) {

  "use strict";

  // Create the defaults once
  var scrollie = "scrollie",
    defaults = {
      parentElement: window, // the scrolling element to watch for scrolling action. default: window (custom example: .my-wrapper)
      direction: "both", // 'up', 'down'
      scrollOffset: 0, //
      scrollRatio: 2,
      scrollingInView: null, // activates when the whole element is moving inside the window
      scrollingToTheTop: null, // activates when it enters the window and stops when it reaches the top
      scrollingOutOfView: null, // actives when the element reaches the top of the window and stops when it is out of the window
      scrolledOutOfView: null // activates wehn the element is completly out of the window
    };


  // The actual plugin constructor
  function Plugin(element, options) {

    this.element = element;

    this.settings = $.extend({}, defaults, options);
    this._defaults = defaults;
    this._name = scrollie;
    this.init();


  }

  Plugin.prototype = {

    init: function () {

      this._defineElements();

      this._scrollEvent();

    },

    _defineElements: function () {

      var self = this;

      self.$scrollElement = $(self.element);

      self.$elemHeight = self.$scrollElement.outerHeight();

      self.$elemPosTop = self.$scrollElement.offset().top;

      // if the element has a data-scrollie-offset value, use that or use the default
      self.$scrollOffset = (self.$scrollElement.data('scrollie-offset') || self.$scrollElement.data('scrollie-offset') == '0') ? self.$scrollElement.data('scrollie-offset') : self.settings.scrollOffset;

      // if the element has a data-scrollie-scrollRatio value, use that or use the default
      self.$scrollRatio = (self.$scrollElement.data('scrollie-scrollRatio') || self.$scrollElement.data('scrollie-scrollRatio') == '0') ? self.$scrollElement.data('scrollie-scrollRatio') : self.settings.scrollRatio;

    },

    _inMotion: function (winPos, winHeight, thisTop, direction) {

      var self = this,
        coords = (((winPos - thisTop) * -1) - winHeight) * -1,
        scrollRatio = coords / 2,
        movedOut = coords < winHeight + self.$elemHeight,
        movingIn = (coords) > 0 - (self.$scrollOffset),
        movingToTheTop = movingIn && coords < winHeight,
        movingThrough = movingIn && movedOut,
        atTheTop = coords > winHeight - (self.$scrollOffset) && movedOut;


      /**
       *  When the element moves into view until element reaches the very top of the page
       *---------------------------------------------------------------------------------*/
      if (movingToTheTop) { //revised and offset complete

        jQuery.isFunction(self.settings.scrollingToTheTop) && self.settings.scrollingToTheTop.call(this, this.$scrollElement, self.$scrollOffset, direction, coords, scrollRatio, thisTop, winPos);

      }

      /**
       * if the element is inside the window
       * runs when the element moves into view till the element has completly moved out
       *-------------------------------------------------------------------------------*/
      if (movingThrough) { //revised and offset complete

        jQuery.isFunction(self.settings.scrollingInView) && self.settings.scrollingInView.call(this, this.$scrollElement, self.$scrollOffset, direction, coords, scrollRatio, thisTop, winPos);

      }

      /**
       * if the element has reached the very top of the window
       * runs from when the element touches the top till the element has completly moved out
       *------------------------------------------------------------------------------------*/
      if (atTheTop) { //revised and offset complete

        jQuery.isFunction(self.settings.scrollingOutOfView) && self.settings.scrollingOutOfView.call(this, this.$scrollElement, self.$scrollOffset, direction, coords, scrollRatio, thisTop, winPos);

      }

      /**
       * if the element has moved out the top of the window
       *---------------------------------------------------*/
      if (!movedOut) {

        jQuery.isFunction(self.settings.scrolledOutOfView) && self.settings.scrolledOutOfView.call(this, this.$scrollElement, self.$scrollOffset, direction, coords, scrollRatio, thisTop, winPos);

      }


    },

    _scrollEvent: function () {

      var self = this,
        direction = self.settings.direction,
        lastScrolPos = 0,
        scroll_ok = true;

      setInterval(function () {
        scroll_ok = true;
      }, 66); //33ms is 30fps, you can try changing this to something larger for better performance

      $(self.settings.parentElement).on('scroll', function () {

        var windowPos = $(this).scrollTop(),
          winHeight = $(this).height(),
          currentDirection = (windowPos > lastScrolPos) ? 'up' : 'down';


        // scrolling up
        if (currentDirection === direction && scroll_ok === true) {
          scroll_ok = false;

          // element moving from bottom to top
          self._inMotion(windowPos, winHeight, self.$elemPosTop, currentDirection);

        } else if (direction === 'both' && scroll_ok === true) {
          scroll_ok = false;

          self._inMotion(windowPos, winHeight, self.$elemPosTop, currentDirection);

        }

        lastScrolPos = windowPos;

      });

    }

  };

  // A really lightweight plugin wrapper around the constructor,
  $.fn[scrollie] = function (options) {
    return this.each(function () {
      if (!$.data(this, "plugin_" + scrollie)) {
        $.data(this, "plugin_" + scrollie, new Plugin(this, options));
      }
    });
  };

})(jQuery, window, document);

$(document).ready(function () {
  $('#sm_slider').smSlider({
    duration: 500,
    subMenuClass: 'tab-link',
    delay: 8000,
    subMenu: true,
    autoArr: false,
    pagination: false
  });

  // var wHeight = $('.routine-service').height();
  // $('.slide')
  //   .height(wHeight)
  //   .scrollie({
  //     scrollOffset: -400,
  //     scrollingToTheTop: function (elem) {
  //       var bgColor = elem.data('background');
  //       $('.routine-screen').removeClass('active');
  //       $(bgColor).addClass('active');
  //     }
  //   });

  // let element_1 = $('#block_1'),
  //     element_2 = $('#block_2'),
  //     element_3 = $('#block_3'),
  //     element_4 = $('#block_4');

  // let counter = 0;
  // $(window).scroll(function () {
  //   var scroll = $(window).scrollTop() + $(window).height();
  //   var offsetPad = 0
  //   //Если скролл до конца елемента
  //   var offsetBot_elem1 = element_1.offset().top + element_1.height() + offsetPad;
  //   var offsetBot_elem2 = element_2.offset().top + element_2.height() + offsetPad;
  //   var offsetBot_elem3 = element_3.offset().top + element_3.height() + offsetPad;
  //   var offsetBot_elem4 = element_4.offset().top + element_4.height() + offsetPad;
  //   //Если скролл до начала елемента
  //   var offset_elem1 = element_1.offset().top + offsetPad;
  //   var offset_elem2 = element_2.offset().top + offsetPad;
  //   var offset_elem3 = element_3.offset().top + offsetPad;
  //   var offset_elem4 = element_4.offset().top + offsetPad;


  //   if (scroll > offset_elem1 && counter == 0 && scroll < offsetBot_elem1) {
  //     $(element_1.data('background')).addClass('active');
  //   }
  //   if (scroll > offsetBot_elem1 && $('.routine-screen').hasClass('active')){
  //     $('.routine-screen').removeClass('active');
  //   }

  //   if (scroll > offset_elem2 && counter == 0 && scroll < offsetBot_elem2) {
  //     $(element_2.data('background')).addClass('active');
  //     console.log(offset_elem2);
  //   }
  //   if (scroll > offsetBot_elem2){
  //     // element_1 = $('#block_2');
  //   }

  //   if (scroll > offset_elem3 && counter == 0 && scroll < offsetBot_elem3) {
  //     $('#routine-screen-buh').addClass('active');
  //     console.log(offsetBot_elem3);
  //   }
  //   if (scroll > offsetBot_elem3){
  //     // element_1 = $('#block_2');
  //   }

  //   if (scroll > offset_elem4 && counter == 0 && scroll < offsetBot_elem4) {
  //     $('#routine-screen-buh').addClass('active');
  //     console.log(offsetBot_elem4);
  //   }
  //   if (scroll > offsetBot_elem4){
  //     // element_1 = $('#block_2');
  //   }
  // });
})