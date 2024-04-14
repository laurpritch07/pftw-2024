let myArrayX = [];
let myArrayY = [];
let i = 0;
let panSlider;
let song; 
let button;
let slider;
let rateSlider;



let c = 0;

function setup() {
    slider = createSlider(0, 1, 0.45, 0.1);
    slider.position(10, 140);
    panSlider = createSlider(-1, 1, 0, 0);
    panSlider.position (155, 140);
    rateSlider = createSlider (0, 1, 1, 0);
    rateSlider.position (305, 140);

    createCanvas(windowWidth, windowHeight);
    colorMode(HSB);
    song = loadSound("birds-singing.ogg", loaded);
    background(300);
}



function loaded() {
    console.log("loaded");
    button = createButton("play");
    button.position(10, 220);
    button.mousePressed(togglePlaying);
}


function draw () {
    song.setVolume(slider.value());
    song.pan(panSlider.value());
    song.rate(rateSlider.value());
    let circleSize = slider.value() * 400;
    let opacity = slider.value() * 255;
    let circlePosition = map(panSlider.value(), -1, 1, 0 + circleSize/2, windowWidth - circleSize/2);
    noStroke()
    fill(c, 100, 100, opacity);
    c += 1;
    c = c % 360;
    circle(circlePosition, windowHeight/2, circleSize, circleSize);

    textSize(14);
    fill(0);
    text('Volume', 10, 35);
    text('Position', 155, 35);
    text('Playback rate', 305, 35);
}

function togglePlaying() {
    if (!song.isPlaying()) {
        song.play();
        song.setVolume(0.4);
        button.html("Pause Music");
    } else {
        song.stop();
        button.html("Play Music");
    }
    }
