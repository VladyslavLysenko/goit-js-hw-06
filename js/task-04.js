let counterValue = 0;
let valueDisp = document.getElementById("value");
console.log(valueDisp);



const btn = document.querySelectorAll("button")

btn[0].addEventListener("click", onClickDecrement);

function onClickDecrement() {
   
    valueDisp.textContent = `${counterValue -=1} `
}


btn[1].addEventListener("click", onClickIncrement)

function onClickIncrement() {
    valueDisp.textContent = `${counterValue +=1}`
}


// var 2

// let counterValue = 0;
// let valueDisp = document.getElementById("value");
// console.log(valueDisp);


// const button = document.querySelectorAll("#counter button");


// button.forEach(element => {
   
//     element.addEventListener("click", (event) => {

//     if (event.target.dataset.action === "decrement") {

//         counterValue = counterValue - 1;
        
//     } else {
//          counterValue = counterValue + 1;
//         }
        
//         valueDisp.textContent = counterValue;  
// });
  
// });










