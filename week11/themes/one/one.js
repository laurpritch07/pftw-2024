//Rotate, push, pop
// map (mopuseX, min current range, max furrent range, min new range,)

let r1;
let r2;

let c; //color
let sat;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    colorMode(HSB)
}

function draw() {
    background(30);
   
    c = map(mouseX, 0, width, 0, 360);
    sat = map(mouseY, 0, height, 20, 100);
    r1 = map(mouseX, 0, height, 20, 270);
    r2 = map(mouseY, 0, height, 20, 90);


    rectMode(CENTER)

    push();
    noStroke();
    fill(c, sat, 20);
    translate(width/2, height/2)
    rotate(radians(-r1));
    square(0, 0, 600);
    pop();

    push();
    noStroke();
    fill(c, sat, 100);
    translate(width/2, height/2)
    rotate(radians(r1));
    square(0, 0, 500);
    pop();


    push();
    fill(c, sat, 20);
    translate(width/2, height/2);
    rotate(radians(-r2));
    square(0, 0, 300);
    pop();

    push();
    noStroke();
    translate(width/2, height/2);
    fill(60, 60, 60);
    square(0, 0, 50);
    pop();

    r1 += 1;
    r2 += 2;
}