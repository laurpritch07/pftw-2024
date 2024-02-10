// let myPara = document.createElement('p');
// myPara.innerHTML = 'Howdy';
// document.querySelector('.target-div').appendChild(myPara);
// creating elements on the DOM
// function clickHandler() {
//    console.log('I have been clicked');
// }
// so you can do it with thte on click on element like above or you can do it with addEventListener
// let myButton = document.querySelector('#clickButton');
// myButton.addEventListener('click', clickHandler);

// // for a rectangle
const rectWidth = 200;

// for a circle
// const circleDiameter = 100;
// let circleX = 200;
// let circleY = 300;

// for multiple circles
let startingX = 200;
let startingY = 100;
let mySquares = [];
let startingId = 0;

function setup () {
    createCanvas(displayWidth, displayHeight);
    background(0);
    // 100 from left, 100 from top, 200wide, 200 tall)
    // rect(rectX, 100, rectWidth, 200);
    // ellipse(circleX, circleY, circleDiameter);
    for (let k = 0; k < 2; k++) {
            // for multiple circles
         for (let i = 0; i < 8; i++) {
             // this moves the x three times. First loop started at 200, second loop 350, 500, 650)
            rect(startingX, startingY, 150, 200);
             // ellipse(startingX, startingY, circleDiameter);
            mySquares.push({ x: startingX, y: startingY, id:startingId});
            startingX += 200;
            startingId++;
        
    }
    startingY += 250;
    startingX = 200;

    }



    console.log(mySquares);
}

// function that overwrites its basic implementation
function mousePressed() {
    for (let j = 0; j < mySquares.length; j++) {
    let distance = dist(mouseX, mouseY, mySquares[j].x, mySquares[j].y);
    if (distance < rectWidth / 2) {
        console.log('card has been clicked', mySquares[j].id);
    }
    }
}
    // console.log('Mouse pressed', mouseX, mouseY);
    // && makes it a compiund conditional. SO both these things needs to be true)
    // rect example
    // if(mouseX > 100 && mouseX < 300 && mouseY > 100 && mouseY < 300) {
    //     console.log('the square has been hit');
    // }