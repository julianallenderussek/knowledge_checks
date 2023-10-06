let divOne = document.getElementById("div-one");

function printClicking() {
    console.log("clicking")
}

// Accepts two things: 1. type of event as a string, 2. function to be triggered 
divOne.addEventListener('click', printClicking);


let articleOne = document.getElementById("article-one");

function printDoubleClicking() {
    console.log("double clicking")
}

articleOne.addEventListener("dblclick", printDoubleClicking);


let footer = document.getElementById("footer");

function printMouseOver() {
    console.log("Mouserover triggered")
}

footer.addEventListener("mouseover", printMouseOver);