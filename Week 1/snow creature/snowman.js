let stroke1 = prompt("Choose a color for the snowman's hat! (Enter a basic color in lowercase)" , "black");
let stroke2 = prompt("Now choose a color for the his scarf! (Enter a basic color in lowercase)" , "teal");
function setup() {
    createCanvas(displayWidth, displayHeight);
    background("#53C4F5");
    grid = loadImage("images/100px_grid.png");
}

function draw() {
    // snowman legs
    fill("#f1f1f1");
    strokeWeight(10);
    stroke(0);
    // left arm
   //  ellipse(350, 300, 125);
    // right leg
   //  ellipse(650, 300, 125);
    // lower half
     ellipse(500, 700, 375, 375);
    // top half
    ellipse(500, 425, 300, 300);
    // head
    ellipse(500, 200, 200);
    // hat brim
    stroke(stroke1);
    strokeWeight(40);
    line(400, 120, 600, 120);
    // hat body
    fill(stroke1)
    rect(425, 40, 150, 80, 200, 40, 5, 5);
    //hat flower
    stroke("red");
    strokeWeight(35);
    point(550, 100);

    // eyes
    stroke(0);
    strokeWeight(35);
    point(465, 180);
    point(540, 180);
    // eyes whites
    stroke("#FFFFFF");
    strokeWeight(5);
    point(460, 185);
    point(535, 185);
    // mouth
    stroke(0);
    strokeWeight(15);
    point(490, 255);
    point(520, 255);
    point(460, 245);
    point(550, 245);

    // scarf horizontal
    stroke(stroke2);
    strokeWeight(60);
    line(400, 300, 600, 300);
    // scarf vertical
    stroke(stroke2);
    strokeWeight(60);
    line(400, 300, 400, 400);
    // buttons
    stroke(0);
    strokeWeight(35);
    point(500, 370);
    point(500, 445);
    point(500, 520);
    // nose
    stroke("orange");
    strokeWeight(25);
    point(500, 215);
}

  
