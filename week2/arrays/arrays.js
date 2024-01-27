// an array is a variable but has multiple slots
// arrays start at 0
// if you want to do an array with 25 empty spots you would write: let myOtherArray = new Array(25);
// the easiest way to add things to your array is to use .push
// when you are defining variables, there are three types: var, let and const
// when we are ever creating a variable, const is the ideal situation, unless we reassign it to something else
// myArr.pop(); pop removes the last item
// to remove the first item in an array use myArr.shift();
// each slot in an array has an index number (0,1,2)
// if the console can find somehting it comes back as -1 in index and undefined
// a property. tells us more about something (ex. Console is the object and log is the propery) 
// .pop() is a method
const myArr = ["bob", "betty", "sue"];
const myOtherArray = new Array();
myOtherArray.push("star wars"); // adds item to end
myOtherArray.push('raiders of the lost ark');
// myArr.pop(); // removes last item
// myArr.shift(); //removes first item
myArr.unshift("james"); // add item to the beggining of an array

console.log(myArr);
console.log(myOtherArray);
console.log(myOtherArray[0]); // read single item, if we are intersted in a specific slot in an array
console.log(myArr[1]); // why use this? there are times when you want to work on a specific item in an array and for this you will need to isolate the index
console.log(myArr.indexOf("betty")); // to find where an item is inside of an array
const bettyIdx = myArr.indexOf("betty");
console.log(bettyIdx); //if not found -1, if found real index number
if (bettyIdx > -1) {
    console.log(myArr[bettyIdx]);
}
// myArr.splice(bettyIdx, 1); // this will remove one index at the nettyIndx, so betty is gone. If we did (bettyIndx, 2) it would get rid of betty and the next index
myArr.splice(bettyIdx, 0, "robert"); // this is called a mutation. We have taken the array and changed it
console.log(myArr);
console.log(myArr.length); // this tells you how many slots you have in an array. length is just a property, it tells us more about the object.
// Math.random() for random 0 and 1
// Math.round(n) rounds to nearest whole number
// myArr.lenth -1, to get the last index number of an Array
const randomNumber = Math.round(Math.random() * (myArr.length - 1)); // so each time we refresh this should give us an interger between 0 and 4
console.log(myArr[randomNumber]); // square brackets is how you fetch information from an array

