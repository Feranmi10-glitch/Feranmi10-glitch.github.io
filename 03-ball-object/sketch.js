// Ball Object Notation Demo
// Oct 5, 2023

let theBall = {
  x: 100, 
  y: 100,
  radius: 25,
  r:255,
  g:0,
  b:0,
  dx:-4,
  dy:3,
};

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  moveBall();
  phaseBall();
  displayBall();
}

function moveBall(){
  theBall.x+=theBall.dx;
  theBall.y+=theBall.dy;
}

function phaseBall(){
  if (theBall.y > windowHeight){
    theBall.y = 0;
  }
  else if (theBall.y < windowHeight){
    theBall.y = 0+theBall.radius;
  }
  if (theBall.x > windowWidth){
    theBall.x = 0;
  }
  else if (theBall.x < windowWidth){
    theBall.x = 0+theBall.radius;
  }
}
function displayBall() {
  fill(theBall.r, theBall.g, theBall.b);
  circle(theBall.x, theBall.y, 2*theBall.radius);
}