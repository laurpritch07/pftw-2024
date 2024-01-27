/* objects
/ arrays are important when you want your data to stay in a certain order
/ objects are important when you want to label your data
/ an object is a variable. you use let,const or var to assign 
/ with an object we use curly brakcets to describe an object
/ when you are working with an object you have a key and you have a value

*/

// create
const kensCar = {
    color: 'black',
    pistons: '4',
};
console.log(kensCar);

// mutate: add data (properties)
kensCar.fuelInjection = true;
console.log(kensCar);
kensCar['4-wheel-drive'] = true;

// display single item with a dot
console.log('kens car is', kensCar.color); // we added a label here 'kens car is' with a comma so that we could see in the console

// display single item with array notation
console.log('is it 4 wheel drive?', kensCar['4-wheel-drive']);

// using toString (works with arrays too)
console.log(kensCar.toString());
const myCars = ['rav', 'pilot', 'juke'];
console.log(myCars.toString());

// mutate: remove property
delete kensCar.pistons;
console.log('kens car without pistons', kensCar);

// merge two objects
const basicJuke = {
    wheels: 4,
    color: 'red',
    doors: 4,
    make: 'nissan'
};
const newJuke = Object.assign({}, basicJuke, kensCar); // the curly brackets here are a brand new object. We aren't mutating anything, and then basicJuke is merged with it, and then kensCar merges with it and overwrites it. They merge together and then the last overrides. 
console.log('new juke', newJuke);

// objects in arrays
const cars = [
    { make: 'Nissan', model: 'Rogue', color: 'orange' },
    { make: 'Nissan', model: 'Altima', color: 'blue' },
    { make: 'Dodge', model: 'Viper', color: 'blue' },
    { make: 'VW', model: 'Beetle', color: 'pink' },
    { make: 'Chevy', model: 'Blazer', color: 'black' },
    { make: 'Dodge', model: 'Charger', color: 'green' },
];
console.log('make is', cars[0].make);
const randomIdx = Math.round(Math.random() * cars.length - 1);
console.log('My car is a ' + cars[randomIdx].make + ' ' + cars[randomIdx].model + ' and it is the color ' + cars[randomIdx].color);