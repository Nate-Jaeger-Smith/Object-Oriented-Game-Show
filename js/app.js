const startButton = document.getElementById('btn__reset');
const keyboard = document.getElementById('qwerty');
let game;


startButton.addEventListener('click', e => {
    game = new Game();
    game.startGame();
});

keyboard.addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON') {
        game.handleInteraction(e.target);
    }
});