const gridTemplate = document.getElementById("grid");

var data = [
    ["<a href=\"./Puppy2.html\"><img src=\"./Images/Puppy2.jpg\"></img></a>", "<a href=\"./Puppy2.html\"><img src=\"./Images/Puppy2.jpg\"></img></a>", "<a href=\"./Puppy2.html\"><img src=\"./Images/Puppy2.jpg\"></img></a>"],
    ["<a href=\"./Puppy2.html\"><img src=\"./Images/Puppy2.jpg\"></img></a>", "<a href=\"./Puppy2.html\"><img src=\"./Images/Puppy2.jpg\"></img></a>", "<a href=\"./Puppy2.html\"><img src=\"./Images/Puppy2.jpg\"></img></a>"],
    ["<a href=\"./Puppy2.html\"><img src=\"./Images/Puppy2.jpg\"></img></a>", "<a href=\"./Puppy2.html\"><img src=\"./Images/Puppy2.jpg\"></img></a>", "<a href=\"./Puppy2.html\"><img src=\"./Images/Puppy2.jpg\"></img></a>"]
];

for(let i of data) {
    for(let j of i) {
        let cell = document.createElement("div");
        cell.innerHTML = j;
        cell.className = "cell";
        gridTemplate.appendChild(cell);
    }
}

let test = document.getElementById("grid");
test.addEventListener("mouseover" , () => {
    test.innerHTML("Name");
});