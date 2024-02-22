var randomNumber = parseInt((Math.random() * 100) + 1);
console.log(randomNumber);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessslot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const message = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");
const startButton=document.querySelector("#newGame")


let preGuess = [];
let playGame = true;
let rem = 11;
const p = document.createElement("p");

if (playGame) {
    submit.addEventListener("click", function(e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
        userInput.value = '';
    });
}

function validateGuess(x) {
    if (x < 1 || isNaN(x)) {
        alert('Enter a valid number!');
    } else {
        checkGuess(x);
    }
}

function checkGuess(y) {
    let count = 0;
    if (y === randomNumber) {
        displayMessage("Hurrah! Correct Guess");
        endGame();
    } else if (y < randomNumber) {
        displayMessage("Number is too low");
    } else {
        displayMessage("Number is too high");
    }
    count++;
    rem--;
    guessslot.innerHTML += `${y},`;
    if (rem < 0) {
        endGame();
    }
}

function displayMessage(messages) {
    message.innerHTML = `<h2>${messages}</h2>`;
    remaining.textContent = rem;
}

function endGame() {
    playGame = false;
    userInput.setAttribute('disabled','')
    message.innerHTML = `Game Over!The number is ${randomNumber}`
}
  
   startButton.addEventListener("click", function (e) {
        randomNumber = parseInt((Math.random() * 100) + 1);
        playGame = true;
        userInput.removeAttribute('disabled')
        guessslot.innerHTML = '';
        rem = 10;
        remaining.textContent = rem;
    });
