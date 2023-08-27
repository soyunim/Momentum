const btn = document.querySelector("#btn");
const h1 = document.querySelector("#hello");
const bg = document.body;

function handleTitleClick(){
    if(h1.className === "active"){
        h1.className = "";
        bg.className = "";
        h1.innerHTML= "Light Mode!";
    }
    else{
        h1.className = "active";
        bg.className = "active";
        h1.innerHTML= "Black Mode!";
    }
}

btn.addEventListener("click", handleTitleClick);