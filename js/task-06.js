const validationInput = document.querySelector('#validation-input');

const handleInputBlurValidation = (event) => {
  const inputValue = event.currentTarget.value.trim();
  const dataLength = Number(event.currentTarget.dataset.length);

  if (inputValue.length === dataLength) {  
    event.currentTarget.classList.add('valid');
    event.currentTarget.classList.remove('invalid');
  } else {
    event.currentTarget.classList.add('invalid'); 
    event.currentTarget.classList.remove('valid');
  }
};

const handleInputFocusRemoveValidation = (event) => {
  event.currentTarget.classList.remove('valid', 'invalid');
};

validationInput.addEventListener('blur', handleInputBlurValidation);
validationInput.addEventListener('focus', handleInputFocusRemoveValidation);
