// let btn = document.querySelector("button");
// btn.addEventListener("click",function(){
//     // location.href = "https://www.sheryians.com/classroom";
//     // location.reload();
// })

// let a  = location.href;
// console.log(a);

// let btn1 =document.querySelector("#btn1");
// let btn2 =document.querySelector("#btn2");
// btn1.addEventListener("click",function(){
//    history.back();
// })
// btn2.addEventListener("click",function(){
//    history.forward();
// })
// console.log("navigator.onLine");


// Local Storage

// let obj = {user: "Ram",age : 24};
// localStorage.setItem("obj" , "user");
// console.log(obj);
// localStorage.setItem("age" , "23");
// localStorage.getItem("obj");
// localStorage.clear();
// localStorage.removeItem("obj");    

// var users  = [
//     {username : "kunal",
//         age:33, 
//         city :"indore"}
//     ,
//     {username : "shreyansh",
//         age:23, 
//         city :"indore"} ,
//     {username : "sachin",       
//         age:23, 
//         city :"indore"} 
//     ]
    
//     var newUser  = JSON.stringify(users);
//     localStorage.setItem("users",newUser);
// console.log(newUser);

// localStorage.getItem("users");
// let newUser = JASON.parse(newUser);
// console.log(newUser);
// console.log(newUser[0].username);

// console.log(document.cookie);

// 

// let btn = document.querySelector(".btn");
// btn.addEventListener("click",function(){
//     if(document.body.classList.contains("light")){
//         document.body.classList.remove("light");
//         document.body.classList.add("dark");
//     }
//     else{
//         document.body.classList.add("light");
//         document.body.classList.remove("dark");
//     }
// });

let btn  = document.querySelector(".btn");
btn.addEventListener("click",function(){
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
});