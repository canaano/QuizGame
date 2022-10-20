const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));

var currentQuestion = {};
var acceptingAnswers = false;
var score = 0;
var questionCounter = 0;
var availableQuestions = [];

// Come up with questions for the quiz
let questions = [
    {
    question: "Which is not a JavaScript Data Type?",
    choice1: "Boolean",
    choice2: "Number",
    choice3: "String",
    choice4: "Script",
    answer: 4
    },
    {
    question: "How can a datatype be declared to be a constant type?",
    choice1: "Const",
    choice2: "Var",
    choice3: "Let",
    choice4: "Constant",
    answer: 1
    },
    {
    question: "Which of the following are closures in Javascript?",
    choice1: "Variables",
    choice2: "Functions",
    choice3: "Objects",
    choice4: "All of the above",
    answer: 4
    },
    {
    question: "In an Array, the first item is what number in that array",
    choice1: "1",
    choice2: "0",
    choice3: "undefined",
    choice4: "2",
    answer: 2
    },
];

// What are my Constants

const Correct_Bonues = 10;
const Max_Questions = 4;

startGame = () => {
    questionCounter = 0;
    availableQuestions = [...questions];
    score = 0;
    console.log(availableQuestions);
    getNewQuestion();
};
// logic for getting random questions
getNewQuestion = () => {
   const questionIndex = Math.floor(Math.random() * availableQuestions.length);
   currentQuestion = availableQuestions[questionIndex];
   question.innerText = currentQuestion.question;

   choices.forEach( choice => {
    const number = choice.dataset['number'];
    choice.innerText = currentQuestion["choice" + number];
   });

availableQuestions.splice(questionIndex, 1);

acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedchoice.dataset['number'];

        getNewQuestion();
});
});


startGame();