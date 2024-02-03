// for loop with number 
// The three things that are happening: 
// assign the variable let i = 0;
// we have our break i < 10;
// The increment: i++, what happens to the loop variable each time the loop runs

for (let i = 0; i < 10; i++) {
    console.log('this is i', i);
}
// for lopp with an array 
const myMovies = ['star wars', 'empire strikes back', 'return of the jedi', 'raiders of the last ark'];
for (let j = 0; j < myMovies.length; j++) {
    console.log('i like', myMovies[j]);
}
// while loop -- a little scary but not bad
let myVar = false;
while (myVar === false) {
    console.log('this will happen once');
    myVar = true;
}

// while loop removing items in an array (this is what he has in mind for the quiz) The idea for the assignment is, while there are still questions in the array we will pop up a random question and then if the question is answered correctly, we'll use SPLICE to remove the question and then we'll do the loop
const myNums = [1, 2, 3, 4, 5, 6];
while (myNums.length > 0) {
    console.log('removing ' + myNums[myNums.length - 1]);
    myNums.pop();
}
console.log(myNums);
// for each

// map