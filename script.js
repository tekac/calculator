const buttons = document.querySelectorAll(".calc-btn");

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

const handleClick = (e) => {
  const display = document.getElementById("display");
  let buttonValue = e.currentTarget.id;
  return (display.value += buttonValue);
};

buttons.forEach((btn) => {
  btn.addEventListener("click", handleClick);
});
