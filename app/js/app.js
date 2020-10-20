document.addEventListener("DOMContentLoaded", function(event) {
  let tableOpenBtn = document.querySelector('.btn-open');
  let tableWrapper = document.querySelector('.table-wrapper');
  let burgerButton = document.querySelector('.burger-menu');

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

  var wow = new WOW(
    {
      boxClass:     'section-info',      // класс, скрывающий элемент до момента отображения на экране (по умолчанию, wow)
      animateClass: 'animated', // класс для анимации элемента (по умолчанию, animated)
      offset:       0,          // расстояние в пикселях от нижнего края браузера до верхней границы элемента, необходимое для начала анимации (по умолчанию, 0)
      mobile:       true,       // включение/отключение WOW.js на мобильных устройствах (по умолчанию, включено)
      live:         true,       // поддержка асинхронно загруженных элементов (по умолчанию, включена)
      scrollContainer: null // селектор прокручивающегося контейнера (опционально, по умолчанию, window)
    }
  );
  wow.init();
});
