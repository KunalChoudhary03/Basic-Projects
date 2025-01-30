let innerCursor = document.querySelector(".inner-curser");
let outerCursor = document.querySelector(".outer-curser");
document.addEventListener('mousemove',mouseCursor)
function mouseCursor(e){
    let x = e.clientX;
    let y = e.clientY;
    innerCursor.style.left = `${x}px`
    innerCursor.style.top = `${y}px`
    outerCursor.style.left = `${x}px`
    outerCursor.style.top = `${y}px`
   

}