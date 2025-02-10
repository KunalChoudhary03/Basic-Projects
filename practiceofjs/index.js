// let a = "kunal";
// console.log(a.includes("ku"));
// console.log(a.toUpperCase());
// console.log(a.toLowerCase());
// let b = "Please give rs 1000";
// console.log(b.length);
// console.log(b.replace("s","4"));

console.log("Script.js initializing")
// let boxes = document.getElementsByClassName("box")
let boxes = document.querySelector(".container").children

function getRandomColor(){
    let val1 = Math.ceil(0 + Math.random()* 255);
    let val2 = Math.ceil(0 + Math.random()* 255);
    let val3 = Math.ceil(0 + Math.random()* 255);
    return ` rgb(${val1}, ${val2}, ${val3})`
}

Array.from(boxes).forEach(e=>{ 
   e.style.backgroundColor = getRandomColor()
   e.style.color = getRandomColor()
})