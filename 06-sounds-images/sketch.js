// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let mario;
let coinSound;
let backgroundSound;

function preload(){
  mario = loadImage("mario.png");
  coinSound = loadSound("retro_coin_02.ogg");
  backgroundSound = loadSound("battleThemeA.mp3");
  backgroundSound.setVolume(0.5);
  coinSound(1.0);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
}

function draw() {
  background(220);

  image(mario, mouseX, mouseY);
}

function mousePressed(){
  coinSound.play();
}

if(!backgroundSound.isPlaying()){
  backgroundSound.loop();
}