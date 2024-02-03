function setup() {
    createCanvas(600, 600);
}

function createTile(originX, originY, primaryColor, secondaryColor, arcStrokeColor) {
    translate(originX, originY);
    fill('secondaryColor');
    rect(0, 0, 200, 200);
    fill(primaryColor); 
    stroke('white');


    stroke(secondaryColor);
    strokeWeight(10);

    ellipse(100, 100, 100, 100) //CENTER
    noFill();
    stroke(arcStrokeColor);
    strokeWeight(12);
    arc(100, 100, 150, 150, 0, PI/2) // TOP LEFT
    arc(100, 100, 100, 100, 0, PI/2) // TOP LEFT

}
function draw() {
    createTile(0, 0, 'orange', 'green', 'pink');
    createTile(0, 200, 'red', 'purple', 'pink');
    createTile(0, 200, 'orange', 'green', 'pink');
    createTile(200, -400, 'red', 'purple', 'pink');
    createTile(0, 200, 'orange', 'green', 'pink');
    createTile(0, 200,'red', 'purple', 'pink');
    createTile(200, -400, 'orange', 'green', 'pink');
    createTile(0, 200, 'red', 'purple', 'pink');
    createTile(0, 200, 'orange', 'green', 'pink');
}
