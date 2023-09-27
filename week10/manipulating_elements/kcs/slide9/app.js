// console.log("Hello from Javascript")
// console.log("DOCUMENT:", document)

let div_three = document.getElementById('div-three');
let title_two = document.getElementById('head')
console.log( "CHECK THIS",title_two)
// console.log("div_three: ", div_three)
div_three['style']['border'] = "2px solid blue";
div_three['style']['fontSize'] = "45px";
div_three.style.backgroundColor = "green";
// console.log("Style in Div", div_three['style'])


let all_divs = document.getElementsByClassName('container');

// Step 1 change the text
// This works it changes the text
// all_divs[1].innerHTML = 'hacked'
// all_divs[4].innerHTML = 'hacked'

// Step build a simple loop from 0 -> 5

// let counter = 0;
// while (counter < 5) {
//     console.log(counter)
//     counter = counter + 1;
// }


// Combine everything
let counter = 0;
while (counter < all_divs.length) {
    console.log(counter)
    all_divs[counter].innerHTML = 'hacked'
    counter = counter + 1;
}

let h_tag = document.getElementById('head')
console.log(tag)
