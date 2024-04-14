
let numBars = 5;
let bars = [];
let xBar = [];
let clr = ['#99F2F2', '#F2E205', '#F2CB05', '#F29F05', '#F25F29'];
let polySynth;
let notes = [349.23, 415.30, 466.16, 523.25, 622.25, 698.46];
let volSlider;

function setup() {

    createCanvas(windowWidth, windowHeight);
    background(300);

    for(let i=0; i<numBars; i++) {
        let w = windowWidth/numBars;
        let x = w* i;
        xBar.push(x);
    }

    for(let i=0; i<numBars; i++) {
        bars.push(new Bar(i));
        bars[i].display();
    }

    polySynth = new p5.PolySynth();
    polySynth.setADSR(0.1, 0.4, 0.3, 0.05);

    volSlider = createSlider (0, 1, 0.5, 0);
    volSlider.position(20, 100);
    textSize(20);
    fill(0);
    text('Volume', 20, 20);
}

function draw() {
    outputVolume(volSlider.value(), 0.025);
}

function touchStarted() {
    userStartAudio();
    for(let i=0; i<numBars; i++) {
        bars[i].played();
    }
}