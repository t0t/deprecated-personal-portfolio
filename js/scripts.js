var Obj = {
  circle: new Array(4),
  radius: 350,
  noise: 500,
  speed: 1,
  size: 400,

  //color a = background color; color b = object color
  color: {
    a: 'rgba(255, 255, 255, .5)',
    b: 'rgb(129, 232, 179)'
  },
  //X & Y positions
  X: function(x) {
    return Obj.c.width / 2 + x;
  },

  Y: function(y) {
    return Obj.c.height / 2 - y;
  },
  //behavior
  Circle: function(i) {
    this.r = Obj.radius - i * Obj.radius / Obj.circle.length;
    this.e = i % 2 ? true : false;
    this.max = Math.random() * Obj.noise;
    this.min = -Math.random() * Obj.noise;
    this.val = Math.random() * (this.max - this.min) + this.min;
  },
  //clearing
  Clear: function() {
    Obj.$.fillStyle = Obj.color.a;
    Obj.$.fillRect(0, 0, Obj.c.width, Obj.c.height);
  },
  //shape changing
  Change: function(C) {
    for (var i = 0; i < Obj.size; i++) {
      var a = i * Math.PI * 2 / Obj.size;
      var x = Math.cos(a) * (C.r - C.val * Math.cos(i / 4));
      var y = Math.sin(a) * (C.r - C.val * Math.cos(i / 4));
      Obj.$.fillStyle = Obj.color.b;
      Obj.$.fillRect(Obj.X(x), Obj.Y(y), 1, 1);
    }
    Obj.Check(C);
  },
  //noise level checks
  Check: function(C) {
    C.val = C.e ? C.val + Obj.speed : C.val - Obj.speed;
    if (C.val < C.min) {
      C.e = true;
      C.max = Math.random() * Obj.noise;
    }
    if (C.val > C.max) {
      C.e = false;
      C.min = -Math.random() * Obj.noise;
    }
  },
  //update object
  Update: function() {
    Obj.Clear();
    for (var i = 0; i < Obj.circle.length; i++) {
      Obj.Change(Obj.circle[i]);
    }
  },
  //draw object
  Draw: function() {
    Obj.Update();
    window.requestAnimationFrame(Obj.Draw, Obj.c);
  },
  //set circles
  Set: function() {
    for (var i = 0; i < Obj.circle.length; i++) {
      Obj.circle[i] = new Obj.Circle(i);
    }
  },

  //size control
  Size: function() {
    Obj.c.width = window.innerWidth;
    Obj.c.height = window.innerHeight;
  },
  //get canvas
  Run: function() {
    Obj.c = document.querySelector('canvas');
    Obj.$ = Obj.c.getContext('2d');
    window.addEventListener('resize', Obj.size, false);
  },
  //start
  Init: function() {
    Obj.Run();
    Obj.Size();
    Obj.Set();
    Obj.Draw();
  }

};
Obj.Init();

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
