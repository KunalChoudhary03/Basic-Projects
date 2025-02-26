let flag = 0;
function myFun() {

    if(flag==0){
let b = document.querySelector(".ul");
b.style.opacity = 1;
flag = 1 ;

}
else{
let b = document.querySelector(".ul");
b.style.opacity = 0;
flag = 0;

}
}