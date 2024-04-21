
var slider;
var pos;
let c = 0;

function setup() {
    createCanvas (windowWidth, windowHeight);
    angleMode(DEGREES);
    colorMode(HSB);
    slider = createSlider(0, 15, 0);
    slider2 = createSlider(0, 15, 0);
    slider.position(10, 200);
    slider2.position(250, 200);

    pos = 0.0; 
    inc = 3.0; //the amount at which we increase the position

    pos2 = 0.0; 
    inc2 = 7.0; 
}

function draw() {
    
    var mySinVal = sin(pos);
    var mySinVal2 = sin(pos2);

    clear()
    background(30);
    translate(width/2, height/2) // this says we want to start our sketch form the middle of the canvas and not the top left
    stroke(c+227, 43, 84, 10);
    c += 1;
    c = c % 180;
    fill(c+227, 43, 84, 10);

    
    
    amplified = mySinVal * 75;
    amplified2 = mySinVal2 * 75;

    for (x = 0; x <= 360; x = x + 3) {
        curve(0, 50, 50, amplified2, amplified, 1, 1, 10)
        rotate(x)
    }

    pos = pos + slider.value()
    pos2 = pos2 + slider2.value()
}

