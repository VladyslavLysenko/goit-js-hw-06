const input = document.getElementById("validation-input")

input.addEventListener("blur", onblur)

  
  
function onblur() {
  if (input.value.length == input.dataset.length) {

    input.classList.add("valid")
    input.classList.remove("invalid")
      
  } else {
    input.classList.add("invalid")
    input.classList.remove("valid")
    
  }
}
  

   


