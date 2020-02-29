var g4
var a4
var b4

var c5
var d5
var e5
var f5
var g5
var a5
var b5
var c6
var d6
var e6
var f6

var fs4
var gs4
var as4
var cs5
var ds5
var fs5
var gs5
var as5
var cs6
var ds6


function setup() {
  createCanvas(480, 300);
  frameRate(15);
  colorMode(HSB, 100);
}

function printWKey(x,y) {
  fill(255);
  rect(x ,y , 30, 100);
}

function printBKey(x,y) {
  fill(0);
  rect(x, y, 20, 60);
}

function preload() {
  soundFormats("wav");
  
  g4 = loadSound("g4.wav");
  a4 = loadSound("a4.wav");
  b4 = loadSound("b4.wav");
  
  c5 = loadSound("c5.wav");
  d5 = loadSound("d5.wav");
  e5 = loadSound("e5.wav");
  f5 = loadSound("f5.wav");
  g5 = loadSound("g5.wav");
  a5 = loadSound("a5.wav");
  b5 = loadSound("b5.wav");
  c6 = loadSound("c6.wav");
  d6 = loadSound("d6.wav");
  e6 = loadSound("e6.wav");
  f6 = loadSound("f6.wav");
  
  fs4 = loadSound("f#4.wav");
  gs4 = loadSound("g#4.wav");
  as4 = loadSound("a#4.wav");
  cs5 = loadSound("c#5.wav");
  ds5 = loadSound("d#5.wav");
  fs5 = loadSound("f#5.wav");
  gs5 = loadSound("g#5.wav");
  as5 = loadSound("a#5.wav");
  cs6 = loadSound("c#6.wav");
  ds6 = loadSound("d#6.wav");
}

function keyPressed(){
  
  fill(random(100), 90,random(80,100));
  noStroke();
  ellipse(random(10, 290), random(10,150), random(40,80));
  
   // if (key === 'tab')
   //  g4.play();
   if (key === 'q')
    a4.play();

  if (key === 'w')
    b4.play();
  //text("B", random(width), random(height));
  
  if (key === 'e')
    c5.play();
  if(key ==='r')
    d5.play()
  if(key ==='t')
    e5.play();
  if(key ==='y')
    f5.play();
  if(key ==='u')
    g5.play();
  if(key ==='i')
    a5.play();
  if(key ==='o')
    b5.play();
  if(key ==='p')
    c6.play();
  if(key ==='[')
    d6.play()
  if(key ===']')
    e6.play()
  // if(key ==='\')
  //   f6.play();
  
  if (key === '`')
    fs4.play();
  if (key === '1')
    gs4.play();
  if (key === '2')
    as4.play();
  if (key === '3')
    c5.play();
  if (key === '4')
    cs5.play();
  if (key === '5')
    ds5.play();
  if (key === '6')
    f5.play();
  if (key === '7')
    fs5.play();
  if (key === '8')
    gs5.play();
  if (key === '9')
    as5.play();
  if (key === '0')
    c6.play();
  if (key === '-')
    cs6.play();
  if (key === '=')
    ds6.play(); 
}


function draw() {
  background(100,0,50,30);
  //fill(255)
  
  stroke(3);
  
  //printWKey(10, 190);
  printWKey(40, 190);
  
    printWKey(70, 190);
  fill(0);
  text("A", 80, 265);
  text("q", 80, 280);
    printWKey(100, 190);
  fill(0);
  text("B", 110, 265);
  text("w", 110, 280);
    printWKey(130, 190);
  fill(0);
  text("C", 140, 265);
  text("e", 140, 280);
    printWKey(160, 190);
  fill(0);
  text("D", 170, 265);
  text("r", 170, 280);
    printWKey(190, 190);
  fill(0);
  text("E", 200, 265);
  text("t", 200, 280);
    printWKey(220, 190);
  fill(0);
  text("F", 230, 265);
  text("y", 230, 280);
    printWKey(250, 190);
  fill(0);
  text("G", 260, 265);
  text("u", 260, 280);
    printWKey(280, 190);
  fill(0);
  text("A", 290, 265);
  text("i", 290, 280);
    printWKey(310, 190);
  fill(0);
  text("B", 320, 265);
  text("o", 320, 280);
    printWKey(340, 190);
  fill(0);
  text("C", 350, 265);
  text("p", 350, 280);
    printWKey(370, 190);
  fill(0);
  text("D", 380, 265);
  text("[", 380, 280);
    printWKey(400, 190);
  fill(0);
  text("E", 410, 265);
  text("]", 410, 280);
  //   printWKey(430, 190);
  // fill(0);
  // text("F", 440, 265);
  // text("", 260, 280);
  
    printBKey(30,190);
  text("F#", 35, 188);
  fill(255);
  text("`", 35, 210);
    printBKey(60,190);
  text("G#", 65, 188);
  fill(255);
  text("1", 65, 210);
    printBKey(90,190);
  text("A#", 95, 188);
  fill(255);
  text("2", 95, 210);
  
    printBKey(150,190);
  text("C#", 155, 188);
  fill(255);
  text("4", 155, 210);
    printBKey(180,190);
  text("D#", 185, 188);
  fill(255);
  text("5", 185, 210);
  
    printBKey(240,190);
  text("F#", 245, 188);
  fill(255);
  text("7", 245, 210);
    printBKey(270,190);
  text("G#", 275, 188);
  fill(255);
  text("8", 275, 210);
    printBKey(300,190);
  text("F#", 305, 188);
  fill(255);
  text("9", 305, 210);
  
    printBKey(360,190);
  text("C#", 365, 188);
  fill(255);
  text("-", 365, 210);
    printBKey(390,190);
  text("D#", 395, 188);
  fill(255);
  text("=", 395, 210);
  //printBKey(420,190);
}

