// Exercise % - Amy Lee

/*
float angle = 0.0;
 int angleDirection = 1;
 int speed = 1;
 */

var y = 300;
var yspeed = 3;
var x = 0;
var xspeed = 4;

function setup() {
  createCanvas(1000, 600);
  background(20, 10, 50);
}

function draw() {
  background(20, 10, 50);
  // Catberus 
  scale(0.9);
  RoboCat(0 + x, 0, 0); 
  tail(0, 0);
  scale(0.9);
  rotate(PI/6);
  head(280 + x, -200, color(255, 0, 0), 0);
  rotate(-PI/3);
  head(-300 + x, 120, color(0, 255, 0), 0);
  scale(1);
  rotate(PI/6);
  head(30 + x, 0, color(0, 0, 255), 0);
  x = x + xspeed;
  if ((x<200) || (x>260)){
    xspeed *= -1;
  }
  

  // Insectocat
  scale(0.3);
  translate(1300, 1500);
  tail(mouseX, mouseY);
  tail(mouseX + 50, mouseY - 50);
  tail(mouseX + 30, mouseY - 20);
  RoboCat(mouseX, mouseY, color(47, 255, 76));
  head(mouseX, mouseY, color(200, 96, 255), color(47, 255, 76));
  
    // Abominable Snowcat
  push();
  scale(5);
  RoboCat(50, 0, 255);
  head(50, 50, 255, 255);
  tail(50, 50);
  pop();

  // Timmy
  scale(1.33);
  translate(1000, 150);
  SMbody(0, -10, color(232, 100, 23));
  SMarms(-100, -10, color(23, 155, 255));
  scale(3.5);
  translate(0, -180);
  SMhead(0, -10);

  // Shepard
  scale(0.5);
  SMbody(400, y, color(24, 30, 115));
  SMarms(300, y, color(47, 255, 76));
  SMhead(400, y - 100);
  y = y + yspeed;
  if ((y < 300) || (y > height)) {
    yspeed *= -1;
  }
  
    // ezhu 1
  ezhu(color(179, 35, 13));
  ezhuMouth(75 - mouthy);
  mouthy = mouthy + yspeed;
  if ((y<0) || (y > 75)){
    var mouthy = 0
    yspeed *= -1;
}
  /*
// tail wag
   rotate(angle);
   tail(0);
   angle += speed + angleDirection;
   if ((angle > PI - QUARTER_PI) || (angle < 0)) {
   angleDirection *= -1;\
   }
   // ^^^why does this keep looping around
   // I tried to ustilize something similar to the demo, but I got confused
   */
}



// SAMIR'S CODE
function SMhead(xLoc, yLoc) {
  ellipseMode(CENTER);
  rectMode(CENTER);
  /*
      // body
   fill(232, 100, 23);
   ellipse(width / 2, height / 2, 200, 200);
   */
  // head
  fill(23, 155, 255);
  rect(xLoc, 110 + yLoc, 50, 90);

  // eye
  fill(255);
  ellipse(xLoc, 90 + yLoc, 25, 20);
  fill(0);
  ellipse(xLoc, 90 + yLoc, 10, 8.5);

  // nose
  stroke(0, 2550, 200);
  line(xLoc, 110 + yLoc, xLoc + 5, 125 + yLoc);

  // mouth
  noStroke();
  fill(127, 0, 0);
  ellipse(xLoc, 140 + yLoc, 20, 12);
  /*
    // arms
   stroke(23, 155, 255);
   line(150, height / 2, 120, 200);
   line(350, height / 2, 380, 200);
   */
}
function SMbody(xLoc, yLoc, bodycolor) {
  // body
  fill(bodycolor);
  ellipse(xLoc, yLoc, 200, 200);
}

function SMarms(xLoc, yLoc, armcolor) {
  // arms
  stroke(armcolor);
  line(xLoc, yLoc, xLoc - 30, yLoc - 300);
  line(xLoc + 200, yLoc, xLoc + 260, yLoc - 300);
}







// AMY'S CODE

