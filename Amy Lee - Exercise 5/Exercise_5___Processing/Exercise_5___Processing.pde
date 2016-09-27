void setup() {
  size(600, 600);
  background(20, 10, 50);
}

void draw() {
  // Catberus 
  scale(0.5);
  RoboCat(0); 
  scale(0.9);
  rotate(PI/6);
  head(280, -200, color(255, 0, 0));
  rotate(-PI/3);
  head(-300, 120, color(0, 255, 0));
  scale(1);
  rotate(PI/6);
  head(30, 0, color(0, 0, 255));
  
  //RoboCat(-200);
}

void RoboCat(int xLoc) {
  //  head(head);
  /*
  // HORNS
   noStroke();
   fill(0, 0, 225);
   triangle(200, 150, 200, 50, 275, 100);
   triangle(325, 100, 400, 50, 400, 150);
   */

  // TAIL
  noFill();
  stroke(175);
  strokeWeight(4);
  bezier(50 + xLoc, 325, 150 + xLoc, 325, 75 + xLoc, 510, 220 + xLoc, 500);

  noStroke();
  fill(225, 225, 10);
  quad(20 + xLoc, 325, 40 + xLoc, 315, 50 + xLoc, 325, 40 + xLoc, 335);

  // BODY
  stroke(0);
  strokeWeight(5);
  fill(10);
  ellipse(300 + xLoc, 400, 225, 275);

  fill(100, 50);
  ellipse(300 + xLoc, 425, 180, 200);

  fill(255);
  ellipse(250 + xLoc, 400, 40, 40);
  ellipse(350 + xLoc, 400, 40, 40);

  /*
  // HEAD LIGHTNING DESIGN
   stroke(225, 225, 0);
   strokeWeight(1);
   line(290, 200, 290, 175);
   line(290, 175, 270, 155);
   line(270, 155, 290, 135);
   line(290, 135, 270, 115);
   line(310, 200, 310, 175);
   line(310, 175, 330, 155);
   line(330, 155, 310, 135);
   line(310, 135, 330, 115);
   
   // HEAD
   stroke(0);
   fill(0, 100);
   ellipse(300, 200, 250, 225);
   
   // EYES
   stroke(225, 225, 0);
   strokeWeight(5);
   fill(225, 0, 0);
   ellipse(250, 200, 50, 50);
   ellipse(350, 200, 50, 50);
   
   // MOUTH
   noStroke();
   fill(220);
   ellipse(300, 250, 80, 80);
   
   fill(200, 0, 0, 50);
   rect(280, 230, 40, 20, 7);
   
   //screw whiskers
   point(270, 240);
   point(270, 250);
   point(290, 240);
   point(290, 250);
   */

  // FEET
  fill(240);
  ellipse(250 + xLoc, 520, 60, 45);
  ellipse(350 + xLoc, 520, 60, 45);
}


void head(int xLoc, int yLoc, color horns) {
  // HORNS
  noStroke();
  fill(horns);
  triangle(200 + xLoc, 150 + yLoc, 200 + xLoc, 50 + yLoc, 275 + xLoc, 100 + yLoc);
  triangle(325 + xLoc, 100 + yLoc, 400 + xLoc, 50 + yLoc, 400 + xLoc, 150 + yLoc);

  // HEAD LIGHTNING DESIGN
  stroke(225, 225, 0);
  strokeWeight(1);
  line(290 + xLoc, 200 + yLoc, 290 + xLoc, 175 + yLoc);
  line(290 + xLoc, 175 + yLoc, 270 + xLoc, 155 + yLoc);
  line(270 + xLoc, 155 + yLoc, 290 + xLoc, 135 + yLoc);
  line(290 + xLoc, 135 + yLoc, 270 + xLoc, 115 + yLoc);
  line(310 + xLoc, 200 + yLoc, 310 + xLoc, 175 + yLoc);
  line(310 + xLoc, 175 + yLoc, 330 + xLoc, 155 + yLoc);
  line(330 + xLoc, 155 + yLoc, 310 + xLoc, 135 + yLoc);
  line(310 + xLoc, 135 + yLoc, 330 + xLoc, 115 + yLoc);

  // HEAD
  stroke(0);
  fill(0, 100);
  ellipse(300 + xLoc, 200 + yLoc, 250, 225);

  // EYES
  stroke(225, 225, 0);
  strokeWeight(5);
  fill(225, 0, 0);
  ellipse(250 + xLoc, 200 + yLoc, 50, 50);
  ellipse(350 + xLoc, 200 + yLoc, 50, 50);

  // MOUTH
  noStroke();
  fill(220);
  ellipse(300 + xLoc, 250 + yLoc, 80, 80);

  fill(200, 0, 0, 50);
  rect(280 + xLoc, 230 + yLoc, 40, 20, 7);
}