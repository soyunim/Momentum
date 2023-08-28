const clock = document.querySelector("#clock");

function getTime(){
    const date = new Date();
    clock.innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

getTime();
setInterval(getTime,1000); //1초마다 getTime실행