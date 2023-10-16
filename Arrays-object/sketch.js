// Project Title
// Oluwaferanmi Akinremi
// October 13th, 2023.
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let ellipseArray = []; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  let theEllipse = spawnEllipse();
  ellipseArray.push(theEllipse);
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
  for(let i = 0;i < ellipseArray.length;i++){
    let theEllipse = ellipseArray[i];
    for(let i = 0;i < 10 ;i++){
      fill("white");
      ellipse(theEllipse.x, theEllipse.y, i*theEllipse.radius);
    }
  }
}