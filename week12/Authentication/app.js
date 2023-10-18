let emailInput = document.getElementById('email-input');
let passwordInput = document.getElementById('password-input');
let submitBtn = document.getElementById('submit-btn');
// let errorMsg = document.getElementById('error-message');


function sendLoginRequest() {
    console.log("Sending Login Request")
    const email = emailInput.value
    const password  = passwordInput.value

    const body = {
        email: email,
        password: password
    }
    console.log(body)

    function success(response) {
        console.log(response)
        if (response.status === 200) {
            console.log("Logged in")
            const token = response.data.token
            Cookies.set("authToken", token)
            window.location.href = "http://localhost:5500/pages/dashboard.html";
        }
        console.log('All Good');
    }

    function failure(error) {
        console.log('We have an error', error)
        document.getElementById('error-message').innerText = "Error making your request" 
    }

    const url = 'https://reqres.in/api/login'

    // const url = 'https://reqres.in/apasdfasdfi/asdfasdfasdf'
    
    axios.post(url , body) 
    // If everthing is good, we execute success  
    .then(success)
    // If something went bad, we execute failure
    .catch(failure);

}

submitBtn.addEventListener('click', sendLoginRequest)
