class Phrase {
    constructor(phrase){
        this.phrase = phrase.toLowerCase()
    }
    
    
    addPhraseToDisplay(){
        const phraseDivUl = document.querySelector('#phrase ul');
        const phraseArray = [...this.phrase];

        phraseArray.forEach( letter => {
            if (letter !== ' ') {
                let letterLi = `<li class="hide letter ${letter}">${letter}</li>`;
                phraseDivUl.insertAdjacentElement('beforeend', letterLi);
            } else {
                let spaceLi = `<li class="space"> </li>`;
                phraseDivUl.insertAdjacentElement('beforeend', spaceLi);
            }
        });
    }

    checkLetter(){

    }

    showMatchedLetter(){

    }
};