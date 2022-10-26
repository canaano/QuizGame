// constant for player info

const username = document.querySelector('#username');
const saveScore = document.querySelector('#finalscore');
const finalScore = document.querySelector('#finallScore');
const recentScore = document.querySelector('#recentScore');

//   loggin score to console
finalScore.innerText = recentScore;
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
const Max_High_Score = 5;

username.addEventListener('keydown', () => {
    saveScore.disabled = !username.value;
});

saveHighScore =e => {
    e.preventDefault();
    
    const score = {
        name: username.value,
        score: finalScore.value,
    };
    highScores.push(score);
    highScores.sort((a, b) => {
    return a.score - b.score;
})
highScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    }