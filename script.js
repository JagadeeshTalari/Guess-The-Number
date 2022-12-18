const userGuess = document.querySelector(".userGuess");
const submitGuess =document.querySelector("button");
const previousGuess = document.querySelector(".previousGuesses");
const resultRightWrong = document.querySelector(".resultRightWrong");
const hint = document.querySelector(".hint");
let resetButton;

let compareNumber = Math.floor(Math.random() * 100) + 1;
let count = 1;

submitGuess.addEventListener( 'click', compareFunction);

// main function which comapres the userInput number with computer generated number

function compareFunction(){
    
    if( count == 1){
        previousGuess.textContent = `Previous guesses: `;
    }

    previousGuess.textContent += `${userGuess.value} `;

    if( count === 10){
       
        resultRightWrong.textContent = `!!GameOver!!`;
        hint.textContent = "";
        restartGame();
    }
    else if ( compareNumber === Number(userGuess.value)){
        
        resultRightWrong.textContent = `Congratulations`;
        resultRightWrong.style.backgroundColor = 'green';
        hint.textContent = "";
        restartGame();
    }
    else{

        resultRightWrong.textContent = `Wrong`;
        resultRightWrong.style.backgroundColor = 'red';
        if(compareNumber > Number(userGuess.value)){
            hint.textContent = `Too Low`;
        }
        else{
            hint.textContent = `Too High`;
        }

    }

    count++;
    userGuess.focus();
    userGuess.value = '';
}

// This function is called only when Game is over!! or UserGuess Correct Number
function restartGame(){ 
    userGuess.disbaled = true;
    submitGuess.disabled = true;
    resetButton = document.createElement("button");
    resetButton.textContent = `Restart Game`;
    document.body.appendChild(resetButton);
    resetButton.addEventListener( 'click', restart);
}

// This function is used to reset everything to default initial values
function restart(){
    resultRightWrong.textContent = '';
    resultRightWrong.style.backgroundColor = "white";
    hint.textContent = '';
    compareNumber = Math.floor(Math.random() * 100) + 1;
    count = 1;
    userGuess.disbaled = false;
    submitGuess.disabled = false;
    resetButton.parentNode.removeChild(resetButton);
    previousGuess.textContent = '';
}