const input = document.getElementById("font-size-control")
let spanSize = document.getElementById("text")

input.addEventListener("input", onInput)
input.value = 16;

function onInput() {
    let fontPx = input.value + "px";
    spanSize.style.fontSize = fontPx;
}


