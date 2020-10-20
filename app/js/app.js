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
  
});