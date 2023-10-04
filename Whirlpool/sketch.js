// Oluwaferanmi Akinremi
// October 2
// Extra for experts:
//Studied about map and different textstyles and fonts
  
// global variables
let scene = 0;
let X;
let Y;
let xGrid;
let yGrid;
let grid;
let i = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // helps create trails
  background(10, 10);
  startScreen();
}

// creating a start screen
function startScreen() {
  switch (scene) {
  case 0:
    background("white");
    fill("red");
    textSize(70);
    textAlign(CENTER);
    textStyle("bolditalic");
    text("WHIRLPOOL", width / 2, height / 2);
    textSize(40);
    text("Press SPACE to START", width / 2, height-200);
    if (key === " ") {
      scene++;
    }
    break;
  case 1:
    multipleEllipse();
    break;
  }
}

function multipleEllipse() {
  noStroke();
  fill("blue");
  // creating a x and y grid for the ellipses
  for (let x = 0; x <= width; x = x + 30) {
    for (let y = 0; y <= height; y = y + 30) {
      // using the mouse to move the grids
      xGrid = map(mouseX, 0, width, PI, 6 * PI);
      yGrid = map(mouseY, 0, height, PI, 6 * PI);
      grid = xGrid * (x / width) + yGrid * (y / height);

      // each ellipse moves in a circle
      X = x + 20 * cos(2 * PI * i + grid);
      Y = y + 20 * sin(2 * PI * i + grid);

      // draw ellipse
      ellipse(X, Y, 10);
    }
  }
  // update time
  i = i + 0.01;
}
