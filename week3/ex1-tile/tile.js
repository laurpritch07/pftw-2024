function setup() {
    createCanvas(200, 200)
}
/*function createTile() {
    translate(0, 0);
    fill('blue');
    rect(0, 0, 200, 200);
    stroke('white');
    strokeWeight(5);
    line(0, 0, 200, 200);
    line(200, 0, 0, 200);
    noStroke();
    fill('yellow');
    //circle(x, y, diameter);
    circle(100, 50, 50);
    circle(50, 100, 50);
    circle(150, 100, 50);
    circle(100, 150,50);
    noFill();
    stroke('purple');
    strokeWeight(5);
    circle(100,100,100);
}*/

function createTile() {
    translate(0, 0);
    fill('pink'); //BACKGROUND
    rect(0, 0, 200, 200);
    stroke('white');
    stroke('#95a382');
    strokeWeight();
    line(0, 0, 200, 200);
    line(200, 0, 0, 200);
    background('#95a382');
    ellipse(100, 100, 100, 100) //CENTER
    ellipse(0, 0, 200, 200) // TOP LEFT
    ellipse(200, 0, 200, 200) // TOP RIGHT
    ellipse(0, 200, 200, 200) // BOTTOM left
    ellipse(200, 200, 200, 200) // BOTTOM RIGHT


    noStroke();
    fill('#95a382');
    circle(200, 100, 20);
    circle(0, 100, 20);
    circle(100, 0, 20);
    circle(100, 200, 20);

    stroke('#95a382');
    strokeWeight(5);

    noStroke();
    fill('BLACK');
    circle(200, 100, 10);
    circle(0, 100, 10);
    circle(100, 0, 10);
    circle(100, 200, 10);

    stroke('#95a382');
    noFill();
    strokeWeight(5);
    ellipse(0, 0, 75, 75) // TOP LEFT
    ellipse(200, 0, 75, 75) // TOP RIGHT
    ellipse(0, 200, 75, 75) // BOTTOM left
    ellipse(200, 200, 75, 75) // BOTTOM RIGHT

    stroke('#95a382');
    noFill();
    strokeWeight(2);
    ellipse(0, 0, 100, 100) // TOP LEFT
    ellipse(200, 0, 100, 100) // TOP RIGHT
    ellipse(0, 200, 100, 100) // BOTTOM left
    ellipse(200, 200, 100, 100) // BOTTOM RIGHT

    stroke('#95a382');
    noFill();
    strokeWeight(7);
    ellipse(0, 0, 125, 125) // TOP LEFT
    ellipse(200, 0, 125, 125) // TOP RIGHT
    ellipse(0, 200, 125, 125) // BOTTOM left
    ellipse(200, 200, 125, 125) // BOTTOM RIGHT

    stroke('#95a382');
    noFill();
    strokeWeight(2);
    ellipse(0, 0, 150, 150) // TOP LEFT
    ellipse(200, 0, 150, 150) // TOP RIGHT
    ellipse(0, 200, 150, 150) // BOTTOM left
    ellipse(200, 200, 150, 150) // BOTTOM RIGHT

    stroke('#95a382');
    noFill();
    strokeWeight(5);
    ellipse(0, 0, 175, 175) // TOP LEFT
    ellipse(200, 0, 175, 175) // TOP RIGHT
    ellipse(0, 200, 175, 175) // BOTTOM left
    ellipse(200, 200, 175, 175) // BOTTOM RIGHT
    ellipse(100, 100, 75, 75) //CENTER
}

function draw() {
    createTile();
}

