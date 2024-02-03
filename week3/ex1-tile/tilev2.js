function setup() {
    createCanvas(400, 400);
    strokeWeight(2);
    strokeCap(SQUARE);
}

function draw() {
    background(220);

fill(255);
stroke(0);
strokeWeight(2);
ellipse(200, 200, 300, 300);

noFill();
strokeWeight(32);


stroke(255, 0, 0);
arc(200, 0, 150, 150, 0, PI);

stroke(255, 0, 0);
arc(0, 0, 150, 150, 0, PI / 2);

stroke(255, 0, 0);
arc(0, 0, 150, 150, 0, 270);



stroke(0, 255, 0);
arc(100, 100, 150, 150, 0, PI * 2);
}