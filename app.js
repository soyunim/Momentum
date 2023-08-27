const btn = document.querySelector("#btn");
const h1 = document.querySelector("#hello");
const bg = document.body;

function handleTitleClick(){
    const clickedClass ="clicked";

    if(h1.className === clickedClass){
        h1.className = "";
        bg.className = "";
        h1.innerHTML= "Light Mode!";
    }
    else{
        h1.className = clickedClass;
        bg.className = clickedClass;
        h1.innerHTML= "Black Mode!";
    }
}

btn.addEventListener("click", handleTitleClick);