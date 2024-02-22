let bubble1;
let bubble2;
let bubble3;
let bubble4;

function setup() {
    createCanvas(600, 400);
    bubble1 = new Bubble();
    bubble2 = new Bubble();
    bubble3 = new Bubble();
    bubble4 = new Bubble();

}

function draw() {
    background('#808000');
    bubble1.move();
    bubble1.show();
    bubble2.move();
    bubble2.show();
    bubble3.move();
    bubble3.show();
    bubble4.move();
    bubble4.show();
}

class Bubble {
    constructor() {
        this.x = 300;
        this.y = 200;
    }

    move() {
        this.x = this.x + random(-5, 5);
        this.y = this.y + random(-5, 5);
    }

    show() {
        stroke('orange');
        strokeWeight(12);
        noFill();
        ellipse(this.x, this.y, random(width), random(height));
    }
}