const btn = document.querySelector("#btn");
const h1 = document.querySelector("#hello");
const bg = document.body;

function handleTitleClick(){
    h1.classList.toggle("clicked");
    bg.classList.toggle("clicked");
}

btn.addEventListener("click", handleTitleClick);