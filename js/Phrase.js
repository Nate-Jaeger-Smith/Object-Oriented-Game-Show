class Phrase {
    constructor(phrase){
        this.phrase = phrase.toLowerCase()
    }
    
    /**
    * Display phrase on game board
    */
    addPhraseToDisplay(){
        const phraseDivUl = document.querySelector('#phrase ul');
        const phraseArray = [...this.phrase];

        phraseArray.forEach( letter => {
            if (letter !== ' ') {
                let letterLi = `<li class="hide letter ${letter}">${letter}</li>`;
                phraseDivUl.insertAdjacentHTML('beforeend', letterLi);
            } else {
                let spaceLi = `<li class="space"> </li>`;
                phraseDivUl.insertAdjacentHTML('beforeend', spaceLi);
            }
        });
    }

    /**
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check
    */
    checkLetter(letter){
        return this.phrase.includes(letter);
    }

    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */
    showMatchedLetter(letter){
        const matchedLetters = document.getElementsByClassName(letter);
        
        [...matchedLetters].forEach( letter => {
            letter.classList.remove('hide');
            letter.classList.add('show');
        });
    }
};