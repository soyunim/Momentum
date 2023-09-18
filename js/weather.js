function onGeoSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(latitude, longitude);
}
function onGeoError(){
    alert("Can't find");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);