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

const Correct_Bonus = 10;
const Max_Questions = 4;

// Timing logic for endGame
endGame() {
  if (timeLeft <=0) {
 localStorage.setItem('recentScore', score);
 return.window.location.assign("./results.html")   
  };
};

// Timer fuction for overall game
startTimer() {
  timerElement.testContent = timeleft;
  timer = setInterval(() => {
    timeLeft --;
  timerElement.textConent = timeLeft;
  if (timeLeft == 0)
  clearInterval(timer);
  endGame();  
  }, 1000);
};

startGame = () => {
    questionCounter = 0;
    availableQuestions = [...questions];
    score = 0;
    console.log(availableQuestions);
    getNewQuestions();
};
// logic for getting random questions
getNewQuestions = () => {
    // returns to high score page 
    if( availableQuestions.length === 0 || questionCounter > Max_Questions) {
      localStorage.setItem('recentScore', score);
      return window.location.assign("./results.html")
    }
    // Make sure all questions are asked
    questionCounter ++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;
  
    choices.forEach(choice => {
      const number = choice.dataset["number"];
      choice.innerText = currentQuestion["choice" + number];
    });
  //removes previous question
    availableQuestions.splice(questionIndex, 1);
  
    acceptingAnswers = true;
  
  };
  // listens for click to log which "choice" was picked
   choices.forEach(choice => {
   choice.addEventListener("click", e => {
    if (!acceptingAnswers) return;
    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];
   // determine if answer is correct
   var valueToApply = "incorrect";
    if ( selectedAnswer == currentQuestion.answer){
      valueToApply = "correct";
    };
    
  
  if (valueToApply === "correct"){
    incrementScore(Correct_Bonus)
  }
  
    setTimeout( () => {
    getNewQuestions();
    }, 1);
  });
  });
  
  incrementScore = num => {
    score += num;
    console.log(score);
  };

startGame();
startTimer();
endGame();


// Quiz will begin with Lets Play

// 