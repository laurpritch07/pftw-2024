let blockX = 0;
let blockY = 0; 
let blockColor = 255;
let drawTimer;
const speed = 10;
const distance = 2;
function setup () {
    createCanvas(500, 500);
    // BG here because the drawing has us leaving the previous space
    background(0);
}

// function to draw our block. We are paramatizing the x and y coordinate and the color so that we can have this move and change colors
function drawBlock(x, y, color) {
    // double pipes is the or operator. so either we use color passed in in the paramater or it will default to white
    fill(color || 255);
    rect(x, y, 50, 50);
}

function keyTyped() {
    let keyToNumber = Number(key);
    if (isNaN(keyToNumber)){
        return;
    }
    keyToNumber = map(keyToNumber, 1, 9, 1, 255);
    console.log('converted number', keyToNumber);
    blockColor = keyToNumber;
}
 // so every 50 ms this will continue to execute
drawTimer = window.setInterval(() => {
    if (blockY - 50 <= height) {
        drawBlock(blockX, blockY, blockColor);
        blockY += distance;
    } else {
        blockY = 0;
        blockX += 50;
    }
    if(blockY - 50 > height && blockX - 50 > width) {
        window.clearInterval(drawTimer);
        alert('done');
    }
}, speed);