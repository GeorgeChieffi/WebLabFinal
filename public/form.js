let btnClear = document.getElementById("button");
let inputs = document.querySelectorAll("input");

btnClear.addEventListener("click", () => {
    inputs.forEach(input => input.value = '');
    let textArea = document.getElementById("textarea");
    textArea.value='';
})