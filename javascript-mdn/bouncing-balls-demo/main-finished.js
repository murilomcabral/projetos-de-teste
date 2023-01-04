// set up canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

const para = document.querySelector('p');
let count = 0;

const ballCount = 100;

para.textContent += '/' + ballCount

// function to generate random number

function random(min, max) {
  const rnd = Math.floor(Math.random() * (max - min + 1)) + min;
  if (rnd == 0) {
    return random(min, max)
  }
  return rnd
}

// function to generate random RGB color value

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

class Shape { 
  x;
  y;
  velX;
  velY;
  constructor(x, y, velX, velY) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
 }
}

class Ball extends Shape {
  color;
  size;
  constructor(x, y, velX, velY, color, size) {
    super(x, y, velX, velY)
    this.color = color;
    this.size = size;
    this.exists = true;
  }

  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
  }

  update() {
    if ((this.x + this.size) >= width) {
        this.velX = -(Math.abs(this.velX));
    }

    if ((this.x - this.size) <= 0) {
        this.velX = Math.abs(this.velX);
    }

    if ((this.y + this.size) >= height) {
        this.velY = -(Math.abs(this.velY));
    }

    if ((this.y - this.size) <= 0) {
        this.velY = Math.abs(this.velY);
    }

    this.x += this.velX;
    this.y += this.velY;
  }

  collisionDetect() {
    for (const ball of balls) {
      if (!(this === ball) && ball.exists) {
        const dx = this.x - ball.x;
        const dy = this.y - ball.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
  
        if (distance < this.size + ball.size) {
          ball.color = this.color = randomRGB();
        }
      }
    }
  }

}

class EvilCircle extends Shape {
  constructor(x, y){
    super(x, y, 20, 20)
    this.color = 'white';
    this.size = 10;

    window.addEventListener("keydown", (e) => {
      switch (e.key) {
        case "a":
          this.x -= this.velX;
          break;
        case "d":
          this.x += this.velX;
          break;
        case "w":
          this.y -= this.velY;
          break;
        case "s":
          this.y += this.velY;
          break;
      }
    });

 }
  
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.strokeStyle = this.color;
    ctx.lineWidth = 3;
    ctx.stroke();
  }

  checkBounds() {
    if ((this.x + this.size) >= width) {
        this.x -= 1;
    }

    if ((this.x - this.size) <= 0) {
        this.x += 1;
    }

    if ((this.y + this.size) >= height) {
        this.y -= 1;
    }

    if ((this.y - this.size) <= 0) {
        this.y += 1;
    }
    
  }

  collisionDetect() {
    for (const ball of balls) {
      if (ball.exists) {
        const dx = this.x - ball.x;
        const dy = this.y - ball.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
  
        if (distance < this.size + ball.size) {
          balls.splice(balls.indexOf(ball),1);
          count++
          para.textContent = 'Ball count: ' + count + '/' + ballCount
        }
      }
    }
  }

}

const balls = [];

while (balls.length < ballCount) {
   const size = random(10,20);
   const ball = new Ball(
      // ball position always drawn at least one ball width
      // away from the edge of the canvas, to avoid drawing errors
      random(0 + size,width - size),
      random(0 + size,height - size),
      random(-7,7),
      random(-7,7),
      randomRGB(),
      size
   );

  balls.push(ball);
}

const evil = new EvilCircle(10,10)

function loop() {
   ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
   ctx.fillRect(0, 0,  width, height);

   for (const ball of balls) {
      if (ball.exists){
        ball.draw();
        ball.update();
        ball.collisionDetect();
      }
   }

   evil.draw()
   evil.checkBounds()
   evil.collisionDetect()

   requestAnimationFrame(loop);
   //Still need to find a way to stop looping after balls.length reach zero.

}

//Countdown added.
//After 10 seconds, one by one, all balls will disappear with an interval of 1 second between each.

const timeoutCountdown = 30000;
const ballPopInterval = 1000;

function popOut() {
  balls.pop()
}

function gameOver() {
  const gameOver = document.createElement('p');
  gameOver.textContent = `Game Over`;
  gameOver.style.cssText = 'position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: white; font-size: 4rem; font-weigth: bold; -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; text-align: center; width: 100%;'
  document.body.append(gameOver);
}

setTimeout(() => {

  setInterval(() => {
    if (balls.length !== 0) {
      popOut()
    } else {
      gameOver()
    }
  }, ballPopInterval);

}, timeoutCountdown);

loop();