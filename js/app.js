const startButton = document.getElementById('btn__reset');
const keyboard = document.getElementById('qwerty');
let game;


startButton.addEventListener('click', e => {
    resetGame();
    game = new Game();
    game.startGame();
});

keyboard.addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON') {
        game.handleInteraction(e.target);
    }
});

/**
 * Reset game for next round
 * Clear on-screen keyboard
 * Clear previous phrase display
 * Set health back to full
 */
function resetGame(){
    const keys = keyboard.getElementsByClassName('key');
    const phraseUL = document.querySelector('#phrase ul');
    const lives = document.getElementsByTagName('img');

    [...keys].forEach( key => {
        key.disabled = false;
        key.setAttribute('class', 'key');
    });

    while (phraseUL.firstChild) {
        phraseUL.removeChild(phraseUL.firstChild);
    }

    [...lives].forEach( heart => {
        heart.setAttribute('src', 'images/liveHeart.png');
    });
}