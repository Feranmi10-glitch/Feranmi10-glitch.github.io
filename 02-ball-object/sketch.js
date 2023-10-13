// Ball Object Notation Demo
// Oct 5, 2023

let theBall;

function setup() {
  createCanvas(windowWidth, windowHeight);
  theBall = spawnBall();
}

function keyTyped(){
  if (key === " "){
    theBall = spawnBall();
  }
}
function draw() {
  background(220);
  moveBall();
  phaseBall();
  displayBall();
}
function spawnBall(){
  let theBall = {
    x: random(width), 
    y: random(height),
    radius: random(15,30),
    r: random(255),
    g: random(255),
    b: random(255),
    dx: random(-5,5),
    dy: random(-5,5),
  };
  return theBall;
}
function moveBall(){
  theBall.x+=theBall.dx;
  theBall.y+=theBall.dy;
}

function phaseBall(){
  // off the bottom
  if (theBall.y - theBall.radius> windowHeight){
    theBall.y = 0;
  }
  // off the top
  else if(theBall.y < 0-theBall.radius){
    theBall.y = height + theBall.radius;
  }
  //off the right side
  if (theBall.x - theBall.radius> windowWidth){
    theBall.x = 0;
  }
  // off the left side
  else if(theBall.x < 0-theBall.radius){
    theBall.x = width + theBall.radius;
  }

  console.log(theBall.x, theBall.y);
}
function displayBall() {
  fill(theBall.r, theBall.g, theBall.b);
  circle(theBall.x, theBall.y, 2*theBall.radius);
}