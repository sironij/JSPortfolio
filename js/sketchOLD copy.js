 function setup() {
  createCanvas(500, 500, WEBGL);
}

function draw() {
  background(255);
  noFill();
  stroke('rgb(0,0,0)');
  strokeWeight(1);
  push();
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(200);
}
