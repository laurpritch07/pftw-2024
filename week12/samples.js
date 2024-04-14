let myArrayX = [];
let myArrayY = [];
let i = 0;

let song; 
let slider;
let button;
let amp;

let circleSize = 5;
let c = 0;

function setup() {
    slider = createSlider(0, 1, 0.45, 0.1);
    createCanvas(window.innerWidth, window.innerHeight);
    colorMode(HSB);
    song = loadSound("rainbow.mp3", loaded);
    song.setVolume(0.45);
    amp = new p5.Amplitude();
    background(300);
}



function loaded() {
    console.log("loaded");
    button = createButton("Play Music");
    button.mousePressed(togglePlaying);
}


function draw () {
    song.setVolume(slider.value());
    background(0);
    let vol = amp.getLevel();
    let circleSize = map(vol, 0, 0.4, 50, 2000);
    stroke(c+100, 100, 100)
    fill(c, 100, 100)
    c += 1;
    c = c % 360;
    circle(width / 2, height / 2, circleSize, circleSize);
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