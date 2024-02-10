// this should select empty div and assign it to a variable
const myEmptyDiv = document.querySelector('#myEmptyDiv');
// put an h1 inside of the div
// create a new element
const heading = document.createElement('h1');
heading.innerHTML = 'Hello class! It is a snow day!';
// this adds a pointer icon so user can see that the header is clickable
heading.style.cursor = 'pointer';
heading.addEventListener('click', handleHeadingClick);
myEmptyDiv.appendChild(heading);
function handleHeadingClick () {
    document.body.style.backgroundColor = 'magenta';
}

