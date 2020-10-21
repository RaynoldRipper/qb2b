document.addEventListener("DOMContentLoaded", function(event) {
  
  let tableOpenBtn = document.querySelector('.btn-open');
  let tableWrapper = document.querySelector('.table-wrapper');
  let burgerButton = document.querySelector('.burger-menu');
  let routineItem = document.querySelectorAll('.routine-service');
  let ipadTable = document.querySelector('.ipad-table'),
      ipadKvartal = document.querySelector('.ipad-kvartal'),
      ipadAnalitica = document.querySelector('.ipad-analitica'),
      ipadIndicators = document.querySelector('.ipad-indicators'),
      screenTable = document.querySelector('#ipad-screen-table'),
      screenAnalitica = document.querySelector('#ipad-screen-analitica');
  let subList = document.querySelector('.sub-list'),
      freeList = document.querySelector('.free-list'),
      taskList = document.querySelectorAll('.task-link'),
      subItem = subList.querySelectorAll('.sub-item'),
      activeClass = "sub-item--active";
  
  freeList.addEventListener("click", function(event) {
    const element = event.target.closest(".sub-item");
    if (!element) return;
    const activeElement = element.parentElement.querySelector(".sub-item--active");
    activeElement && activeElement.classList.remove(activeClass);
    (element === activeElement) || element.classList.add(activeClass);
  });
  subList.addEventListener("click", function(event) {
    const element = event.target.closest(".sub-item");
    if (!element) return;
    const activeElement = element.parentElement.querySelector(".sub-item--active");
    activeElement && activeElement.classList.remove(activeClass);
    (element === activeElement) || element.classList.add(activeClass);
  });
  for (var i=0; i<subItem.length; i++) {
    if (subItem[i].nextSibling.length !== null) {
      subItem[i].addEventListener('mouseover',function(){
        screenTable.classList.remove('active');
        screenAnalitica.classList.remove('active');
        if (this.id == 'ipad-table'){
          screenTable.classList.add('active');
          ipadTable.classList.add('active');
        }
        else if (this.id == 'ipad-kvartal'){
          screenTable.classList.add('active');
          ipadKvartal.classList.add('active');
        }
        else if (this.id == 'ipad-analitica'){
          screenAnalitica.classList.add('active');
          ipadAnalitica.classList.add('active');
        }
        else if (this.id == 'ipad-indicators'){
          screenAnalitica.classList.add('active');
          ipadIndicators.classList.add('active');
        }
      });
      subItem[i].addEventListener('mouseout',function(){
          ipadTable.classList.remove('active');
          ipadKvartal.classList.remove('active');
          ipadAnalitica.classList.remove('active');
          ipadIndicators.classList.remove('active');
      });
    }
  }

  for (var i=0; i<taskList.length; i++) {
    if (taskList[i].nextSibling.length !== null) {
      taskList[i].addEventListener('mouseover',function(){
        $('.active').removeClass('active');
        if (this.id == 'phone-1'){
          document.querySelector('#tasks-phone-1').classList.add('active');
        }
        else if (this.id == 'phone-2'){
          document.querySelector('#tasks-phone-2').classList.add('active');
        }
        else if (this.id == 'phone-3'){
          document.querySelector('#tasks-phone-3').classList.add('active');
        }
      });
    }
  }

  tableOpenBtn.addEventListener('click',function(){
    tableWrapper.classList.toggle('table-wrapper--opened');
    tableOpenBtn.classList.toggle('btn-open--active');
  });
  burgerButton.addEventListener('click', function(){
    burgerButton.classList.toggle('burger-menu--active');
  });

  var h = $('.table-content').css('height');
  console.log(h);
  $('head').append('<style>.table-item::before { height: ' + h + '; }</style>');  
  
  
  wow = new WOW(
    {
      boxClass:     'wow',      // класс, скрывающий элемент до момента отображения на экране (по умолчанию, wow)
      animateClass: 'animated', // класс для анимации элемента (по умолчанию, animated)
      offset:       0,          // расстояние в пикселях от нижнего края браузера до верхней границы элемента, необходимое для начала анимации (по умолчанию, 0)
      mobile:       true,       // включение/отключение WOW.js на мобильных устройствах (по умолчанию, включено)
      live:         true,       // поддержка асинхронно загруженных элементов (по умолчанию, включена)
      callback:     function(box) {
        // функция срабатывает каждый раз при старте анимации
        // аргумент box — элемент, для которого была запущена анимация
      },
      scrollContainer: null // селектор прокручивающегося контейнера (опционально, по умолчанию, window)
    }
  );
  wow.init();
  
  (function(){
    var body = document.body,
        pen = document.querySelector('.pen-image'),
        startX = -30,
        startY = -30,
        w = window.innerWidth,
        h = window.innerHeight;
    body.addEventListener('mousemove', function(evt){
      var posX = Math.round(evt.clientX / w * startX)
      var posY = Math.round(evt.clientY / h * startY)
      pen.style.transform = 'translate(' + posX + 'px,' + posY + 'px)';
      // console.log(posY);
    })
  })()


});



/****
 * jQuery Scrollie Plugin v1.0.1
 * https://github.com/Funsella/jquery-scrollie
 *
 * Copyright 2013 JP Nothard
 * Released under the MIT license
 */

