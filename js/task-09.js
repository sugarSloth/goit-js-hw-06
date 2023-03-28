const bodyElement = document.querySelector('body');
const colorElement = document.querySelector('.color');
const changeColorButton = document.querySelector('.change-color');

changeColorButton.addEventListener('click', handleColorChange);

function handleColorChange() {
  const color = getRandomHexColor();

  colorElement.textContent = color;
  bodyElement.style.backgroundColor = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0')}`;
}