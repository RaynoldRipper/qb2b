let hamburger = document.querySelector('.hamburger');
let menu = document.querySelector('.bgr-wrapper');

function hambToggle(){
  if (hamburger.classList.contains('active')){
    hamburger.classList.remove('active');
  }
  else {
    hamburger.classList.add('active');
  }
}

hamburger.addEventListener('click', hambToggle);