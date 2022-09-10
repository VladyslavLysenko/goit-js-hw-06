// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.



const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


for (let i = 0; i < ingredients.length; i += 1) {
  const createElItem = document.createElement("li");
  createElItem.innerHTML = ingredients[i];
  createElItem.classList.add("item");
  console.log(createElItem);

}


const createElUl = document.createElement("ul")
console.log( createElUl);





