setInterval(myFun,1000);
function myFun(){
    let date = new Date();
    let time = date.toLocaleTimeString();
    let date2 = date.toDateString();
    document.getElementById('time').innerHTML = time;
    document.getElementById('date').innerHTML = date2;
}