let btn = document.querySelector("button");
let percent = document.querySelector("#percent");
let green = document.querySelector(".green");
let grow = 1;
btn.addEventListener("click",function(){
btn.disabled = true;
    let int = setInterval(() => {
        percent.innerHTML = `${grow}%`;
        grow++;
        green.style.width = grow+"%"
    }, 50);

 setTimeout(()=>{
clearInterval(int)
btn.innerHTML = "Downloaded";
btn.style.opacity = "0.45";
   },5001)
   
})
