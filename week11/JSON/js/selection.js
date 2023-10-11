// Selector for content tag
let pageContent = document.getElementById('content');

let cookie = Cookies.get('user_selection')

if (cookie === undefined) {
    // If I dont have a selection cookie
    console.log("We dont have a cookie")
    pageContent.insertAdjacentHTML('beforeend', '<h2>There is no current selection</h2>')
    pageContent.insertAdjacentHTML('beforeend', '<h3>Please make a selection</h3>')
    pageContent.insertAdjacentHTML('beforeend', '<a href="/index.html">Go to home</a>')
}

if (cookie) {
    // If I have a selection cookie
    console.log("I have a user_selectio cookie");
    let user_selection = JSON.parse(cookie)

    let section =`<section>
        <h1>${user_selection.title}</h1>
        <img src="${user_selection.image_url}"/>
        <p>${user_selection.description}</p>
        <h4>${user_selection.price}</h4>
    </section>`

    pageContent.insertAdjacentHTML('beforeend', section)
}
