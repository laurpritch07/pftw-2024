let myArrayX = [];
let myArrayY = [];

let circleSize = 5;
let c = 0;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    colorMode(HSB);
}

function draw() {
    background(c+200, 100, 100);
    stroke(c+100, 100, 100)
    fill(c, 100, 100)
    c += 1;
    c = c % 360;
    for(let i = 0; i < 100; i++){
         circle(myArrayX[i], myArrayY[i], circleSize);
    }

    circleSize += 0.5;

    if(circleSize >= 200){
        circleSize = -circleSize;
    }

}

function mouseClicked(){
    if(myArrayX.length > 500){
        myArrayX.shift();
        myArrayY.shift();

        myArrayX.push(mouseX);
        myArrayY.push(mouseY);
    } else {
    myArrayX.push(mouseX);
    myArrayY.push(mouseY);
    }
}