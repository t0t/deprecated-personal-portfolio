// var canvas = document.getElementById('myCanvas');
// var context = canvas.getContext('2d');
// context.beginPath();
// context.moveTo(0, 0);
// context.lineTo(500, 500);
// context.lineWidth = 1;
// context.strokeStyle = 'rgb(129, 232, 179)';
// context.stroke();

// function animatedBSpline(context, points, t) {
//
//   // Draw curve segment
//   var ax = (-points[0].x + 3 * points[1].x - 3 * points[2].x + points[3].x) / 6;
//   var ay = (-points[0].y + 3 * points[1].y - 3 * points[2].y + points[3].y) / 6;
//   var bx = (points[0].x - 2 * points[1].x + points[2].x) / 2;
//   var by = (points[0].y - 2 * points[1].y + points[2].y) / 2;
//   var cx = (-points[0].x + points[2].x) / 2;
//   var cy = (-points[0].y + points[2].y) / 2;
//   var dx = (points[0].x + 4 * points[1].x + points[2].x) / 6;
//   var dy = (points[0].y + 4 * points[1].y + points[2].y) / 6;
//   context.beginPath();
//   context.moveTo(
//     ax * Math.pow(t, 3) + bx * Math.pow(t, 2) + cx * t + dx,
//     ay * Math.pow(t, 3) + by * Math.pow(t, 2) + cy * t + dy
//   );
//   context.lineTo(
//     ax * Math.pow(t + 0.1, 3) + bx * Math.pow(t + 0.1, 2) + cx * (t + 0.1) + dx,
//     ay * Math.pow(t + 0.1, 3) + by * Math.pow(t + 0.1, 2) + cy * (t + 0.1) + dy
//   );
//   context.stroke();
//
//   // Keep going until t = 1
//   if (t < 1) requestAnimationFrame(function() {
//     animatedBSpline(context, points, t + 0.1);
//   });
// }
//
// // Kick things off at t = 0
// animatedBSpline(context, points, 0);




// var Obj = {
//   circle: new Array(1),
//   radius: 200,
//   noise: 50,
//   speed: .1,
//   size: 10000,
//
//   //color a = background color; color b = object color
//   color: {
//     a: 'rgb(255, 255, 255)',
//     b: 'rgb(129, 232, 179)'
//   },
//   //X & Y positions
//   X: function(x) {
//     return Obj.c.width / 2 + x;
//   },
//
//   Y: function(y) {
//     return Obj.c.height / 2 - y;
//   },
//   //behavior
//   Circle: function(i) {
//     this.r = Obj.radius - i * Obj.radius / Obj.circle.length;
//     this.e = i % 2 ? true : false;
//     this.max = Math.random() * Obj.noise;
//     this.min = -Math.random() * Obj.noise;
//     this.val = Math.random() * (this.max - this.min) + this.min;
//   },
//   //clearing
//   Clear: function() {
//     Obj.$.fillStyle = Obj.color.a;
//     Obj.$.fillRect(0, 0, Obj.c.width, Obj.c.height);
//   },
//   //shape changing
//   Change: function(C) {
//     for (var i = 0; i < Obj.size; i++) {
//       var a = i * Math.PI * 2 / Obj.size;
//       var x = Math.cos(a) * (C.r - C.val * Math.cos(i / 4));
//       var y = Math.sin(a) * (C.r - C.val * Math.cos(i / 4));
//       Obj.$.fillStyle = Obj.color.b;
//       Obj.$.fillRect(Obj.X(x), Obj.Y(y), 1, 1);
//     }
//     Obj.Check(C);
//   },
//   //noise level checks
//   Check: function(C) {
//     C.val = C.e ? C.val + Obj.speed : C.val - Obj.speed;
//     if (C.val < C.min) {
//       C.e = true;
//       C.max = Math.random() * Obj.noise;
//     }
//     if (C.val > C.max) {
//       C.e = false;
//       C.min = -Math.random() * Obj.noise;
//     }
//   },
//   //update object
//   Update: function() {
//     Obj.Clear();
//     for (var i = 0; i < Obj.circle.length; i++) {
//       Obj.Change(Obj.circle[i]);
//     }
//   },
//   //draw object
//   Draw: function() {
//     Obj.Update();
//     window.requestAnimationFrame(Obj.Draw, Obj.c);
//   },
//   //set circles
//   Set: function() {
//     for (var i = 0; i < Obj.circle.length; i++) {
//       Obj.circle[i] = new Obj.Circle(i);
//     }
//   },
//
//   //size control
//   Size: function() {
//     Obj.c.width = window.innerWidth;
//     Obj.c.height = window.innerHeight;
//   },
//   //get canvas
//   Run: function() {
//     Obj.c = document.querySelector('canvas');
//     Obj.$ = Obj.c.getContext('2d');
//     window.addEventListener('resize', Obj.size, false);
//   },
//   //start
//   Init: function() {
//     Obj.Run();
//     Obj.Size();
//     Obj.Set();
//     Obj.Draw();
//   }
//
// };
// Obj.Init();

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

var elMenu = document.querySelectorAll('.menu-icon')[0];
var elBody = document.getElementsByTagName('body')[0];

function openMenu () {
  console.log( elMenu );
  console.log( elBody );
  elBody.classList.toggle('overlay');
}

elMenu.addEventListener( 'click', openMenu );


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
