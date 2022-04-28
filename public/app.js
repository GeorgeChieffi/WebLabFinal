const gridTemplate = document.getElementById("grid");

var data = [
    ["<img src=\"./Images/Puppy2.jpg\"></img>", "<img src=\"./Images/Puppy2.jpg\"></img>", "<img src=\"./Images/Puppy2.jpg\"></img>"],
    ["<img src=\"./Images/Puppy2.jpg\"></img>", "<img src=\"./Images/Puppy2.jpg\"></img>", "<img src=\"./Images/Puppy2.jpg\"></img>"],
    ["<img src=\"./Images/Puppy2.jpg\"></img>", "<img src=\"./Images/Puppy2.jpg\"></img>", "<img src=\"./Images/Puppy2.jpg\"></img>"]
];

console.log("before loop");
for(let i of data) {
    for(let j of i) {
        let cell = document.createElement("div");
        cell.innerHTML = j;
        cell.className = "cell";
        gridTemplate.appendChild(cell);
    }
}