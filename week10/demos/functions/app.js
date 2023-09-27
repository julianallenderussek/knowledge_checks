// Function without arguments and without a return value
function printTacos() {
    console.log("I am eating tacos, I a love it")
} 

// To call a function you need to use the name of the function plus () curved brackets!
printTacos();

// Function without arguments and without a return value
function eatAFoodOfYourChoosing(food) {
    console.log(`I am eating ${food}, I a love it`)
}

let result = eatAFoodOfYourChoosing("hamburger")
console.log("This is the result: ", result)

// With arguments and with a return value
function multityTimesFive(number) {
    return number * 5
}

let resultTimesFive = multityTimesFive(5)
console.log(resultTimesFive);

// Without arguments but with a return value
function generateGenericH1() {
    return "<h1>This is a generic Title</h1>"
}

let myGenericH1 = generateGenericH1()
console.log(myGenericH1)


const my_title = document.getElementById('example-title');
console.log(my_title);
my_title.innerHTML = "My new title"