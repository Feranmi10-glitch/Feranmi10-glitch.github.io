// Tic Tac Toe
// Oluwaferanmi Akinremi
// October 27th, 2023.
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let grid;
let cellsize;
const GRID_SIZE = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);

grid = generateEmptyGrid(GRID_SIZE, GRID_SIZE);

}

function draw() {
  background(220);
}