function RoboCat(xLoc, yLoc, bodycolor) {
  rectMode(CORNER);
  //  head(head);
  /*
  // HORNS
   noStroke();
   fill(0, 0, 225);
   triangle(200, 150, 200, 50, 275, 100);
   triangle(325, 100, 400, 50, 400, 150);
   */
  /*
  // TAIL
   noFill();
   stroke(175);
   strokeWeight(4);
   bezier(50 + xLoc, 325, 150 + xLoc, 325, 75 + xLoc, 510, 220 + xLoc, 500);  

  noStroke();
  fill(225, 225, 10);
  quad(20 + xLoc, 325, 40 + xLoc, 315, 50 + xLoc, 325, 40 + xLoc, 335);
*/
  // BODY
  stroke(0);
  strokeWeight(5);
  fill(bodycolor);
  //fill(10 + bodycolor);
  ellipse(300 + xLoc, 400 + yLoc, 225, 275);

  fill(bodycolor, 50);
  //fill(100 + bodycolor, 50);
  ellipse(300 + xLoc, 425 + yLoc, 180, 200);

  //fill(255);
  fill(255);
  ellipse(250 + xLoc, 400 + yLoc, 40, 40);
  ellipse(350 + xLoc, 400 + yLoc, 40, 40);

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
  ellipse(250 + xLoc, 520 + yLoc, 60, 45);
  ellipse(350 + xLoc, 520 + yLoc, 60, 45);
}


function head(xLoc, yLoc, horncolor, headcolor) {
  // HORNS
  noStroke();
  fill(horncolor);
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
  fill(headcolor, 100);
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

function tail(xLoc, yLoc) {
  // TAIL
  noFill();
  stroke(175);
  strokeWeight(4);
  bezier(50 + xLoc, 325 + yLoc, 150 + xLoc, 325 + yLoc,
         75 + xLoc, 510 + yLoc, 220 + xLoc, 500 + yLoc);
  
  noStroke();
  fill(225, 225, 10);
  quad(20 + xLoc, 325 + yLoc, 40 + xLoc, 315 + yLoc,
       50 + xLoc, 325 + yLoc, 40 + xLoc, 335 + yLoc);
}






// EZHU156'S CODE
function ezhu(bodycolor) {
  //legs
  for (var l = 240; l <= 340; l += 100) {
    var y = 425
    noStroke();
    fill(255, 165, 0);
    rect(l, y, 25, 75);
  }

  //top horn
  noStroke();
  fill(255, 246, 215);
  triangle(292, 150, 302, 100, 312, 150);

  //left horn
  noStroke();
  fill(255, 246, 215);
  triangle(252, 180, 258, 120, 272, 170);

  //right horn
  noStroke();
  fill(255, 246, 215);
  triangle(332, 170, 347, 120, 352, 180);

  //left arm
  stroke(255, 151, 148);
  strokeWeight(20);
  noFill();
  arc(390, 370, 67, 200, 0, PI / 2, OPEN);

  //right arm
  stroke(255, 151, 148);
  strokeWeight(20);
  noFill();
  arc(210, 370, 67, 200, PI / 2, PI, OPEN);

  // Body
  noStroke();
  fill(bodycolor);
  ellipse(300, 300, 300, 300);

  // Left and right eyes
  for (var e = 220; e <= 380; e += 160) {
    var EYEy = 250;
    noStroke();
    fill(255);
    ellipse(e, y, 40, 40);
  }

  // Left and right pupils
  for (var p = 220; p <= 380; p += 160) {
    var Py = 257;
    noStroke();
    fill(0, 0, 255);
    ellipse(p, y, 20, 20);
  }

  //one eye
  noStroke();
  fill(255);
  ellipse(300, 250, 100, 120);

  // one eye pupil   
  // quad(330, 250, 300, 280, 280, 250, 300, 220);
  noStroke();
  fill(0, 0, 255);
  quad(332, 250, 300, 290, 267, 250, 300, 210);

  // feet
  for (var f = 270; f <= 370; f += 100) {
    var Fy = 500;
    noStroke();
    fill(136, 236, 155);
    quad(f, y, f - 35, y, f - 45, y + 30, f + 10, y + 30);
  }
}


function ezhuMouth(ysize) {
  // Mouth
  noStroke();
  fill(0);
  rect(231, 340, 141, ysize);

  //top teeth
  for (var t = 247; t <= 337; t += 30) {
    var y = 340;
    noStroke();
    fill(255);
    triangle(t, y, t + 10, y + 25, t + 20, y)
  }

  //bottom teeth
  for (var t = 232; t <= 352; t += 30) {
    var y = 415;
    noStroke();
    fill(255);
    triangle(t, y, t + 10, y - 25, t + 20, y)
  }
}
