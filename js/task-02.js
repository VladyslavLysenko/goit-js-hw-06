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


// var 1

const ingredientsElList = document.querySelector("#ingredients");

const items = ingredients.map(item => {
  const itemsLi = document.createElement("li");
  itemsLi.classList.add("item");
  itemsLi.textContent = item;
  return itemsLi
})
console.log(items);
console.log(...items);
ingredientsElList.append(...items)




// var 2
// const ingredientsElList = document.getElementById("ingredients");



// for (let i = 0; i < ingredients.length; i += 1) {
//   const ingredientItem = document.createElement("li");
//    ingredientItem.textContent = ingredients[i];
//    ingredientItem.classList.add("item");
//   ingredientsElList.append(ingredientItem)

// }

// console.log(ingredientsElList);














