function openFeatures(){
    let  allElem = document.querySelectorAll(".elem");
let allFullElems =  document.querySelectorAll(".fullElem");
let btn = document.querySelectorAll(".back");


allElem.forEach(function(elem){
    elem.addEventListener("click",function(){
       allFullElems[elem.id].style.display = "block"
    })
})

// allFullElemsBackBtn.forEach(function(back){
// back.addEventListener('click',function(){
//      allFullElems[back.id].style.display = "none";
// })
// })

btn.forEach((btn)=>{
btn.addEventListener('click',function(){
    allFullElems[btn.id].style.display = "none";
})
})

}
openFeatures();

let form =  document.querySelector(".addTask form");
let taskInput  = document.querySelector(".addTask form input");
let taskDetailsInput = document.querySelector("addTask form textarea");
let taskCheckbox  = document.querySelector("addTask form #check");

let currentTask = [
    {
        task : "mandir jao",details : "Hanuman ji walw",
        imp:true
    },
    {
        task : "recording karo",details : "cohort k liye ",
        imp:true
    },
    {
        task : "Lunch at 2 PM ",details : "nahi to mammi datengi",
        imp:false
    }
]
// form.addEventListener("submit",function(e){
//     e.preventDefault();

// }
// )

let allTask = document.querySelector(".allTask");
