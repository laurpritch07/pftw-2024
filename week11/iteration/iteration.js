var w = window.innerWidth;
var h = window.innerHeight;  
let c; //color
let sat;

function setup() {
    canvas=createCanvas(w, h, WEBGL);
    angleMode(DEGREES)
}

function draw() {
    background(255, 242, 240)

    c = map(mouseX, 0, width, 0, 360);
    sat = map(mouseY, 0, height, 0, 360);

    rotateX(60)

    fill(10, 10, 10, 30)
    stroke (c, sat, 0)
    strokeWeight(8)

    for (var i = 0; i < 40; i++) {
        // i < changes the size
        var r = map(sin(frameCount /2), -1, 1, 100, 200)
        var g = map(i, 0, 50, 100, 200)
        var b = map(cos(frameCount), -1, 1, 200, 100)


        rotate(frameCount / 10)



    beginShape()
    for (var j = 0; j < 360; j += 5) {
        // change width
        var rad = i * 10
        var x = rad * cos(j)
        var y = rad * sin(j)
        var z = sin(frameCount * 2 + i * 90) * 90

        vertex(x, y, z)
    }
    endShape(CLOSE)
    }
}

function mousePressed() {
    loop();
  }
  
  function mouseReleased() {
    noLoop();
  }
