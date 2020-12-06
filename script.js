'use strict';

const againDom = document.querySelector('.again');
const guessDom = document.querySelector('.guess');
const checkDom = document.querySelector('.check');
const messageDom = document.querySelector('.message');
const scoreDOM = document.querySelector('.score');
const highscoreDom = document.querySelector('.highscore');
const numberDom = document.querySelector('.number');
const htmlBodyDom = document.querySelector('body');

let secretNum = Math.trunc(Math.random()*20) + 1;
let score = 20;
let hs = 0;

const displayMessage = function(message) {
    messageDom.textContent = message;
}

checkDom.addEventListener('click', function() {
    const guess = Number(guessDom.value);
    console.log(guess, typeof guess);

    // no guess
    if (!guess) {
        displayMessage('⛔️ No number!');

        // player wins
    } else if (guess === secretNum) {
        displayMessage(`🎉 Correct Number!`);
        // highscoreDom.textContent = score;

        htmlBodyDom.style.backgroundColor = `#60b347`;
        numberDom.style.width = `30rem`;
        numberDom.textContent = secretNum;

        if (score > hs) {
            hs = score;
            highscoreDom.textContent = hs;
        }

    } else if (guess !== secretNum) {
        if (score > 1) {
            displayMessage(guess > secretNum ? `Too High!`: 'Too Low');
            score--;
            scoreDOM.textContent = score;
        } else {
            displayMessage(`☹️ You lose the game!`);
            scoreDOM.textContent = 0;
        }
    }
});

againDom.addEventListener('click', function () {
    secretNum = Math.trunc(Math.random()*20) + 1;
    // numberDom.textContent = secretNum;
    score = 20;
    scoreDOM.textContent = score;

    displayMessage('Start guessing...');
    htmlBodyDom.style.backgroundColor =`#222`;
    numberDom.style.width = `15rem`;
    numberDom.textContent = `?`;
    guessDom.value = '';

})