function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};


const body = document.querySelector("body");
// console.log(body);

const button = document.querySelector(".change-color");
// console.log(button);

const colorValue = document.querySelector(".color")


button.addEventListener("click", onClick)

function onClick(event) {

// Повісити стиль на Боді:
  let currentColor = body.style.backgroundColor =  `${getRandomHexColor()}` ;
  
// додати назву кольору у Спан елемен:
  colorValue.textContent = currentColor;

}