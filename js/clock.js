const clock = document.querySelector("#clock");

function getTime(){
    const date = new Date();
    const hour = String(date.getHours()).padStart(2,"0");
    const minute = String(date.getMinutes()).padStart(2,"0");
    const second = String(date.getSeconds()).padStart(2,"0");
    clock.innerHTML = `${hour}:${minute}:${second}`;
}

getTime();
setInterval(getTime,1000); //1초마다 getTime실행