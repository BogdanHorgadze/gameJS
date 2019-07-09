let ballplace = document.querySelector('.place-for-ball'),
    basketPlace = document.querySelector('.place-for-basket');

let ball = {
  img: 'img/ball.png',
  width: '64px',
  speed: 0,
  position: function (min, max) {
   return Math.floor(Math.random() * (max - min)) + min;
  }
};

let img = document.createElement('img');
ballplace.appendChild(img);
img.src = ball.img;
img.style.width = ball.width;



setInterval(function () {
  ballplace.style.position = 'absolute';
  ballplace.style.top = ball.speed + 'px';
  ball.speed += 1;
  score();

  if (ball.speed == screen.height) {
    ball.speed = 0;
    respawn();
  }
}, 10);

function respawn() {
   ballplace.style.marginLeft = ball.position(0,800) + 'px';
}

let basket = {
  img: 'img/basket.png',
  width: '100px',
};

let photo = document.createElement('img');
basketPlace.appendChild(photo);
photo.src = basket.img;
photo.style.width = basket.width;

basketPlace.style.position = 'absolute';
basketPlace.style.bottom = 0;

document.addEventListener('mousemove', function () {
  basketPlace.style.left = event.clientX + 'px';
  
  if (event.clientX >= screen.width - 100) {
    basketPlace.style.left = screen.width - 100 + 'px';
  }
});

function score() {
  if (ballplace.offsetTop > basketPlace.offsetTop &&
    (ballplace.offsetLeft >= basketPlace.offsetLeft - 30 && ballplace.offsetLeft <= basketPlace.offsetLeft + 30)) {
    ball.speed = 0;
    respawn();
  }
}
