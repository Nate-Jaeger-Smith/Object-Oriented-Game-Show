/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
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

    getRandomPhrase(){
        const randomNumber = Math.floor( Math.random() * this.phrases.length );
        return this.phrases[randomNumber];
    }
    
    startGame(){
        const overlay = document.getElementById('overlay');
        overlay.style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }
}