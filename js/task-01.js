const categoriesList = document.getElementById('categories');
const items = document.getElementsByClassName('item');

const countElements = (elements) => {
  Array.from(elements).forEach(({ firstElementChild, lastElementChild }) => {
    console.log(`Category: ${firstElementChild.textContent}`);
    console.log(`Elements: ${lastElementChild.children.length}`);
  });
};

console.log(`Number of categories: ${items.length}`);
countElements(items);