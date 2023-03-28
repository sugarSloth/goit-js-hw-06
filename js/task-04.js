const valueEl = document.querySelector('#value');
const decrementBtn = valueEl.previousElementSibling;
const incrementBtn = valueEl.nextElementSibling;

let counterValue = 0;

const handlerClick = (operation) => {
  counterValue += operation;
  valueEl.textContent = counterValue;
};

decrementBtn.addEventListener('click', () => handlerClick(-1));
incrementBtn.addEventListener('click', () => handlerClick(1));