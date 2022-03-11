function setup (){
  createCanvas (800, 600);
}

function draw(){
  background(100);
  fill(0);
  noStroke();
  rectMode(CENTER);
  rect(mouseX, mouseY, 50, 50);
}