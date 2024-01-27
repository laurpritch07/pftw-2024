const myFavoriteMovieArray = ["Almost Famous", "Petite Maman", "Annie Hall", "His Girl Friday", "The Lives of Others"];
console.log(myFavoriteMovieArray);
const movie = window.prompt("what is your favorite movie?");
console.log("Good choice!");
myFavoriteMovieArray.push(movie);
console.log(myFavoriteMovieArray.toString());
