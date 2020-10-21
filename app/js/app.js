document.addEventListener("DOMContentLoaded", function(event) {
  
  let tableOpenBtn = document.querySelector('.btn-open');
  let tableWrapper = document.querySelector('.table-wrapper');
  let burgerButton = document.querySelector('.burger-menu');
  let ipadTable = document.querySelector('.ipad-table');
  let ipadKvartal = document.querySelector('.ipad-kvartal');
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
        if (this.id == 'ipad-table'){
          ipadTable.classList.add('active');
        }
        else if (this.id == 'ipad-kvartal'){
          ipadKvartal.classList.add('active');
        }
      });
      subItem[i].addEventListener('mouseout',function(){
          ipadTable.classList.remove('active');
          ipadKvartal.classList.remove('active');
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