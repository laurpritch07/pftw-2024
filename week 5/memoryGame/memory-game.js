// class describes an object. its like a cookie cutter
// this is our blue print. 

const DOWN = 'down';
const UP = 'up';
// establish starting position
let startingX = 100;
let startingY = 100;
// array for all the cards to go into
let cards = [];
const gameState = {
    totalPairs: 8,
    flippedCards: [],
    numMatched: 0,
    attempts: 0,
    waiting: false
};

// card faces
let cardFaceArray = [];
let cardBack; 
function preload() {
    // this is where you will load the cardback image. name it 'cardback.png'
    cardBack = loadImage('images/cardback.png');
    cardFaceArray = [
        loadImage('images/01.png'),
        loadImage('images/02.png'),
        loadImage('images/03.png'),
        loadImage('images/04.png'),
        loadImage('images/05.png'),
        loadImage('images/06.png'),
        loadImage('images/07.png'),
        loadImage('images/08.png'),
    ]
}
function setup() {
    createCanvas(1200, 800);
    let selectedFaces = [];
    // z < 5 relates to the amount of pairs you have so for my game it would be z < 8
    for (let z = 0; z < 8; z++) {
        // floor rounds down to the closes whole number and random will return a number between our max number which .length
        const randomIdx = floor(random(cardFaceArray.length));
        const face = cardFaceArray[randomIdx];
        // were pushing it twice because we need to copies of the image in our array for the game
        selectedFaces.push(face);
        selectedFaces.push(face);
        // remove the used cardface so it doesn't get randomly selected again. splice takes the index and the amount you want to remove which is 1
        cardFaceArray.splice(randomIdx, 1);
    }
    selectedFaces = shuffleArray(selectedFaces);
    // this is a loop to define our rows
    for (let j = 0; j < 2; j++) {
            // change number of cards here
        for (let i = 0; i < 8; i++) {
            // if you call pop (pop removes the last image in an array, but it also returns that item)
            const faceImage = selectedFaces.pop();
            // this creates our new instance or cookie cutter
            cards.push(new Card(startingX, startingY, faceImage));
            // incrementing space between
            startingX += 120;
        }
        // and this defines where we start our new row
        startingY += 150;
        startingX = 100;
    }
}

function draw () {
    background(0);
    // if number of cards mattched = the number of total pairs then we retur a message
    if (gameState.numMatched === gameState.totalPairs) {
        fill('yellow');
        textSize(66);
        text('you win!!!!', 400, 425);
        noLoop();
    }
    // indicate # of attempts
    for (let k = 0; k < cards.length; k++) {
        // ! mark in front of the variable means not. The same as sayin == false
    if(!cards[k].isMatch) {
        cards[k].face = DOWN;
    }
    // this reshows the cards
    cards[k].show();
    } 
    noLoop();
    gameState.flippedCards.length = 0;
    gameState.waiting = false;
    fill(255);
    textSize(36);
    text('attempts ' + gameState.attempts, 100, 500);
    text('matches ' + gameState.numMatched, 100, 450);

}

function mousePressed() {
    // this stops the function because gameState is waiting
    if (gameState.waiting) {
        return;
    }
    for (let k = 0; k < cards.length; k++) {
        // the second conidition here is actually what flips the card. It triggers the show. So if the first part turns out false the second condition doesn't even get triggered.
        // first check flipped cards length, and then
        // we can trigger the flip 
        if(gameState.flippedCards.length < 2  && cards[k].didHit(mouseX, mouseY)) {
            console.log('flipped', cards[k]);
            gameState.flippedCards.push(cards[k]);
        }
    }
    if (gameState.flippedCards.length === 2) {
        gameState.attempts++;
        if (gameState.flippedCards[0].cardFaceImg === gameState.flippedCards[1].cardFaceImg) {
            // cards match! Time to score!
            // mark cards as matched so they don't flip back
            gameState.flippedCards[0].isMatch = true;
            gameState.flippedCards[1].isMatch = true;
            // empty flipped cards array
            gameState.flippedCards.length = 0;
            // increment the score
            gameState.numMatched++;
            loop();
        } else {
            // while this is happening we don't want them flipping anymore cards so we say: gameState.waiting = true;
            gameState.waiting = true;
            const loopTimeout = window.setTimeout(() => {
                loop();
                // this time gives the user a second to think about where things are at. You can increase or decrease this time
                window.clearTimeout(loopTimeout);
            }, 1000)
        }
    }
}

class Card {
    // adding the parameters for x and y lets us change its position
    constructor (x, y, cardFaceImg) {
        this.x = x;
        this.y = y;
        this.width = 80;
        this.height = 100;
        this.face = DOWN;
        // making cardFaceImg a property
        this.cardFaceImg = cardFaceImg;
        // this is how we will check if there is a match or not and we will wcheck that in our show
        this.isMatch = false;
        this.show();
    }

    // this is a method
    show () {
        // draw the back
        if (this.face === UP || this.isMatch) {
            fill('#aaa');
            rect(this.x, this.y, this.width, this.height, 10);
            image(this.cardFaceImg,this.x, this.y, 80, 100);
        } else { // draw the front
            fill('rgb(57.7%, 9.9%, 9.9%)');
            rect(this.x, this.y, this.width, this.height, 10);
            image(cardBack,this.x, this.y, 80, 100);
        }
       
    }

    didHit (mouseX, mouseY) {
        if (mouseX >= this.x && mouseX <= this.x + this.width && mouseY >= this.y && mouseY <= this.y + this.height) {
            this.flip();
            return true;
        } else {
            return false;
        }

    }
    flip () {
        if (this.face === DOWN) {
            this.face = UP;
        } else {
            this.face = DOWN;
        }
        this.show();
    }
}
function shuffleArray (array) {
    let counter = array.length;
    while (counter > 0) {
        // pick random index
        const idx = Math.floor(Math.random() * counter);
        // decrease counter by 1 (decrement)
        counter--;
        // swap the last element with it
        const temp = array[counter];
        array[counter] = array[idx];
        array[idx] = temp;
    }
    return array;
}