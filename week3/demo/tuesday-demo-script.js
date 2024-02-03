// learning about functions

// what is a function?
/*function sayHelloPerson(name) {
    alert("howdy" + name)
}*/
// how do you use it?
//sayHelloPerson(" Sam");
//sayHelloPerson(" Alice");
// const firstNumber = window.prompt ("number");
// const secondNumber = window.prompt ("different number");
// function calculator(number1, number2) {
//     let modifiedNumber1 = number1;
//     let modifiedNumber2 = number2;
//     if(typeof number1 = "string"); {
//         modifiedNumber1 = Number(number1);
//     }
//     if(typeof number2 === "string") {
//             modifiedNumber2 = Number(number2)
//     }
//     console.log(modifiedNumber1 + modifiedNumber2);
// }
// calculator(firstNumber, secondNumber);

function calculatorv2(n1, n2, operation) {
    if(operation === "add") {
        return n1 + n2;
    }
    if(operation === "subtract") {
        return n1 = n2;
    }
}
const whatIsTheFunction = calculatorv2(10,7, "subtract");
const anotherFunctionReturn = calculatorv2(10, 7, "add");
console.log("another fn", anotherFunctionReturn)
console.log("thisis the variable what is the function",
whatIsTheFunction)
if(whatIsTheFunction) {
    console.log("truthy")
} else {
    console.log("falsy")
}
function step(ingredient, action) {
    // whatever code makes sense
    console.log("I'm going to " + action + "the" + ingredient);
}
console.log(step("bread", "get from the cupboard"));
console.log(step("peanut butter", "get from the cupboard"));
console.log(step("jelly", "get from the fridge"));
console.log(step("peanut butter", "spread"));
// how do make it useful?
// two ways to creat functions
// annonymous functions
// "fat arrow" functions
const myOtherFunction = (ingredient) => {
    console.log("I have the other" + ingredient);
}
myOtherFunction("peanut butter")

// looping
// what do we get out of looping?
// what data types are iterable
// for loop
let myArray = ["snoopy", "clifford", "tintin", "odie"]
for(let loopVariable = 0; loopVariable < myArray.length; loopVariable++) {
    console.log("I really like" + myArray[loopVariable])
}
let myNumber = 0;
while (myNumber < 20) {
    console.log("I'm waving hello");
    myNumber++;
}
const myObject = {
    color: "red",
    style: "flashy",
    name: "something"
};
// for(let objectKey in myObject) {
//     console.log(`${objectKey}: ${myObject[objectKey]}`);
// }
const keys = Object.keys(myObject);
console.log(keys)
for(let i = 0; i < keys.length; i++) {
    const currentKey = keys[i];
console.log(`${currentKey}: ${myObject[currentKey]}`)
}

// looping demo in p5js
const rectCoordinates = [
    {x:0, y:15},
    {x:15, y:100},
    {x:300, y:250},
]
function setup() {
    createCanvas(600, 600);
    background(100);
}

function draw() {
    noLoop();
    for(let loopVar = 0; loopVar < rectCoordinates.length; loopVar++)
 {
    rect(rectCoordinates[loopVar].x, rectCoordinates [loopVar].y, 30,30);
 }}