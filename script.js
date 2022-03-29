const buttons = document.querySelectorAll(".calc-btn");
const display = document.getElementById("display");

const add = (n1, n2) => n1 + n2;
const subtract = (n1, n2) => n1 - n2;
const multiply = (n1, n2) => n1 * n2;
const divide = (n1, n2) => n1 / n2;

const operate = (operand, n1, n2) => {
  let value = 0;

  switch (operand) {
    case "+":
      value = add(n1, n2);
      break;
    case "-":
      value = subtract(n1, n2);
      break;
    case "*":
      value = multiply(n1, n2);
      break;
    case "/":
      value = divide(n1, n2);
      break;
  }
  return value;
};

// TODO: Incorporate auto-matic comma's in number formatting on display.value
// toLocaleString() is not a string method .. this is currently typOf String

/*  Need to take current.displayValue .. store it when operator is pressed
    record what operator is pressed
    clear current.displayValue
    store 2nd displayValue and Operate()
*/

const handleClick = (e) => {
  let buttonValue = e.currentTarget.id;
  buttonValue === "C" ? (display.value = "") : (display.value += buttonValue);
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
