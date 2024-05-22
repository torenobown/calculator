const display = document.getElementById("display");
let currentNumber = "";
let operator = null;
let memoryValue = 0;
let memory = null;

function setMemory(value) {
  memory = parseFloat(value);
  localStorage.setItem("memory", value.toString());
}

function appendNumber(number) {
  currentNumber += number;
  display.value = currentNumber;
}

function setOperator(op) {
  if (operator !== null || currentNumber === "") return;
  currentNumber += op;
  operator = op;
  display.value = currentNumber;
}

function renderHistory(item) {
  const historyContainer = document.querySelector(".history");

  historyContainer.insertAdjacentHTML(
    "beforeend",
    `
        <div class="history__item">
          <div class="history__item-number">${item.number} = </div>
          <div class="history__item-result">${item.result}</div>
        </div>
    `,
  );
}

function calculateResult() {
  if (operator === null || currentNumber === "") return;
  try {
    const result = eval(currentNumber);

    renderHistory({
      number: currentNumber,
      result: result,
    });

    display.value = result;
    currentNumber = "";
    operator = null;
  } catch (error) {
    alert("Invalid input");
    clearDisplay();
  }
}
const divideByOneButton = document.getElementById("divideByOneButton");
divideByOneButton.addEventListener("click", function () {
  divideByOne();
});

function divideByOne() {
  const currentValue = parseFloat(display.value);
  if (isNaN(currentValue)) return;
  const result = currentValue / 1;
  display.value = result.toString();
  currentNumber = display.value;
}

function clearDisplay() {
  currentNumber = "";
  operator = null;
  display.value = "";
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
clearButton.addEventListener("click", function () {
  memory = 0;
});

const recallButton = document.getElementById("recallButton");
recallButton.addEventListener("click", function () {
  display.value = memory.toString();
  currentNumber = display.value;
});
saveButton.addEventListener("click", function () {
  memory = parseInt(display.value);
});

function calculatePercentage() {
  let currentValue = parseFloat(document.getElementById("display").value);
  if (currentValue !== 0 && currentValue !== null) {
    currentValue = currentValue / 100;
    document.getElementById("display").value = currentValue;
  }
}

function sqrtButton() {
  if (display.value === "") return;
  try {
    const currentValue = parseFloat(display.value);
    if (isNaN(currentValue)) return;
    const squareRoot = Math.sqrt(currentValue);
    display.value = squareRoot.toString();
    currentNumber = display.value;
  } catch (error) {
    alert("Invalid input");
    clearDisplay();
  }
}

function percentButton() {
  if (display.value === "") return;
  try {
    const currentValue = parseFloat(display.value);
    if (isNaN(currentValue)) return;
    const percentage = currentValue / 100;
    display.value = percentage.toString();
    currentNumber = display.value;
  } catch (error) {
    alert("Invalid input");
    clearDisplay();
  }
}

function sqrButton() {
  if (display.value === "") return;
  try {
    const currentValue = parseFloat(display.value);
    if (isNaN(currentValue)) return;
    const square = currentValue * currentValue;
    display.value = square.toString();
    currentNumber = display.value;
  } catch (error) {
    alert("Invalid input");
    clearDisplay();
  }
}

function divideByOne() {
  if (display.value === "") return;
  try {
    const currentValue = parseFloat(display.value);
    if (isNaN(currentValue)) return;
    const result = 1 / currentValue;
    display.value = result.toString();
    currentNumber = display.value;
  } catch (error) {
    alert("Invalid input");
    clearDisplay();
  }
}

function clearAllButton() {
  display.value = "";
  currentNumber = "";
  memory = [];
  document.querySelector(".history").innerHTML = "";
}

const memoryPlusButton = document.getElementById("memoryPlusButton");
memoryPlusButton.addEventListener("click", function addToMemory() {
  const currentValue = parseFloat(display.value);
  if (isNaN(currentValue)) {
    return;
  }
  memory += currentValue;
  display.value = currentValue.toString();
});

const memoryMinusButton = document.getElementById("memoryMinusButton");
memoryMinusButton.addEventListener("click", function addToMemory() {
  const currentValue = parseFloat(display.value);
  if (isNaN(currentValue)) {
    return;
  }
  memory -= currentValue;
  display.value = currentValue.toString();
});

const memoryMultiplyButton = document.getElementById("memoryMultiplyButton");
memoryMultiplyButton.addEventListener("click", function addToMemory() {
  const currentValue = parseFloat(display.value);
  if (isNaN(currentValue)) {
    return;
  }
  memory *= currentValue;
  display.value = currentValue.toString();
});
