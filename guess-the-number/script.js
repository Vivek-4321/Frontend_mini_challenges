const input = document.querySelector("input");
const hint = document.querySelector(".hint");
const previousInputsList = document.querySelector(".chances");
const inputBanner = document.querySelector(".your-input");
const button = document.querySelector(".disabled");
const body = document.querySelector("body");
let randomNumber;
let gameStarted = false;
let previousInputs = [];
let chances = 0;

function handleSubmit(){

    if(parseInt(input.value) && chances > 8){
        body.classList.toggle("game-lost");
        hint.textContent = "You Lost";
    }

    if (parseInt(input.value) && gameStarted){
        chances++;
        let userInput = parseInt(input.value);
        previousInputs = [...previousInputs, userInput];
        
        updatePreviousInputsList();
        inputBanner.textContent = "Your Inputs"; 
        input.value = "";

        if (userInput == randomNumber){
            body.classList.toggle("game-won");
            hint.textContent = "You won";
        }
        else if (userInput > randomNumber){
            hint.textContent = "Too high";
        }
        else {
            hint.textContent = "Too low";
        }
    }
    else {
        if (!gameStarted){
            hint.textContent = "Click the start game button";
        }
        else {
            hint.textContent = "Enter a number";
        }
    }
}

function updatePreviousInputsList() {
    previousInputsList.innerHTML = "";
    

    if (previousInputs.length > 0) {
        const previousInputsText = previousInputs.map(input => `${input}`).join(", ");
        const li = document.createElement("li");
        li.textContent = previousInputsText;
        previousInputsList.appendChild(li);
    }
}

function handleStart(){
    hint.textContent = "";
    gameStarted = true;
    button.classList.add("enabled");
    button.removeAttribute("disabled")
    randomNumber = Math.floor(Math.random() * 101);
    console.log(randomNumber);
}