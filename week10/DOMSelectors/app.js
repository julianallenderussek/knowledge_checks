
// querySelector -> select JUST first matching tag
let first_p_tag = document.querySelector('p');
console.log(first_p_tag);

// I am using # because the h1 has an id -> check index.html
let first_title = document.querySelector('#title-tag-one');
console.log(first_title);

// All tags with a specific class name
let p_tags_with_class = document.querySelectorAll('.paragraph');
console.log(p_tags_with_class);

// I am using # because the h1 has an id -> check index.html
let second_title = document.getElementById('title-tag-two');
console.log(second_title);

// I am using # because the h1 has an id -> check index.html
let p_tags_with_class_again = document.getElementsByClassName('paragraph');
console.log(p_tags_with_class_again);