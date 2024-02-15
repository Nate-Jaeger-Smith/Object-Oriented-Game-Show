/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const startButton = document.getElementById('btn__reset'),
    keyboard = document.getElementById('qwerty');
let game;


startButton.addEventListener('click', e => {
    game = new Game();
    game.startGame();
});

keyboard.addEventListener('click', e => {

    if (e.target.tagName === 'BUTTON') {
        const letter = e.target.textContent;
    }
});