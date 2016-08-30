
let elMenu = document.querySelectorAll('.menu-icon')[0];
let elBody = document.getElementsByTagName('body')[0];

function openMenu () {
  elBody.classList.toggle('overlay');
}

elMenu.addEventListener('click', openMenu);


var header = document.querySelectorAll('.site-header')[0];

function stikyHeader () {
  var x = window.scrollY;
  if (x > 50) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
}

window.addEventListener( "scroll", stikyHeader );
