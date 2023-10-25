// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let grid;
const GRID_SIZE = 15;
let cellSize;

function setup() {
  createCanvas(windowWidth, windowHeight);

  if (height>width){
    cellSize = width/GRID_SIZE;
  }
  if (width>height){
    cellSize = height/GRID_SIZE;
  }


  grid = generateEmptyGrid(GRID_SIZE, GRID_SIZE);
}

function draw() {
  background(220);
  displayGrid();
}

function mousePressed(){
  let y = Math.floor(mouseY/cellSize);
  let x = Math.floor(mouseX/cellSize);

  toggleCell(x, y);
  toggleCell(x, y-1);
  toggleCell(x, y+1);
  toggleCell(x-1, y);
  toggleCell(x+1, y);
}

function toggleCell(x, y){
  if(x >= 0 && x < GRID_SIZE - 1 && y >= 0 && y < GRID_SIZE){
    if (grid[y][x] === 0){
      grid[y][x] = 1;
    }
    else if (grid[y][x] === 1){
      grid[y][x] = 0;
    }
  }
}



function displayGrid(){
  for (let y = 0;y < GRID_SIZE; y++){
    for (let x = 0; x < GRID_SIZE; x++){
      if (grid[y][x] === 0){
        fill("white");
      }
      else if (grid[y][x] === 1){
        fill("black");
      }
      rect(x*cellSize, y*cellSize, cellSize, cellSize);

    }
  }
}

function generateRandomGrid(cols,rows){
  let newGrid = [];
  for (let y = 0; y < rows; y++){
    newGrid.push([]);
    for(let x = 0; x < cols; x++){
      if (random(100)< 50){
        newGrid[y].push(0);
      }
      else{
        newGrid[y].push(1);
      }
    }
  }
  return newGrid;
}

function generateEmptyGrid(cols, rows) {
  let newGrid = [];
  for (let y = 0; y < cols; y++) {
    newGrid.push([]);
    for (let x = 0; x < rows; x++) {
      newGrid[y].push(0);
    }
  }
  return newGrid;
}