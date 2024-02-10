// what is the DOM?
// WINDOW IS eVERYTHING
// console.log("window", window);
// console.log("body", document.body.children)
// console.log("all divs", document.getElementsByTagName("div"))
// const targetDiv = document.getElementById("targetDiv");
// targetDiv.style.backgroundColor = "red"; (this overrides the html class that designates the color blue)
// targetDiv.style.backgroundColor = "none"; 
// targetDiv.classList.add("red");
// 
// console.log("target", document.getElementById("targetDiv")) 
// console.log("array of div", document.getElementsByClassName("repeatedClass"));
// const repeatedClassDivs = document.getElementsByClassName("repeatedClass"); 
const myColors = ["red", "blue", "green", "teal", "yellow", "pink", "orange"]
/*for(let i = 0; i < repeatedClassDivs.length; i++) {
    repeatedClassDivs[i].style.background = myColors[i];
}
let heading = document.createElement("h2");
heading.innnerHTML = "this is the heading"; 
targetDiv.prepend(heading);
*/
let colorIndex = 0;
targetDiv.addEventListener("click", function (event) {
    console.log("you clicked on target div", event);
    event.target.style.backGroundColor = myColors[colorIndex];
})

setTimeout(() => {
    targetDiv.removeEventListener("click", function (event) {
        console.log("you licked on target div", event);
    });
    console.log("listener removed");
}, 5000);