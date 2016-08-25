window.addEventListener( "scroll", stikyHeader );

function stikyHeader () {
  var x = window.scrollY;
  var header = document.querySelectorAll('.site-header')[0];
  if (x > 50) {
    header.className='site-header sticky';
  } else {
    header.className='site-header';
  }
}


// // Btn toggle
// var btnToggle = document.getElementById('btnToggle');
// var turn = true;
//
// function toggle() {
//   if (turn === true) {
//     turn = !turn;
//     this.className = 'btn btn--toggle active';
//   } else {
//     turn = true;
//     this.className = 'btn btn--toggle';
//   }
// }
//
// btnToggle.addEventListener('click', toggle);


// Scroll linked effect
// function sticky() {
//   var elmnt = document.getElementById("body");
//   var y = elmnt.scrollTop;
//   console.log(y);
//   var header = document.getElementById('sticky-header');
//   if (y >= 140) {
//     header.className = "Site__header sticky";
//   } else {
//     header.className = "Site__header";
//   }
// }
//
// sticky();

console.log('erre');
let b = '99';
console.log(b);
