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
 * Resets the game by enabling all keyboard keys, clearing the phrase,
 * and resetting the heart images
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

/**
 * Event listener for the 'keyup' event
 * Finds the button corresponding to the key pressed,
 * then passes button to handleInteraction()
 */
document.addEventListener('keyup', e => {
    const buttons = keyboard.querySelectorAll('button.key');
    let pressedButton;

    buttons.forEach( key => {
        key.textContent === e.key ? pressedButton = key : null ;
    });
    game.handleInteraction(pressedButton);
})