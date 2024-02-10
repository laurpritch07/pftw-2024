let rectX = 0;
const rectHeight = 75;
let rectY;
const rectWidth = 75;
// telling a user how many times they've clicked
let clickCount = 0;
// setting up speed with const speed and then under function setup we add speed
let speed;


function setup() {
    createCanvas(500, 500);
    rectY = random(height - rectHeight);
    speed = random(1,3);
}

function draw () {
    background('magenta');
    drawShape();
    // we want rectangle to equal x + 2
    rectX += speed;
    // stops the animation
    if(rectX > width) {
        noLoop ();
        text('Your score was ' + clickCount, 100, 300);
    }
}

function mousePressed() {
    // mouseX is where it is on the left which is 0 and we add the width so it is 75)
    if((mouseX >= rectX && mouseX <= rectX + rectWidth) && (rectY >= 0 && rectY + rectHeight)) {
        // this is where we are console logging our click count
        // clickCount++ about the console log. Increments the clocks, resetting our clicks. ++ is the same as +=
        clickCount ++;
        console.log('hit', clickCount);
    }
}

function drawShape () {
    fill('white');
    noStroke();
    rect(rectX, rectY, rectWidth, rectHeight);
}