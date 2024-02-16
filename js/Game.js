const overlay = document.getElementById('overlay');


class Game {
    constructor(){
        this.missed = 0;
        this.phrases = [ new Phrase('A red herring'),
            new Phrase('Cool as ice'),
            new Phrase('Ahead of the curve'),
            new Phrase('It suddenly dawned on me'),
            new Phrase('Break your old routines')
        ];
        this.activePhrase = null;
    }

    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase(){
        const randomNumber = Math.floor( Math.random() * this.phrases.length );
        return this.phrases[randomNumber];
    }
    
    /**
    * Begins game by selecting a random phrase and displaying it to user
    */
    startGame(){
        overlay.style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't won
    */
    checkForWin(){
        const letters = document.getElementsByClassName('hide letter');
        return  letters.length === 0;
    }

    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife(){
        let lives = document.getElementsByTagName('img');
        lives[this.missed].setAttribute('src', 'images/lostHeart.png');
        this.missed += 1;
        this.missed === 5 ? this.gameOver(false) : null ;
    }

    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon){
        const gameOverMessage = overlay.querySelector('#game-over-message');
        overlay.setAttribute('class', gameWon ? 'win' : 'lose');
        gameOverMessage.textContent = gameWon ? "Congratulations! You've won!" : "Sorry, better luck next time!" ;
        overlay.style.display = '';
    }

    /**
    * Handles onscreen keyboard button clicks
    * @param (HTMLButtonElement) button - The clicked button element
    */
    handleInteraction(button) {
        const phrase = this.activePhrase;
        const letter = button.textContent;
        button.disabled = true;
        
        if (phrase.checkLetter(letter)) {
            phrase.showMatchedLetter(letter);
            button.classList.add('chosen');
            this.checkForWin() ? this.gameOver(true) : null ;
        } else {
            button.classList.add('wrong');
            this.removeLife();
        }
    }
}