// let purpleBox = {
//     width: 50,
//     height: 50,
//     x: 150,
//     y: 150,
// }

let myBoxArrays = [
    {x:50, y:50},
    {x:100, y:50},
    {x:150, y:50},
    {x:200, y:50},
    {x:250, y:50},
    {x:50, y:150},
    {x:100, y:150},
    {x:150, y:150},
    {x:200, y:150},
    {x:250, y:150},
]
let startingX = 25;
let startingY = 25;
let boxWidth = 50;
let boxHeight = 50;

const myColors = ["red", "blue", "green", "teal", "yellow", "pink", "orange"];
let colorIndex = 1
function setup() {
    createCanvas(600,600);
    background("gray");
}

function draw() {
//     fill(myColors[colorIndex]);
//     noStroke();
//     rect( purpleBox.x, purpleBox.y, purpleBox.width, purpleBox.height);
//     purpleBox.x = purpleBox.x +1;
noLoop();
//     for(let x = 25; x < width; x+= 100); {
//         for(let y = 25; y < height; y+= 100) {
//             rect(x, y, 50, 50);
//         }
//     }    
// }

// make 2 rows of 10
// outloop handles rows
for(let rows = 0; rows < 2; rows++) {
    // inner loop handles columns
    for(let columns = 0; columns < 10; columns++) {
        console.log(startingX, startingY)
        rect(startingX, startingY, boxWidth, boxHeight);
        // every iteration, move startX by 100
        startingX += 100;
    }
    startingY += 100;
    startingX = 25;
}
}
// single loop using array of coordinates
for(let i = 0: i < myBoxArrays.length; i++) {
    rect(myBoxArrays[i].x, myBoxArrays{i}.y, boxWidth)
}

function mousePressed() {

    
}
//     if(
//         mouseX >= purpleBox.X &&
//         mouseY >= purpleBox.Y &&
//         mouseX <= purpleBox.x + purpleBox.width &&
//         mouseY <= purpleBox.Y + purpleBox.height
//     ) {
//         console.log("you hit it!");
//         if(colorIndex < (myColors.length -1)) {
//             colorIndex++
//         } else {
//             colorIndex = 0;