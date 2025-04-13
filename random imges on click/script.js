let btn = document.querySelector("button");
let body = document.querySelector("body")
let imges = ["img/sher.webp","img/titli.webp","img/sitafal.webp","img/ladki.webp"];
    btn.addEventListener("click",function(){
        let num =  Math.floor(Math.random ()*imges.length);
    let winner = imges[num];
   let x =  Math.random()*90
   let y =  Math.random()*90
   let rot =  Math.random()*360
    let img = document.createElement("img");
    img.setAttribute("src",winner);
    img.style.height = "100px";
    img.style.left = x + "%";
    img.style.top = y + "%";
    img.style.rotate = rot + "deg";
    img.style.position = "absolute";
    body.appendChild(img);
})