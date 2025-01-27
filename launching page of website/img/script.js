var countDownDate = new Date("feb 03, 2025 00:00:00").getTime();
var x =  setInterval(function(){
    var now = new Date().getTime();
    var distance = countDownDate - now;
   
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById("days").innerHTML = days;
document.getElementById("hours").innerHTML = hours;
document.getElementById("Minutes").innerHTML = minutes;
document.getElementById("Seconds").innerHTML = seconds;

if(distance < 0){
clearInterval(x);
document.getElementById("days").innerHTML = "00";
document.getElementById("hours").innerHTML = "00";
document.getElementById("Minutes").innerHTML = "00";
document.getElementById("Seconds").innerHTML = "00";
}

}, 1000);