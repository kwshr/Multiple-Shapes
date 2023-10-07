// Drawing with multiple shapes
// 
// Kawshar Patel (kwshr@my.yorku.ca)
// 09/19/2023


/**
 * Mouse and Key Mapping
 *
 * MOUSE
 * position x          : length
 * position y          : thickness and number of lines
 * drag                : draw
 * press               : draw 
 *
 * KEYS
 * 1-4                 : switch brush
 * del, backspace      : erase
 * s                   : save png
 * i/I                 : increase radius of the flower/sun/circle brush
 * d/D                 : decrease radius of the flower/sun/circle brush
 * +                   : increase line thickness
 * -                   : decrease line thickness
 * UP arrow            : increase max radius of the circle
 * Down arrow          : decrease max radius of the circle
 */


let strokeThickness= 1;
let minR = 5; 
let maxR = 10; 
let shapeType = 0;
let backgroundColor;
let x=0;
let y=0;
let rotateT = 0; 
let speed = 0.7;
let r = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
   backgroundColor = color(255);
   background(backgroundColor);
}

function draw() {
  if (mouseIsPressed && mouseButton === LEFT){
    switch(shapeType) {
      case 0:
        drawFlower();
        break;
      case 1:
        drawCloud();
        break;
      case 2:
        drawRandomCircles();
        break;
      case 3:
        drawRandomLinesWithCircles();
        break;
      case 4:
        drawSun();
        break;
      case 5:
        drawBirds();
        break;
      default:
        drawFlower();
    }
}
}
function drawFlower() {
   if (mouseIsPressed && mouseButton === LEFT) {
    x = mouseX;
    y = mouseY;
  }  
  translate(x, y); 
  rotate(radians(rotateT)); 
  let re= random(255)
  let g=random(255)
  let b=random(255)
  fill(re,g,b,100)
  noStroke()
  ellipse(0, 0, r * 1.2);
  let angleStep = 360 / 10;
  let triangleLength = 40;
  for (let i = 0; i < 10; i++) {
    let angle = radians(i * angleStep); 
    let x1 = cos(angle) * r; 
    let y1 = sin(angle) * r;
    let x2 = x1 + cos(angle) * triangleLength; 
    let y2 = y1 + sin(angle) * triangleLength;
    let x3 = x2 + cos(angle + radians(45)) * 20;
    let y3 = y2 + sin(angle + radians(45)) * 20;
    triangle(x1, y1, x2, y2, x3, y3);
  }
  rotateT += speed;
}
function drawCloud() {
  fill('darkgrey')
  let centerX = mouseX;
  let centerY = mouseY;
  ellipse(centerX, centerY, r * 1.2);
}
function drawBirds() {
  fill('darkblue')
  let centerX = mouseX;
  let centerY = mouseY;
  ellipse(centerX, centerY, 3);
}

function drawSun(){
  fill('yellow')
  let centerX = mouseX;
  let centerY = mouseY;
  ellipse(centerX, centerY, r * 1.2);
  let angleStep = 360 / 10;
  let triangleLength = 40;
  for (let i = 0; i < 10; i++) {
    let angle = radians(i * angleStep);
    let x1 = centerX + cos(angle) * r;
    let y1 = centerY + sin(angle) * r;
    let x2 = x1 + cos(angle) * triangleLength;
    let y2 = y1 + sin(angle) * triangleLength;
    let x3 = x2 + cos(angle + radians(45)) * 20;
    let y3 = y2 + sin(angle + radians(45)) * 20;
    triangle(x1, y1, x2, y2, x3, y3);
  }
}
function drawRandomCircles() {
let r= random(255)
let g=random(255)
let b=random(255)
let radius = random(minR, maxR);
noStroke()
fill(r,g,b,100)
let x=random(width)
let y=random(height)
circle(x,y,radius)
}

function drawRandomLinesWithCircles() {
    let x2 = random(width);  
    let y2 = random(height);
    let re = random(255);
    let g = random(255);
    let b = random(255);
    stroke(re,g,b,100)
    strokeWeight(strokeThickness);
    circle(windowWidth/2,windowHeight/2,5)
    line(windowWidth/2,windowHeight/2,x2,y2)
    circle(x2,y2,strokeThickness)
}

function keyReleased() {
  if (keyCode == DELETE || keyCode == BACKSPACE) 
    background(255);
  if(key === 'b' || key === 'B')
    background('lightblue');
  if (key === 'i' || key === 'I') {
    r += 10;
  } 
  if (key === 'd' || key ==='D') {
    if (r > 1) {
      r -= 10;
    }
  }
  if (key === '+') {
    strokeThickness += 1;
  } 
  if (key === '-') {
    if (strokeThickness > 1) {
      strokeThickness -= 1;
    }
  }
  if (key == 's' || key == 'S') {
    let fileName = 'image_' + year() + month() + day() + hour() + minute() + second();
    saveCanvas(fileName, 'png');
  }
  if (key === UP_ARROW) {
    maxR += 1;
  } 
  else if (key === DOWN_ARROW) {
    if (maxR > minR) {
      maxR -= 1;
    }
  }
  if (key == '1') shapeType = 0
  if (key == '2') shapeType = 1;
  if (key == '3') shapeType = 2;
  if (key == '4') shapeType = 3;
  if (key == '5') shapeType = 4;
  if (key == '6') shapeType = 5;
}

