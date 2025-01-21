let color = "red";

let colors = ["red", "green", "yellow","lightblue","lightpink","orange"];


function setup() {
  createCanvas(700, 700);
  background(14, 25, 150);
  
  eyes(350,350);
}


function draw() {

}
function eyes (x,y) {

  let eyeColor = colors [int(random(0,    colors.length))];
  //left eye
  fill("white");
  ellipse(x-170,x-25,220,108);
  fill(eyeColor);
  ellipse(x-170,y-19,80,80);
  fill("black");
  ellipse(x-170,y-19,40,40);

  //right eye
  fill("white");
  ellipse(x+175,y-25,220,108);
  fill(eyeColor);
  ellipse(x+170,y-19,80,80);
  fill("black");
  ellipse(x+170,y-19,40,40);
}