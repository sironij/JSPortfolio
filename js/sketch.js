var cols, rows;
var scl = 15;
var w = window.innerWidth *2;
var h = window.innerHeight *2;

var flying = 1;

var terrain = [];

function setup() {
  canvas=createCanvas(w, h, WEBGL);
  cols = w / scl;
  rows = h / scl;

  for (var x = 0; x < cols; x++) {
    terrain[x] = [];
    for (var y = 0; y < rows; y++) {
      terrain[x][y] = 0; //specify a default value for now
    }
  }
}

function draw() {


  rotateY(mouseX/4 * 0.0002);
  rotateX(mouseY * 0.0003);

// rotateX(frameCount * 0.004);
// rotateY(frameCount * 0.001);

  flying -= 0.1;
  var yoff = flying;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      terrain[x][y] = map(noise(xoff, yoff), 0, 1, -100, 100);
      xoff += 0.2;
    }
    yoff += 0.2;
  }


  background(255);
  translate(0, 50);
  rotateX(PI / 3);
  fill(200, 200, 200, 100);
  translate(-w / 2, -h / 2);
  for (var y = 0; y < rows - 1; y++) {
    beginShape(TRIANGLE_STRIP);
    stroke('blue');
    strokeWeight(0.5);
    for (var x = 0; x < cols; x++) {
      vertex(x * scl, y * scl, terrain[x][y]);
      vertex(x * scl, (y + 1) * scl, terrain[x][y + 1]);
    }
    endShape();
  }
}


window.onresize = function() {
  // assigns new values for width and height variables
  w = window.innerWidth;
  h = window.innerHeight;
  canvas.size(w,h);
}
