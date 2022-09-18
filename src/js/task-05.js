// Задание 5
// Напиши скрипт который, при наборе текста в инпуте
// input#name - input(событие input), подставляет его текущее значение
// в span#name - output.Если инпут пустой, в спане должна отображаться строка
// "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const inputName = document.getElementById("name-input");
const outputname = document.getElementById("name-output");


inputName.addEventListener("input",onInput)

function onInput () {  if (inputName.value === "") { 
  outputname.textContent =  "Anonymous"
    
    } else {

        outputname.textContent = inputName.value;
        }}
  

