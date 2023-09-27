let p_tags = document.getElementsByClassName('p-tags');
console.log(p_tags);

let p_tags_also = document.querySelectorAll(`.p-tags`);
console.log("p-tags also:", p_tags_also)

let first_p_tag = document.querySelector(`p`);
console.log(first_p_tag)

let third_p_tag = p_tags[2]
console.log(third_p_tag)
// third_p_tag.style.backgroundColor = "red"

function changeToRed(element) {
    element.style.backgroundColor = "red"
}