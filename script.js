const buttons = document.querySelectorAll(".calc-btn");
const display = document.getElementById("display");
const multiply = document.querySelector(".multiply");
const operands = ["add", "subtract", "multiply", "divide", "equal"];
let n1 = 0;
let n2 = 0;
let operand;

const calcAdd = (n1, n2) => n1 + n2;
const calcSubtract = (n1, n2) => n1 - n2;
const calcMultiply = (n1, n2) => n1 * n2;
const calcDivide = (n1, n2) => n1 / n2;

const operate = (operand, n1, n2) => {
  let value = 0;

  switch (operand) {
    case "+":
      value = calcAdd(n1, n2);
      break;
    case "-":
      value = calcSubtract(n1, n2);
      break;
    case "*":
      value = calcMultiply(n1, n2);
      break;
    case "/":
      value = calcDivide(n1, n2);
      break;
  }
  return value;
};

// TODO: Incorporate auto-matic comma's in number formatting on display.value
// toLocaleString() is not a string method .. this is currently typOf String

const handleClick = (e) => {
  let buttonValue = e.currentTarget.id;

  if (!operands.includes(e.target.id)) {
    if (buttonValue === "C") {
      display.value = "";
    } else {
      display.value += buttonValue;
    }
  }

  switch (buttonValue) {
    case "multiply":
      n1 = parseInt(display.value);
      display.value = "";
      operand = "*";
      break;
  }

  if (buttonValue === "equal") {
    n2 = display.value;
    display.value = operate(operand, n1, n2);
  }

  // if (operand.includes("multiply")) {
  //   n1 = parseInt(display.value);
  //   display.value = "";
  // }
};

document.addEventListener("keydown", (e) => {
  const allowedKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
  if (e.key === "Backspace") {
    display.value = display.value.slice(0, -1);
  }
  allowedKeys.includes(e.key) ? (display.value += e.key) : e.preventDefault();
});

buttons.forEach((btn) => {
  btn.addEventListener("click", handleClick);
});
