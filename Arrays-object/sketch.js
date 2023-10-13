// Project Title
// Oluwaferanmi Akinremi
// October 13th, 2023.
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let theEllipse; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  theEllipse = spawnEllipse();
}

function draw() {
  background(220);
  displayEllipse();
}

function spawnEllipse(){
  let theEllipse = {
    x: width/2,
    y: height/2,
    radius: 25,
  };
  return theEllipse;
}

function displayEllipse(){
  fill("blue");
  circle(theEllipse.x, theEllipse.y, theEllipse.radius);
}