function setup() {
    createCanvas(displayWidth, displayHeight);
    background(250); 
  }
  
  function draw() {
    fill(30, 128, 6, 208);
    noStroke();
    if (mouseIsPressed === true) {
    ellipse(mouseX, mouseY, 100, 100);
    } 
  }

/*function setup() {
    createCanvas(800, 800);
}



function draw() {
    background(220);
    if (mouseIsPressed == true) {
        fill(0);
    } else {
        fill(255);
    }
    ellipse (mouseX, mouseY, 80, 80);
}

*/

/*
let gray = 0;
function setup() {
    createCanvas(100,100);
}

function draw() {
    background(gray);
}
function mousePressed() {
    gray += 20;
}

*/

/*
function draw() {
    if (mouseIsPressed) {
        fill(0);
    } else {
        fill(225);
    }
    ellipse (mouseX, mouseY, 80, 80);
}
*/

/*
function draw() {
    background(255);
    frameRate(12);
    text(pmouseX - mouseX, 0, height/4);
}
*/

/*
function draw() {
    background(204);
    line (mouseX,mouseY,pmouseX,pmouseY);
}
*/

