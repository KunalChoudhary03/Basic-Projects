// let img = document.querySelector("img");

// let imgsrc =  img.getAttribute("src");
//     console.log(imgsrc);
//     let set  = img.setAttribute("src","https://plus.unsplash.com/premium_photo-1676923901465-14903a3fcc68?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D");

let btn = document.querySelector("button");
let img1 = document.querySelector("#img1");
let img2 = document.querySelector("#img2");

btn.addEventListener("click",function(){
 let img1Src = img1.getAttribute("src");
let img2Src = img2.getAttribute("src");
img1.setAttribute("src",img2Src);
img2.setAttribute("src",img1Src);
})


// let h1 = document.createElement("h1");
// h1.innerHTML = "Hello World!";
// document.body.appendChild(h1);



// let img  = document.createElement("img");
// img.setAttribute("src","https://images.unsplash.com/photo-1742328517290-d76a8a8c9611?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMTN8fHxlbnwwfHx8fHw%3D");
// img.style.height="200px"
// document.body.appendChild(img);