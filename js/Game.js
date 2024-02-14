/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
    constructor(){
        this.missed = 0;
        this.phrases = [
            {
                phrase: 'A red herring'
            },
            {
                phrase: 'Cool as ice'
            },
            {
                phrase: 'Ahead of the curve'
            },
            {
                phrase: 'It suddenly dawned on me'
            },
            {
                phrase: 'Break Your old routines'
            }
        ];
        this.activePhrase = null;
    }

    getRandomPhrase(){
        const randomNumber = Math.floor( Math.random() * this.phrases.length );
        return this.phrases[randomNumber].phrase;
    }
    
}