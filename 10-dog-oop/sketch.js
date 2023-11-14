// Dog OOp Demo

class Dog {
  constructor(name, color, breed, age , size){
    this.name = name;
    this.color = color;
    this. breed = breed;
    this.age = age;
    this.size = size;
  }

  bark(){
    console.log("Arf! says" + this.name);
  }
}

let spot =  new Dog("Spot","black", "poodle", 3, "smallish");
let rover = new Dog("Rover", "white", "German Shepherd", 5, "biggish");

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  spot.bark();
  rover.bark();
}
