// Project Title
// Oluwaferanmi Akinremi
// October 13th, 2023.
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let ellipseArray = []; 
let angle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  let theEllipse = spawnEllipse();
  ellipseArray.push(theEllipse);
}

function draw() {
  background("black");
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
    fill("blue")
      ellipse(theEllipse.x, theEllipse.y, theEllipse.radius/2);
    }
  for(let i = 20; i < 5000; i += 20){
    push()
    translate(width/2, height/2)
    rotate(i + angle * 2)
    noFill()
    stroke(20, i*100, i-100)
    ellipse(0, 0, i+20, i)
    pop()
   angle += 0.003
    }
  }