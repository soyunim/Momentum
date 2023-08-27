const btn = document.querySelector("#btn");
const h1 = document.querySelector("#hello");
const bg = document.body;

function handleTitleClick(){
    if(h1.style.color=="black" && bg.style.backgroundColor=="white"){
        h1.style.color="white";
        bg.style.backgroundColor="black";
        h1.innerHTML= "Black Mode!";
    }
    else{
        h1.style.color="black";
        bg.style.backgroundColor="white";
        h1.innerHTML= "Light Mode!";
    }
}

btn.addEventListener("click", handleTitleClick);