// Project Title
// Oluwaferanmi Akinremi
// October 13th, 2023.
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let ellipseArray = []; // array for the ellipse
let angle = 0;//variable to calculate the angle for rotation and translation
let backgroundSound;// variable for background sounds

//function to create background sound
function preload(){
  backgroundSound= loadSound("TylerSong3_Normal.wav");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  let theEllipse = spawnEllipse();
  ellipseArray.push(theEllipse);
}

function draw() {
  background("black");
  displayEllipse();
}

// function to make the ellipse
function spawnEllipse(){ 
  let theEllipse = {
    x: width/2,
    y: height/2,
    radius: 10,
    angle: 0,
  };
  return theEllipse;
}

// function to diplay ellipse
function displayEllipse(){
  for(let i = 0;i < ellipseArray.length;i++){
    let theEllipse = ellipseArray[i];
    noFill();
    ellipse(theEllipse.x, theEllipse.y, theEllipse.radius/2);
  }

  // for loop to make the illusion according to the windowsize
  console.log(ellipseArray.length);
  for(let i = 20; i < windowWidth+windowHeight; i += 10){
    push();
    translate(width/2, height/2);
    rotate(i + angle * 2);
    noFill();
    stroke(20, i*100, i-100);
    ellipse(0, 0, i+20, i);
    pop();
    angle += 0.003;
  }

  if (!backgroundSound.isPlaying()){
    backgroundSound.loop();
  }
}