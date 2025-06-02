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
