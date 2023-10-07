let btnCookies = document.getElementById('cookie-btn');
let messageTag = document.getElementById('message');

let checkCookies = Cookies.get('button_clicked')



function clicking(){
    // Function for setting a cookie. Accepts 1. key as string 2. value of cookie as string
    // Check cookies on dev tools in chrome under the applicaiton tab
    Cookies.set( `button_clicked`, `yes`);
    if (checkCookies === 'yes') {
        messageTag.innerHTML = "I have a cookie"
    } else {
        messageTag.innerHTML = "I dont have a cookie"
    }
}


//addEventListener accepts 1. type of event as string 'click', 2. function
btnCookies.addEventListener('click', clicking )