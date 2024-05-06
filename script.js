const display = document.getElementById('display');
let currentNumber = '';
let operator = null;
let memoryValue = 0;

function appendNumber(number) {
    currentNumber += number;
    display.value = currentNumber;
}

function setOperator(op) {
    if (operator !== null || currentNumber === '') return;
    currentNumber += op;
    operator = op;
    display.value = currentNumber;
}

function calculateResult() {
    if (operator === null || currentNumber === '') return;
    try {
        const result = eval(currentNumber);
        display.value = result;
        currentNumber = '';
        operator = null;
    } catch (error) {
        alert('Invalid input');
        clearDisplay();
    }
}

function clearDisplay() {
    currentNumber = '';
    operator = null;
    display.value = '';
}
function deleteLastDigit() {
    if (currentNumber.length === 0) return;
    currentNumber = currentNumber.slice(0, -1);
    display.value = currentNumber;
}

function changeSign() {
    const currentValue = parseFloat(display.value);
    if (isNaN(currentValue)) {
      return;
    }
    const sign = currentValue >= 0 ? -1 : 1;
    const absoluteValue = Math.abs(currentValue);
    display.value = (absoluteValue * sign).toString();
    currentNumber = display.value;
  }
  
  // Обработчик события для кнопки "Clear"
  clearButton.addEventListener('click', function() {
    memory = 0;
  });
  
recallButton.addEventListener('click', function() {
    if (display.value === '') {
      display.value = memory;
      appendNumber(display.value);
    }
    else if (display.value === null) {
        clearDisplay(display.value);
    } 
    else {
      display.value = parseInt(display.value) + memory;
      appendNumber(display.value.toString());
    }
  });
  saveButton.addEventListener('click', function() {
    memory = parseInt(display.value);
  });


  function calculatePercentage() {
    let currentValue = parseFloat(document.getElementById('display').value);
    if (currentValue !== 0 && currentValue !== null) {
      currentValue = currentValue / 100;
      document.getElementById('display').value = currentValue;
    }
  }