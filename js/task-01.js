// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).
// В результате, в консоли будут выведены такие сообщения.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5


"use strict";
const categories = document.querySelectorAll('#categories .item');

console.log(`Number of categories: ${categories.length}`);


const categoriesItems = categories.forEach(function (category) {
  console.log(`Category: ${category.firstElementChild.textContent}`);
  console.log(`Elements: ${category.lastElementChild.childElementCount}`);

}
)





// var 1
// const categories = document.querySelectorAll('#categories .item');


// console.log(`Number of categories: ${categories.length}`);




// const showEachCategory = categories =>
//   categories.forEach(category => {
//     const headerText = category.firstElementChild.textContent;
//     console.log(`Category: ${headerText}`);

      
//     const categoryElements = category.querySelectorAll('li');
  
//     const showNumberOfElements = console.log(
//       `Elements: ${categoryElements.length}`,
//     );
//     return showNumberOfElements;
//   });

// showEachCategory(categories);



