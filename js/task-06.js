const input = document.getElementById("validation-input")

input.addEventListener("blur", onblur)
  
function onblur(evt) {

  const num = Number(input.dataset.length)
  let markupString = `${evt.currentTarget.value.trim()}`;
  let markupNumber = Number(markupString.length)

  if (markupNumber === num) {

    input.classList.add("valid")
    input.classList.remove("invalid")
      
  } else {
    input.classList.add("invalid")
    input.classList.remove("valid")
    
  }
}
  

   


