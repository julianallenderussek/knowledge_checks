const content = document.getElementById('content')

function meal_success(response) {
    // Code to handle success 
    console.log(response)

    const meals = response.data.meals
    
    if (meals) {
        
        let counter = 0
        while(counter < meals.length) {

            const meal = meals[counter]     
            const mealCard = `
            <div class="meal-card">
                <h1 title>${meal.strMeal}</h1>
                <img class="meal-img" src="${meal.strMealThumb}"/>
            </div>
            `
            content.insertAdjacentHTML('beforeend', mealCard)
   
            counter = counter + 1
        }    
        


    } else {
        content.insertAdjacentHTML('beforeend', `<h2>No meals with that ingredient</h2>`)
   
    }
    
    

}

function meal_failure(error) {
// Code to handle failure
    console.log(error)
    content.insertAdjacentHTML('beforeend', `<h2>There was an error with your request</h2>`)
}

//  GET -> https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast
axios.request({
    url: `https://www.themealdb.com/api/json/v1/1/filter.php`,
    params: {
        i: `chicken_breast`
    }
})
.then(meal_success)
.catch(meal_failure);




// Basic While Loop 0 - 10
// let counter = 0
// while(counter < 10) {
//     console.log(counter)
//     counter = counter + 1
// }