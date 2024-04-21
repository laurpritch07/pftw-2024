let maxAge = 100;//tendrils that are older than 100 will be removed

let paused = false; // you can click 'p' to pause and unpause

let fungi; //this is our list of objecs

function setup() {
    createCanvas(windowWidth, windowHeight);

    background(0); //BG is drawn in setup so that each sketch after occurs ontop of the previous

    fungi = [];
    for (let i=0; i<3; i++) {
      let f = new Fungus(width/2, height/2);
      fungi.push(f);
    }
  }

function draw() {
    //if not paused 
    if (!paused) { //if paused it doesnt do anything
        for (let i=fungi.length-1; i>=0; i-=1) { // reverse through the for loop - we remove and then count down?
            let f = fungi[i];  // get the current object
            f.update();
            if (f.distFromCenter >= height/3 || f.age > maxAge) {
                fungi.splice(i, 1); // update and if it has reached a ceratin radius or its too old then we remove it
            }
            f.display(); //draws onscreen
        }
        if (frameRate<30) {
            setup();
        }
    }
}

function keyPressed() {
    //p = pause/unpause
    if (key === 'p') {
        paused = !paused;
    } 
    // all other keys reset the sketch
    else {
        setup();
    }
}