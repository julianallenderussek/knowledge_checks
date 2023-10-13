const content = document.getElementById('content')

function meal_success(response) {
    // Code to handle success
    console.log("It was a succes")    
    console.log(response.status)
    console.log(response.data)
    const recipie = response.data.meals[0]
    console.log(recipie)  
    
    content.insertAdjacentHTML('beforeend', `<h2>${recipie.strMeal}</h2>`)
    content.insertAdjacentHTML('beforeend', `<h2>${recipie.strArea}</h2>`)
    content.insertAdjacentHTML('beforeend', `<h2>${recipie.strInstructions}</h2>`)
    
}

function meal_failure(error) {
// Code to handle failure
    console.log(error)
    content.insertAdjacentHTML('beforeend', `<h2>There was an error on your request</h2>`)
    
}

axios.request({
    url: `https://www.themealdb.com/api/json/v1/1/random.php`
})
.then(meal_success)
.catch(meal_failure);