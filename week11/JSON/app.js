console.log("I mexican food");

let selection = {
    title: "Iphone X",
    price: 499,
    image_url: "https://cdn.alloallo.media/catalog/product/apple/iphone/iphone-x/iphone-x-silver-back.jpg",
    description: "Unlocked Cell Phone Canada UMIDIGI F3 8GB+128GB, NFC, Android11, 6.7inch HD Full Screen, 5150mAh Battery, Smartphone with Sony 48MP AI Triple Camera, 18W Fast Charging, Dual SIM 3.7 out of 5 stars 464" 
}

console.log("1. JS Object:  ", selection)

// Method to transform JS to a JSON string
let selection_json = JSON.stringify(selection) 
console.log("2. JSON Object:  ", selection_json)

// Saving into Cookies
Cookies.set(`user_selection`, selection_json)

// Check the application tab on the dev tools

