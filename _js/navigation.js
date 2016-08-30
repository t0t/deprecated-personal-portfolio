let elMenu = document.querySelectorAll('.menu-icon')[0];
let elBody = document.getElementsByTagName('body')[0];

function openMenu () {
  elBody.classList.toggle('overlay');
}

elMenu.addEventListener('click', openMenu);
