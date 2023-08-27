// script.js

// Get elements from the HTML
const counterElement = document.querySelector('.counter');
const incrementBtn = document.querySelector('.increment-btn');
const decrementBtn = document.querySelector('.decrement-btn');
const incrementValueInput = document.querySelector('.increment-value');
const resetButton = document.querySelector('.reset-button');

let counter = 0;

// Function to update the counter element's content
function updateCounter() {
    counterElement.textContent = counter;
}

// Function to handle increment button click
function handleIncrement() {
    const incrementValue = parseInt(incrementValueInput.value);
    if (!isNaN(incrementValue)) {
        counter += incrementValue;
        updateCounter();
    }
}

// Function to handle decrement button click
function handleDecrement() {
    const decrementValue = parseInt(incrementValueInput.value);
    if (!isNaN(decrementValue)) {
        counter -= decrementValue;
        updateCounter();
    }
}

// Function to handle reset button click
function handleReset() {
    counter = 0;
    incrementValueInput.value = '';
    updateCounter();
}

// Attach event listeners to the buttons
incrementBtn.addEventListener('click', handleIncrement);
decrementBtn.addEventListener('click', handleDecrement);
resetButton.addEventListener('click', handleReset);

// Initial update of the counter element
updateCounter();
