let firstNum = '';
let secondNum = '';
let operator = '';

/*------------------------ Cached Element References ------------------------*/
const displayElement = document.querySelector('.display');
const calculator = document.querySelector('#calculator');

/*----------------------------- Event Listeners -----------------------------*/
calculator.addEventListener('click', (event) => {
  if (!event.target.classList.contains('button')) return;

  const value = event.target.innerText;

  if (event.target.classList.contains('number')) {
    if (operator === '') {
      firstNum += value;
      displayElement.innerText = firstNum;
    } else {
      secondNum += value;
      displayElement.innerText = secondNum;
    }
  }

  if (event.target.classList.contains('operator')) {
    if (value === 'C') {
      firstNum = ''; secondNum = ''; operator = '';
      displayElement.innerText = '';
    } else {
      operator = value;
    }
  }

  if (event.target.classList.contains('equals')) {
    if (firstNum && secondNum && operator) {
      const n1 = parseFloat(firstNum);
      const n2 = parseFloat(secondNum);
      let result;
      if (operator === '+') result = n1 + n2;
      if (operator === '-') result = n1 - n2;
      if (operator === '*') result = n1 * n2;
      if (operator === '/') result = n1 / n2;
      displayElement.innerText = result;
      firstNum = result.toString();
      secondNum = '';
      operator = '';
    }
  }
});