;(function ( $, window, document, undefined ) {

  "use strict";

  // Create the defaults once
  var scrollie = "scrollie",
      defaults = {
          parentElement : window, // the scrolling element to watch for scrolling action. default: window (custom example: .my-wrapper)
          direction : "both", // 'up', 'down'
          scrollOffset : 0, //
          scrollRatio  : 2, 
          scrollingInView : null, // activates when the whole element is moving inside the window
          scrollingToTheTop : null, // activates when it enters the window and stops when it reaches the top
          scrollingOutOfView : null, // actives when the element reaches the top of the window and stops when it is out of the window
          scrolledOutOfView : null  // activates wehn the element is completly out of the window
  };

  // The actual plugin constructor
  function Plugin ( element, options ) {
      
      this.element = element;
      
      this.settings = $.extend( {}, defaults, options );
      this._defaults = defaults;
      this._name = scrollie;
      this.init();


  }

  Plugin.prototype = {

      init: function () {
          
          this._defineElements();

          this._scrollEvent();

      },

      _defineElements: function() {

          var self = this;

          self.$scrollElement = $(self.element);
          
          self.$elemHeight = self.$scrollElement.outerHeight();
          
          self.$elemPosTop = self.$scrollElement.offset().top;

          // if the element has a data-scrollie-offset value, use that or use the default
          self.$scrollOffset = (self.$scrollElement.data('scrollie-offset') ||  self.$scrollElement.data('scrollie-offset') == '0') ? self.$scrollElement.data('scrollie-offset') : self.settings.scrollOffset;

          // if the element has a data-scrollie-scrollRatio value, use that or use the default
          self.$scrollRatio = (self.$scrollElement.data('scrollie-scrollRatio') ||  self.$scrollElement.data('scrollie-scrollRatio') == '0') ? self.$scrollElement.data('scrollie-scrollRatio') : self.settings.scrollRatio;

      },

      _inMotion: function (winPos, winHeight, thisTop, direction) {

          var self = this,
              coords = (((winPos - thisTop) * -1) - winHeight) * -1,
              scrollRatio = coords / 2,
              movedOut = coords < winHeight + self.$elemHeight,
              movingIn = ( coords ) > 0 - (self.$scrollOffset),
              movingToTheTop = movingIn && coords < winHeight,
              movingThrough = movingIn && movedOut,
              atTheTop = coords > winHeight - (self.$scrollOffset) && movedOut;


          /**
           *  When the element moves into view until element reaches the very top of the page
           *---------------------------------------------------------------------------------*/
          if( movingToTheTop ){ //revised and offset complete
                
              jQuery.isFunction(self.settings.scrollingToTheTop) && self.settings.scrollingToTheTop.call( this, this.$scrollElement, self.$scrollOffset, direction, coords, scrollRatio, thisTop, winPos );    

          } 

          /**
           * if the element is inside the window
           * runs when the element moves into view till the element has completly moved out
           *-------------------------------------------------------------------------------*/
          if( movingThrough ){ //revised and offset complete
                
              jQuery.isFunction(self.settings.scrollingInView) && self.settings.scrollingInView.call( this, this.$scrollElement, self.$scrollOffset, direction, coords, scrollRatio, thisTop, winPos );    
              
          } 

          /**
           * if the element has reached the very top of the window
           * runs from when the element touches the top till the element has completly moved out
           *------------------------------------------------------------------------------------*/
          if( atTheTop ){ //revised and offset complete
                
              jQuery.isFunction(self.settings.scrollingOutOfView) && self.settings.scrollingOutOfView.call( this, this.$scrollElement, self.$scrollOffset, direction, coords, scrollRatio, thisTop, winPos );    
              
          }

          /**
           * if the element has moved out the top of the window
           *---------------------------------------------------*/
          if (  !movedOut ) {

              jQuery.isFunction(self.settings.scrolledOutOfView) && self.settings.scrolledOutOfView.call( this, this.$scrollElement, self.$scrollOffset, direction, coords, scrollRatio, thisTop, winPos ); 

          }


      },

      _scrollEvent: function() {

          var self = this,
              direction = self.settings.direction,
              lastScrolPos = 0,
              scroll_ok = true;
          
          setInterval(function () {
              scroll_ok = true;
          }, 66);//33ms is 30fps, you can try changing this to something larger for better performance

          $(self.settings.parentElement).on('scroll', function(){

              var windowPos = $(this).scrollTop(),
                  winHeight = $(this).height(),
                  currentDirection = ( windowPos > lastScrolPos ) ? 'up' : 'down';          
              
             
              // scrolling up
              if ( currentDirection === direction && scroll_ok === true) {
                  scroll_ok = false;

                  // element moving from bottom to top
                  self._inMotion(windowPos, winHeight, self.$elemPosTop, currentDirection );

              } 
             
              else if ( direction === 'both' && scroll_ok === true ) {
                  scroll_ok = false;

                  self._inMotion(windowPos, winHeight, self.$elemPosTop, currentDirection );

              }

              lastScrolPos = windowPos;
              
          });

      }

  };

  // A really lightweight plugin wrapper around the constructor,
  $.fn[ scrollie ] = function ( options ) {
      return this.each(function() {
          if ( !$.data( this, "plugin_" + scrollie ) ) {
              $.data( this, "plugin_" + scrollie, new Plugin( this, options ) );
          }
      });
  };

})( jQuery, window, document );