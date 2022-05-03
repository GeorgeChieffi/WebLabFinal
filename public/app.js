const gridTemplate = document.getElementById("grid");

for(let i = 0; i < 9; i++) {
    let cell = document.createElement("div");
    let aTag = document.createElement("a");
    aTag.setAttribute("href", "./Puppy2.html");
    let imgTag = document.createElement("img");
    imgTag.setAttribute("src", "./Images/Puppy2.jpg")
    aTag.appendChild(imgTag);
    cell.appendChild(aTag);

    let puppyDesc = document.createElement("div");
    let puppyHeader = document.createElement("h1");
    let puppyText = document.createElement("p");
    puppyHeader.innerHTML= "Name";
    puppyText.innerText = "Male, 9\nMiami"
    puppyDesc.appendChild(puppyHeader);
    puppyDesc.appendChild(puppyText);
    cell.appendChild(puppyDesc);

    cell.className = "cell";
    gridTemplate.appendChild(cell);
}

let test = document.getElementById("grid");
test.addEventListener("mouseover" , () => {
    
});