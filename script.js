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

  switch (e.currentTarget.id) {
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
    case "10":
      display.value = e.currentTarget.id;
      break;
  }
};

buttons.forEach((btn) => {
  btn.addEventListener("click", handleClick);
});
