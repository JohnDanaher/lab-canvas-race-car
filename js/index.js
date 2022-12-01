const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let randomX = Math.floor(Math.random() * (500 - 1) + 1)
let randomY = Math.floor(Math.random() * (700 - 1) + 1)
let randomW = Math.floor(Math.random() * (500 - 400) + 1)
let speed = 0;

const myGameArea = {  
  canvas: document.getElementById('canvas'),
  frames: 0,
    start: function () {
        // setting canvas width and height on the page
      this.interval = setInterval(updateGameArea, 20); // calling the updateGameArea every 20ms so we can run updates inside canvas after we start our game
    },
    clear: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      },
      stop: function () {
        clearInterval(this.interval);
      },
      score: function () {
        const points = Math.floor(this.frames / 5);
        this.context.font = '18px serif';
        this.context.fillStyle = 'black';
        this.context.fillText(`Score: ${points}`, 350, 50);
      },
  };

const imgRoad = new Image();
 imgRoad.src = "./images/road.png";
const imgCar = new Image();
 imgCar.src = "./images/car.png";

 class Car {
  constructor() {
    this.x = 225;
    this.y = 300;
    this.img = imgCar;
  }
  
  moveLeft() {
    this.x -= 25;
  }
  moveRight() {
    this.x += 25;
  }

  draw() {
    ctx.drawImage(this.img, this.x, this.y, 50, 100);
  }
}
 
const car = new Car();

function updateCanvas() {
  ctx.drawImage(imgRoad, 0, 0, 500, 700); // clearing canvas for our next animation
  // generate the next animation frame
  car.draw();
  makeObstacles();
}

function makeObstacles() {
ctx.fillStyle = 'red';
ctx.fillRect(randomX, speed, randomY, 50);
speed +=2;
requestAnimationFrame(updateCanvas)
}


document.addEventListener('keydown', event => {
  if(event.keyCode === 37) {
      car.moveLeft();
  }
   if(event.keyCode === 39) {
      car.moveRight();
  }
  updateCanvas();
  makeObstacles();
});

 


 window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    document.querySelector(".game-intro").remove();
    // ctx.clearRect(0, 0, 500, 500);
    ctx.drawImage(imgRoad, 0, 0, 500, 700);
    ctx.drawImage(imgCar, 225, 300, 50, 100)
  }
};


