const fontSizeInput = document.querySelector('#font-size-control');
const textElement = document.querySelector('#text');

const handleFontSizeInput = (event) => {
  const fontSizeValue = event.currentTarget.value;
  textElement.style.fontSize = `${fontSizeValue}px`;
};

fontSizeInput.addEventListener('input', handleFontSizeInput);