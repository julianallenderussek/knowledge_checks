function meal_success(response) {
    // Code to handle success
    console.log("It was a succes")    
    console.log(response.status)
    console.log(response.data)
    const recipie = response.data.meals[0]
    console.log(recipie)   
}
console.log('running this')
function meal_failure(error) {
// Code to handle failure
    console.log(error)
}

axios.request({
    url: `https://www.themealdb.com/api/json/v1/1/random.php`
})
.then(meal_success)
.catch(meal_failure);