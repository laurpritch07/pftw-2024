const myCandyQuiz = [
    {question: 'True or false: It is possible for a child to get a “sugar high” after eating too much candy.', answer: 'False'},
    {question: 'Scientists have found links between eating dark chocolate and lowered blood pressure?', answer: 'True'},
    {question: 'According to sales data from the past 15 years, the most popular Halloween candy is ... ?' , answer: 'Reeses'},
    {question: 'Which ingredient found in some candies will be banned from foods in California in 2027?', answer: 'Red Dye No. 3'},
];


//console.log(myCandyQuiz[0].answer);

const randomQuizIndex = Math.floor(Math.random() * myCandyQuiz.length);
console.log(myCandyQuiz[randomQuizIndex].question);
 
const response = window.prompt(myCandyQuiz[randomQuizIndex].question);


if(response === myCandyQuiz[randomQuizIndex].answer) {
    window.prompt('You answered ' + response + ',' + ' The correct answer was ' + myCandyQuiz[randomQuizIndex].answer)
} else {
    window.prompt('You answered ' + response + ',' + ' The correct answer was ' + myCandyQuiz[randomQuizIndex].answer)
}

