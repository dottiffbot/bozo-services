let canvas;
let r = 255;
let g = 255;
let b = 255;
let diameter = 32;

function setup (){
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style("z-index", "-2");
  background(0);
}

function draw(){
  fill(r, g, b);
  noStroke()
  circle(mouseX, mouseY, diameter);

}

function mousePressed(){
   r = random(100, 255);
   g = random(100, 255);
   b = random(100, 255);
  }

function keyPressed(){
  background(0);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
