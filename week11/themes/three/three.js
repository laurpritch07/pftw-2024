let x = 50;
let y = 50;
let ySpeed = 4;
let xSpeed = 4;
let r = 50;
let c = 0;



function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    colorMode(HSB);
    background(300);
}

function draw() {


    noFill()
    stroke(c+200, 200, 200)
    c += 1;
    c = c % 90;
    circle(x, y, r*2);

    x += xSpeed;
    y += ySpeed;

    if(x >= window.innerWidth - r || x < r){ 
        xSpeed = -xSpeed;
    }

    if(y >= window.innerHeight - r || y < r){ 
        ySpeed = -ySpeed;
    }
    
}