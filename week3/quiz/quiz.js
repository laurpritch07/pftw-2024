let questionInput;
let submitAnswerButton;
let currentQuestion;
let response;
let responseColor = 'green';
let heading;
let statements = [
    {question: 'A banana plant fits into which of these groups? Options: herbs, flowers, grasses, flowers or trees', answer: 'herbs'},
    {question: 'Which of these is not a dehiscent plant? Options: pea, bean, banana, magnolia', answer: 'banana'},
    {question: 'Which kind of plant can be an annual, biennial, or perennial? Options: hollyhock, rhododendron, peony, Venus-flytrap ', answer: 'hollyhock'},
    {question: 'From what plant was paper originally made? Options: wheat, cattail, peony, papyrus, rosemary', answer: 'papyrus'},
    {question: 'Which of these is not a kind of plant? Options: abacus, acacia, acanthus, aster', answer: 'abacus'},
]; // the value of answer is 'blue'
function next() {
    if (statements.length < 1) {
        alert('you won');
        return;
    }
    const randomIndex = Math.ceil(Math.random() * statements.length - 1);
    return statements[randomIndex];
}

function checkQuestion() {
    if (currentQuestion.answer === questionInput.value()) {
        // remove correct answer from array
        // .filter is a loop function
        statements = statements.filter(statementObj => {
            return currentQuestion.answer !== statementObj.answer;
        });
        // this is the correct condition
        response = 'correct! next question';
        responseColor = 'green';
    } else {
        // this is the wrong answer condition
        response = 'oops, that wasn\'t quite right! Try again!';
        responseColor = 'red';
    }
    currentQuestion = next(); 
    questionInput.value('');
    if (currentQuestion) {
        message = currentQuestion.question;
    }
    
}

currentQuestion = next();
let message = currentQuestion.question;

function setup() {
    createCanvas(displayWidth, displayHeight);
    heading = createElement('h1', ['PLANT QUIZ']);
    heading.position(100,100);
    questionInput = createInput('');
    questionInput.size(300, 48);
    questionInput.position(100, 240);
    submitAnswerButton = createButton ('submit answer');
    submitAnswerButton.size(300, 48);
    submitAnswerButton.mousePressed(checkQuestion);
    submitAnswerButton.position(100, 300);
}
function draw() {
    background('#04BF9D');
    fill('black');
    textFont("Work-Sans");
    textSize(32);
    text(message, 100, 200);
    fill(responseColor);
    text(response, 100, 600);
}

if(statements.length < 4) {
    window.prompt('You wont the plant game!');
} else {
    window.prompt('You lost the game');
}
