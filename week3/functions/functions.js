function logOutGreeting(greeting) {
    console.log(greeting);
}
logOutGreeting('Salutations');

// function to get stuff
function getStuff (ingredient) {
    console.log('get' + ingredient);
}
getStuff(' bread');
getStuff(' peanut butter')

// this is the old way of assigning the variable
// const makeSandwich = function (ingredientArray) {
//     for(let i= 0; i < ingredientArray.length; i++) {
//         console.log('get' , ingredientArray[i]);
//     }
// }
// makeSandwich(['bread', 'mayo', 'tunafish']);

// this is the new way with es6
let makeSandwich = (ingredientArray) => {
    for(let i= 0; i < ingredientArray.length; i++) {
        console.log('get' , ingredientArray[i]);
    }
};
makeSandwich = (ingredientArray) => {
    console.log(ingredientArray.toString(`, `))
};
makeSandwich(['bread', 'mayo', 'tunafish']);
// function makeRand (maxNumber) {
//     const output = Math.ceil(Math.random() * maxNumber);
//     return output
// }
function checkLegality (age) {
    return age >= 21;
}
console.log (checkLegality(18));

const KensAge = 49;
if (checkLegality (KensAge)) {
    console.log('He is legal');
}

// this is the old way of creating annonymous functions
// const myObject = {
//     x:200,
//     y:400,
//     getPosition: function () {
//         console.log('we are ' + this.x + ' from the left and ' + this.y + ' from the top');
//     }
// }
// myObject.getPosition();

// this is the new es6 way of creating annonymous functions, this way makes it less likely for things to collide. Better for other developers who come after you
const myObject = {
    x:200,
    y:400,
    getPosition: () => {
        this.x = 35;
        this.y = 45;
        console.log('we are ' + this.x + ' from the left and ' + this.y + ' from the top');
    }
}
myObject.getPosition();