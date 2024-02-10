function handleMyButtonClick () {
    console.log('howdy');
} 
let buttonThing = document.querySelector('.myButton')
buttonThing.addEventListener('click', () => {
    console.log('the button has been clicked');
})