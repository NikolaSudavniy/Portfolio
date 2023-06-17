var radius = 300;
var autoRotate = true;
var rotateSpeed = -85;
var imgWidth = 140;
var imgHeight = 190;

setTimeout(init, 2000);

var drag = document.querySelector('.drag-container');
var spin = document.querySelector('.spin-container');
var imgs = spin.querySelectorAll('.gallery-item');
var videos = spin.querySelectorAll('.gallery-item_video');
var media = [...imgs, ...videos]; // combine 2 arrays

spin.style.width = imgWidth + "px";
spin.style.height = imgHeight + "px";

var ground = document.querySelector('.ground');
ground.style.width = radius * 3 + "px";
ground.style.height = radius * 3 + "px";

function checkScreenSize() {
  var windowWidth = window.innerWidth;

  if (windowWidth < 400) {
    radius = 140;
    autoRotate = true;
    rotateSpeed = -85;
    imgWidth = 80;
    imgHeight = 110;
  } else if(windowWidth < 750) {
		radius = 180;
    autoRotate = true;
    rotateSpeed = -85;
    imgWidth = 100;
    imgHeight = 150;
	} else {
    radius = 300;
    autoRotate = true;
    rotateSpeed = -85;
    imgWidth = 140;
    imgHeight = 190;
  }

  spin.style.width = imgWidth + "px";
  spin.style.height = imgHeight + "px";
  ground.style.width = radius * 3 + "px";
  ground.style.height = radius * 3 + "px";
  init(1);
}

checkScreenSize();

window.addEventListener('resize', function() {
  checkScreenSize();
});

function init(delayTime) {
  for (var i = 0; i < media.length; i++) {
    media[i].style.transform = "rotateY(" + (i * (360 / media.length)) + "deg) translateZ(" + radius + "px)";
    media[i].style.transition = "transform 1s";
    media[i].style.transitionDelay = delayTime || (media.length - i) / 4 + "s";
  }
}

function applyTranform(obj) {
  if(tY > 180) tY = 180;
  if(tY < 0) tY = 0;

  obj.style.transform = "rotateX(" + (-tY) + "deg) rotateY(" + (tX) + "deg)";
}

function startSpin(yes) {
  spin.style.animationPlayState = (yes?'running':'paused');
}

var sX,
sY, 
nX, 
nY, 
desX = 0,
desY = 0,
tX = 0,
tY = 10;

if (autoRotate) {
  var animationName = (rotateSpeed > 0 ? 'spin' : 'spinRevert');
  spin.style.animation = `${animationName} ${Math.abs(rotateSpeed)}s infinite linear`;
}

document.onpointerdown = function (e) {
  clearInterval(drag.timer);
  e = e || window.event;
  var sX = e.clientX,
      sY = e.clientY;

  this.onpointermove = function (e) {
    e = e || window.event;
    var nX = e.clientX,
        nY = e.clientY;
    desX = nX - sX;
    desY = nY - sY;
    tX += desX * 0.1;
    tY += desY * 0.1;
    applyTranform(drag);
    sX = nX;
    sY = nY;
  };

  this.onpointerup = function (e) {
    drag.timer = setInterval(function () {
      desX *= 0.95;
      desY *= 0.95;
      tX += desX * 0.1;
      tY += desY * 0.1;
      applyTranform(drag);
      startSpin(false);
      if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
        clearInterval(drag.timer);
        startSpin(true);
      }
    }, 17);
    this.onpointermove = this.onpointerup = null;
  };

  return false;
};

document.onmousewheel = function(e) {
  e = e || window.event;
  var d = e.wheelDelta / 20 || -e.detail;
  radius += d;
  init(1);
};
