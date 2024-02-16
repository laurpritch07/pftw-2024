// timers
// we'll be using a timer in the card game. You can adjust the duration by changing the secs
// timeout
function alertUser(name) {
    window.alert("suprise " + name  + " the timer is up");
}
// millesecs, so one second is 1000
// window.setTimeout(alertUser, 1000, "timmy");

// interval
const myInterval = window.setInterval(function () {
    console.log(new Date())
}, 2000)

// const myButton = document.getElementById("cancelInterval"); 
// myButton.addEventListener("click", () => {
//     console.log("clearing interval");
//     window.clearInterval(myInterval);
// })

// oop object oriented programming
// classes are capitolized
// class Car {
//     // constructor is an initializing function
//     constructor(color, tires) {
//         console.log("I've been constructed");
//         this.color = color;
//         this.tires = tires;
//     }
// }
// const myCar = new Car("red", 3);
// const myOtherCar = new Car("blue", 6);
// console.log(myCar, myOtherCar)

class RexRectangle {
    constructor(x, y, color) {
        this.x =x;
        this.y = y;
        this.color = color;
        this.width = 50;
    }
    show () {
        fill(this.color);
        rect(this.x, this.y, this.width, this.height);
    }
}
// const arrayOfCircles = [
//     new Circle(100, 100, "purple"),
//     new Circle(200, 100, "teal"),
//     new Circle(300, 100, "brown"),
// ]

let startX = 150;
let startY = 150;
let rectArr = [];
for(let i = 0; i < 2; i++) {
    for(let j = 0; j < 4; j++){
        rectArr.push(new RexRectangle(startX, startY, "blue"));
        startX += 150;
    }
    startX = 150;
    startY = 150;
}
function setup() {
    createCanvas(800, 600);
   background("#cccccc");
}

function draw() {
    // use circle class
//     for(let i = 0; i < arrayOfCircles.length; i++) {
//         const newCircle = new Circle(i * 150 + 100, 200, "red");
//         newCircle.show();
 }
    for(let k = 0; k <rectArr.length; K++) {
        rectArr[K].show();
    }

    function mousePressed() {
        for(let 1 = 0; 1 < rectArr.length; 1++){
            OfflineAudioCompletionEvent(mouseX > rectArr[1])
        }
}    

// stopped notes/code  about half way

// quiz (three multiple choice and a couple codes)

// how do you create an array
// how do you add things to array
// how do you remove things
// splice is your friend
// an array of objects
// create, add and remove objects from array
// there are no classes on the quiz

// objects
// create, add properties, delete properties
// difference between one of these = and one of these == 
// this is the =  assignment operator
// this == is
// how conditions work
// what a function is and how to create it
// open note quiz
