const btn = document.querySelector("#btn");
const h1 = document.querySelector("#hello");
const bg = document.body;

function handleTitleClick(){
    const clickedClass ="clicked";

    if(h1.classList.contains(clickedClass)){
        h1.classList.remove(clickedClass);
        bg.classList.remove(clickedClass);
        h1.innerHTML= "Light Mode!";
    }
    else{
        h1.classList.add(clickedClass);
        bg.classList.add(clickedClass);
        h1.innerHTML= "Black Mode!";
    }
}

btn.addEventListener("click", handleTitleClick);