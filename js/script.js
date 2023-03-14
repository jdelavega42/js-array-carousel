// !const from HTML
const container = document.querySelector(".content");
const chevronUp = document.querySelector(".up");
const chevronDown = document.querySelector(".down");
// !ARRAY
// state img array
const pictureArray = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg"];
// print picture for every item in array
for (let i = 0; i < pictureArray.length; i++) {
    container.innerHTML += `<div class="picture"><img src="${pictureArray[i]}" alt=""></div>`
}
// get picture element
const itemsArray = document.getElementsByClassName("picture")
// set default active class to single picture element
let activePictureIndex = 3;
console.log(itemsArray[activePictureIndex]);
itemsArray[activePictureIndex].classList.add("active");


// !LOGIC
chevronUp.addEventListener("click", function(){

})

// !OUTPUT