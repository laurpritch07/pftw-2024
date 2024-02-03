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
    arc(0, 0, 200, 200, 0, PI) // TOP LEFT
    arc(200, 200, 200, 200, 90, PI/2) // BOTTOM RIGHT
    arc(200, 0, 200, 200, 0, PI) // TOP RIGHT
    arc(0, 200, 200, 200, 90, PI/2) // BOTTOM LEFT


    stroke('#95a382');
    strokeWeight(5);
    arc(0, 0, 200, 200, 0, PI) // TOP LEFT
    arc(200, 200, 200, 200, 90, PI/2) // BOTTOM RIGHT
    arc(200, 0, 200, 200, 0, PI) // TOP RIGHT
    arc(0, 200, 200, 200, 90, PI/2) // BOTTOM LEFT

    stroke('#95a382');
    strokeWeight(5);
    arc(0, 0, 180, 180, 0, PI) // TOP LEFT
    arc(200, 200, 180, 180, 90, PI/2) // BOTTOM RIGHT
    arc(200, 0, 180, 180, 0, PI) // TOP RIGHT
    arc(0, 200, 180, 180, 90, PI/2) // BOTTOM LEFT

    stroke('#95a382');
    strokeWeight(3);
    arc(0, 0, 110, 110, 0, PI) // TOP LEFT
    arc(200, 200, 110, 110, 90, PI/2) // BOTTOM RIGHT
    arc(200, 0, 110, 110, 0, PI) // TOP RIGHT
    arc(0, 200, 110, 110, 90, PI/2) // BOTTOM LEFT

    stroke('#95a382');
    strokeWeight(3);
    arc(0, 0, 100, 100, 0, PI) // TOP LEFT
    arc(200, 200, 100, 100, 90, PI/2) // BOTTOM RIGHT
    arc(200, 0, 100, 100, 0, PI) // TOP RIGHT
    arc(0, 200, 100, 100, 90, PI/2) // BOTTOM LEFT

    stroke('#95a382');
    strokeWeight(3);
    arc(0, 0, 50, 50, 0, PI) // TOP LEFT
    arc(200, 200, 50, 50, 90, PI/2) // BOTTOM RIGHT
    arc(200, 0, 50, 50, 0, PI) // TOP RIGHT
    arc(0, 200, 50, 50, 90, PI/2) // BOTTOM LEFT

    stroke('#95a382');
    strokeWeight(3);
    arc(0, 0, 40, 40, 0, PI) // TOP LEFT
    arc(200, 200, 40, 40, 90, PI/2) // BOTTOM RIGHT
    arc(200, 0, 40, 40, 0, PI) // TOP RIGHT
    arc(0, 200, 40, 40, 90, PI/2) // BOTTOM LEFT

}

function draw() {
    createTile();
}

