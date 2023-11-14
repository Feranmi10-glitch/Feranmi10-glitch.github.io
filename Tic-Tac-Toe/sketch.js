// Tic Tac Toe
// Oluwaferanmi Akinremi
// October 27th, 2023.
//
// Extra for Experts:
// -I think the only thing I improved on was importing a font for this project.

let grid;
let cellSize;
const GRID_SIZE = 3;
let xShape;
let oShape;
let turn = true;
let state = "game play";
let backgroundSound;
let soundEffect;


function preload(){
  xShape = loadImage("x tictactoe.png");
  oShape = loadImage("o tictactoe.png");
  titleFont = loadFont("PixelifySans-Bold.ttf");
  backgroundSound = loadSound("WereWasI.ogg");
  soundEffect = loadSound("click_sound_2.mp3");
  backgroundSound.setVolume(0.5);
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  if (height > width) {
    cellSize = width/GRID_SIZE;
  }
  else {
    cellSize = height/GRID_SIZE;
  }
  grid = generateEmptyGrid(GRID_SIZE, GRID_SIZE);
}

function draw() {
  if (state === "start screen") {
    startScreen();
  }
  if (state === "end screenX"){
    endScreenX();
  } 
  if (state === "end screenO"){
    endScreenO();
  }
  else if (state === "game play") {
    displayGrid();
    playGame();
  }
}

function startScreen() {
  background("white");
  fill("red");
  textSize(70);
  textAlign(CENTER);
  textFont(titleFont);
  text("TIC-TAC-TOE", width / 2, height / 2);
  textSize(40);
  text("Press SPACE to START", width / 2, height-200);
}

function mousePressed(){
  let y = Math.floor(mouseY/cellSize);
  let x = Math.floor(mouseX/cellSize);
  if (grid[y][x] === 0){
    if(turn){
      grid[y][x] = 1;
    } 
    else {
      grid[y][x] = 2;
    }
    turn = !turn;
  } 
  soundEffect.play();
  if(!backgroundSound.isPlaying()){
    backgroundSound.loop();
  }
}

function keyTyped() {
  if (key === "e") {
    grid = generateEmptyGrid(GRID_SIZE, GRID_SIZE);
  }
}

function displayGrid() {
  for (let y = 0; y < GRID_SIZE; y++) {
    for (let x = 0; x < GRID_SIZE; x++) {
      if (grid[y][x] === 0) {
        fill("white");
      }
      if (grid[y][x] === 1) {
        fill("black");
        rect(x*cellSize, y*cellSize, cellSize, cellSize);
      }
      if (grid[y][x] === 1) {
        // fill("black");  
        // rect(x*cellSize, y*cellSize, cellSize, cellSize);
        fill(255, 255, 255, 255);
        rect(x*cellSize, y*cellSize, cellSize, cellSize);
        image(xShape, x*cellSize, y*cellSize, cellSize, cellSize);
      }
      if (grid[y][x] === 2) {
        // fill("black");  
        // rect(x*cellSize, y*cellSize, cellSize, cellSize);
        fill(255, 255, 255, 255);
        rect(x*cellSize, y*cellSize, cellSize, cellSize);
        image(oShape, x*cellSize, y*cellSize, cellSize, cellSize);
      }
    }
  }
}

function playGame(){
  if (grid[0][0]===1 && grid[0][1]===1 && grid[0][2] === 1){
    state = "end screenX";
  }
  if (grid[0][0]===1 && grid[1][0]===1 && grid[2][0] === 1){
    state = "end screenX";
  }
  if (grid[2][0]===1 && grid[2][1]===1 && grid[2][2] === 1){
    state = "end screenX";
  }
  if (grid[0][2]===1 && grid[1][2]===1 && grid[2][2] === 1){
    state = "end screenX";
  }
  if (grid[1][0]===1 && grid[1][1]===1 && grid[1][2] === 1){
    state = "end screenX";
  }
  if (grid[0][1]===1 && grid[1][1]===1 && grid[2][1] === 1){
    state = "end screenX";
  }
  if (grid[0][0]===1 && grid[1][1]===1 && grid[2][2] === 1){
    state = "end screenX";
  }
  if (grid[2][0]===1 && grid[1][1]===1 && grid[0][2] === 1){
    state = "end screenX";
  }
  if (grid[0][0]===2&& grid[0][1]===2 && grid[0][2] === 2){
    state = "end screenO";
  }
  if (grid[0][0]===2 && grid[1][0]===2 && grid[2][0] === 2){
    state = "end screenO";
  }
  if (grid[2][0]===2 && grid[2][1]===2 && grid[2][2] === 2){
    state = "end screenO";
  }
  if (grid[0][2]===2 && grid[1][2]===2 && grid[2][2] === 2){
    state = "end screenO";
  }
  if (grid[1][0]===2 && grid[1][1]===2 && grid[1][2] === 2){
    state = "end screenO";
  }
  if (grid[0][1]===2 && grid[1][1]===2 && grid[2][1] === 2){
    state = "end screenO";
  }
  if (grid[0][0]===2 && grid[1][1]===2 && grid[2][2] === 2){
    state = "end screenO";
  }
  if (grid[2][0]===2 && grid[1][1]===2 && grid[0][2] === 2){
    state = "end screenO";
  }
}

function generateEmptyGrid(cols, rows) {
  let randomArray = [];
  for (let y = 0; y < cols; y++) {
    randomArray.push([]);
    for (let x = 0; x < rows; x++) {
      randomArray[y].push(0);
    }
  }
  return randomArray;
}

function endScreenX(){
  background("white");
  fill("black");
  textSize(70);
  textFont(titleFont);
  textAlign("center");
  text("X WINS", width/2,height/2 );
}

function endScreenO(){
  background("white");
  fill("black");
  textSize(70);
  textFont(titleFont);
  textAlign("center");
  text("O WINS", width/2,height/2 );
}
