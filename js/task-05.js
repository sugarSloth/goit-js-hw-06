const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

const updateNameOutput = (event) => {
  const inputValue = event.currentTarget.value.trim();
  nameOutput.textContent = inputValue ? inputValue : 'Anonymous';
};

nameInput.addEventListener('input', updateNameOutput);