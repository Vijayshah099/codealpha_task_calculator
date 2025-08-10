// script.js
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
let currentInput = '';
let resultDisplayed = false;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.dataset.value;

    if (button.id === 'clear') {
      currentInput = '';
      display.textContent = '0';
      return;
    }

    if (button.id === 'equals') {
      try {
        // Evaluate the expression
        currentInput = eval(currentInput).toString();
      } catch (error) {
        currentInput = 'Error';
      }
      display.textContent = currentInput;
      resultDisplayed = true;
      return;
    }

    if (resultDisplayed && !['+', '-', '*', '/'].includes(value)) {
      currentInput = '';
      resultDisplayed = false;
    }

    currentInput += value;
    display.textContent = currentInput;
  });
});
