const button = document.getElementById("get-location-button");
var change = document.querySelector(".change");
function gotLocation(position){
change.innerHTML = `Longitude:${position.coords.longitude}<br>
Latitude:${position.coords.latitude}`

}
function failedToGetLocation(){
    console.log("There was some issue");
}
button.addEventListener("click", async()=>{
navigator.geolocation.getCurrentPosition( gotLocation, failedToGetLocation)
});