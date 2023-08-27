const loginInput = document.querySelector("#login-form input");
const loginBtn = document.querySelector("#login-form Button");

function onClickLoginBtn(){
    console.log("click!");
}

loginBtn.addEventListener("click",onClickLoginBtn);