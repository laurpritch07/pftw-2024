class Fungus {
    constructor(x,y,angle) {

        this.angleChangeAmt = radians(2);// this is how much it deviates
        this.speed = 1; //the speed of deviation

        this.changeSplit = 2;
        this.splitAngle = radians(16); // the angle at which it divides off

        //passed in from the arguments
        this.x = x;
        this.y = y;
        this.prevX = x;
        this.prevY = y;

        this.angle = angle || random(0, TWO_PI);

        this.distFromCenter;
        this.age = 0;// this gets incremented every frame
    }

    update () {
        this.age += 1; //increase age of tendril
        
        this.distFromCenter = dist(width/2, height/2, this.x, this.y); //calculating distance from the center

        //move in random direction
        this.angle += random(-this.angleChangeAmt, this.angleChangeAmt);
        this.prevX = this.x;
        this.prevY = this.y;
        this.x += cos(this.angle) * this.speed;
        this.y += sin(this.angle) * this.speed;

        if (random(100) < this.changeSplit) {
            let f = new Fungus(this.x, this.y, this.angle+this.splitAngle);
            fungi.push(f);
            this.angle -= this.splitAngle;
        }
    }

    display() {
        stroke(255, 245, 235, 60);
        strokeWeight(3);
        line(this.prevX, this.prevY, this.x, this.y);
    }
}