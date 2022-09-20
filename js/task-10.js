
const input = document.querySelector("input");
console.log(input.value);
const btnCreate = document.querySelector("button[data-create]");
console.log(btnCreate);
const btnDestroy = document.querySelector("button[data-destroy]");
// console.log(btnDestroy);
const mainDiv = document.querySelector("#boxes");
// console.log(mainDiv);

let value = 30;


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


btnCreate.addEventListener("click", createBoxes)
function createBoxes(amount) {
  amount = input.value;
 
  // console.log(amount);

  for (let index = 0; index < amount; index++) {
   const box = document.createElement("div");
    box.classList.add("box")
    box.style.width = value+[index] * 10 + "px";
    box.style.height= value+[index] * 10 + "px";
   
  box.style.backgroundColor = `${getRandomHexColor()}`
  mainDiv.append(box)
  }
}


btnDestroy.addEventListener("click", destroyboxes)

function destroyboxes() {
  
  mainDiv.innerHTML = "";
  input.value = "";
}
  
  
  
  // let removeElem = document.querySelectorAll(".box");


  // console.log(removeElem);
  // for (let i = 0; i < removeElem.length; i++) {
  //   removeElem[i].remove()
    
  // }




