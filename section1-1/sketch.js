function setup() {
  createCanvas(128,128);
}

function draw() {
  background(0);
  strokeWeight(4);
  fill(255, 1, 12);
  triangle(12,120,116,120,116,10);
  fill(94, 185, 84);
  triangle(0,108,106,108,106,0);
  fill(25,230,222);
  textSize(32);
  textFont("serif");
  text("48", 68, 100);
}
