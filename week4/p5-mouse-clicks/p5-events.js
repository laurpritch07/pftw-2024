const squareWidth = 50;
const squareHeight= 50;
let squareXPosition = 100;
let squareYPosition = 0;
function setup () {
    createCanvas(500, 500);
}

function draw () {
    background(0);
    fill('purple');
    // for circle
    // ellipse(100, 100, 100);
    rect(squareXPosition, squareYPosition, squareWidth, squareHeight);
    squareYPosition += 1;
    // this loops the square animation.
    if(squareYPosition > height) {
        squareYPosition = 0;
        // noLoop(); this would turn off the loop
    }
}

function mousePressed () {
    console.log(mouseX, mouseY);
//     // for a circle 
//     const distance = dist(mouseX, mouseY, 100, 100);
//     console.log(distance);
//     if(distance < 50) {
//         alert("you hit it");
//     }

    // for a rectangle, so basically were saying if mouse x is more than this but less than this we will trigger our condition
    if ((mouseX >= squareXPosition && mouseX <= squareXPosition + squareWidth) && (mouseY >= squareYPosition && mouseY <= squareYPosition + squareHeight))  {
        console.log('you have got the x');
    }
}
