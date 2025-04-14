// let arr = [10,20,30,40,50,60];
// arr.forEach(function(element,index){
//     console.log(index,element);
     
// });

let arr = [
    {
        user:"Salman",
        age : 20,
        img : "https://images.unsplash.com/photo-1727798450000-fd0e6e81c6b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNhbG1hbiUyMGtoYW58ZW58MHx8MHx8fDA%3D ",
        marid : "married",
        istatus : "Stranger"
    },
    {
        user: "sachin",
        age : 27,
        img: "https://images.unsplash.com/photo-1705866000578-b3539e588f46?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNhbG1hbiUyMGtoYW58ZW58MHx8MHx8fDA%3D",
        marid : "Unmarried",
        istatus : "Stranger"
    },
    {
      user: "rahul",
     age : 30,
     img : "https://images.unsplash.com/photo-1627060770557-e5d4581f6b61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNhbG1hbiUyMGtoYW58ZW58MHx8MHx8fDA%3D",
     marid : "married",
     istatus : "Stranger"
    }
]
function heroFunction(){
    let sum = '';
arr.forEach(function(element,idx){
 sum +=  ` <div class="main">
 <div class="card">
        <img src="${element.img} " alt="">
        <h1>${element.user}</h1>
        <h5>${element.age}</h5>
        <h4>${element.marid}</h4>
        <h5>${element.istatus}</h5>
        <button id = ${idx}>Add Friend</button>
    </div></div>`
})    
let body = document.querySelector('body');
body.innerHTML = sum;

}

heroFunction();
main.addEventListener('click',function(dets){
    var gold = arr[dets.target.id];
    gold.istatus = "Friend";
    heroFunction();
})