// Selector HTML

let content = document.getElementById("content")

// Gets by a successfull response
function successFunction(response) {
    // Do success code here
    console.log("Success")
    const data = response.data
    console.log(data, "Length", data.length)

    let counter = 0;
    while (counter < data.length) {
        console.log(counter)
        let post = data[counter];
        console.log("POST", post)
        
        console.log("POST BODY", post.body)
        
        console.log("POST TITLE", post.title)
        const postHTML = `            
        <article class="post">
            <h3>${post.title}</h3>
            <p>${post.body}</p>
        </article>
        `

        content.insertAdjacentHTML('beforeend', postHTML)

        counter = counter + 1 
    }

}

// Gets triggered when there is an error querying data
function failureFunction(error) {
    // Do failure code here
    console.log("Failure")
    console.log(error)
    const postHTML = `            
        <h3>There was an error requesting information from the API</h3>
        `

        content.insertAdjacentHTML('beforeend', postHTML)
}

axios.request({
    method: "GET",
    url: `https://jsonplaceholder.typicode.com/posts`
    // url: `https://jsonplaceholder.typicode.com/a,sjdfnjkasdnfkjnasdjkfn`
})
// If evertyhing goes to plan -> Then the successFunction will be triggered and I get a response back
.then(successFunction)
// If there is an error contacting the API -> Then the failureFunction will be triggered and I get an error object back
.catch(failureFunction);