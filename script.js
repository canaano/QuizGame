// JavaScript quiz on the fundamentals of JavaScript
var quiz = document.getElementById('quiz');
var questions = {
        title: 'What is the biggest dog in the world?'
        answers: [
        {
            answer: 1, 
            correct: false
        },
        {
            answer: 2, 
            correct: false
        },
        {
            answer: 3, 
            correct: false
        },
        {
            answer: 4, 
            correct: false
        },
        ]
    }
    function homePage() {
        quiz.innerHTML = /*html*/
            <p>
                My quiz
            </p>
            <button id='startquiz'>Start Quiz</button>
        
// timer fuctionality
// High Scores fuctionality
// when timer = 0 the game is over
// when game is over, i can save my initials and score locally