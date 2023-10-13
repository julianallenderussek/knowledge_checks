// Selectors
const content = document.getElementById('content')
const postTitle = document.getElementById('user-title')
const postContent = document.getElementById('user-content')
const button = document.getElementById('submit-btn')

function create_success(response) {
    console.log(response)
}

function create_failure(error) {
    console.log(error)
}


function createPost() {
    //  HTTP POST -> https://https://jsonplaceholder.typicode.com/posts -> Creating a post in the practice API
    console.log("click function")
    
    let body = {
        title: postTitle.value,
        body: postContent.value,
        userId: 3
    }
    console.log(body)
    // Sending post requiest with Axios, and passing body
    axios.request({
        url: `https://jsonplaceholder.typicode.com/posts`,
        method: `POST`,
        body: body
    }).then(create_success).catch(create_failure);


}

// Listeners
button.addEventListener('click', createPost);



