
var arr = [{dp:"https://imgs.search.brave.com/s-FdOtiJTvkBr0HYUw4f3vZj06rt6KUs5reDU36P13Q/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQx/Nzc1MDA1MS9waG90/by9sYXJnZS1tYW4t/bWFraW5nLWZ1bm55/LXN1cnByaXNlZC1m/YWNlLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz10cXdrQS04/YnpLU1dTeHNFMXNS/VWNGWWo3QjBPZFFp/N1E4d29lRTBoQnZn/PQ",story:"https://imgs.search.brave.com/Rd5I0E67L_9z36_WXwTlg2s8oLNhB_9TCArRIQe0p_k/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9w/b3J0cmFpdC1zZXJp/b3VzLW1hbl8yMy0y/MTQ4Nzc5OTk4Lmpw/Zz9zZW10PWFpc19o/eWJyaWQ"},
    {dp:"https://imgs.search.brave.com/5ltHOoE14KGRNXLLe1UdPcGV2DD2DcbXmNhy5M6fASo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTMz/NTk0MTI0OC9waG90/by9zaG90LW9mLWEt/aGFuZHNvbWUteW91/bmctbWFuLXN0YW5k/aW5nLWFnYWluc3Qt/YS1ncmV5LWJhY2tn/cm91bmQuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPUpTQnB3/VkZtOHZ6MjNQWjQ0/UmpuNzI4TndtTXRC/YV9EWUw3cXhyRVdy/Mzg9",story:"https://imgs.search.brave.com/QeDSsYkjryAHn2Ly4E4WgBhgty5E7OhekJMiRBITaxM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNS8w/NS8wMy8xNC80MC93/b21hbi03NTEyMzZf/NjQwLmpwZw"},
    {dp:"https://imgs.search.brave.com/Zsh3naLabiZAEKb-c_0ejIS05rL8oEVBw8Uols39NCM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY3RmYXNzZXRz/Lm5ldC9ocmx0eDEy/cGw4aHEvdVA5UWRN/ZE5ETEZITkg4MXZj/RlNzLzAzZWRlNGUy/MmUyZGNiN2YzNTBk/YWJmNWIzYWZmMThi/L0RhcmstTmVvbi1H/bG93LVRodW1ibmFp/bC5qcGc",story:"https://imgs.search.brave.com/exkr2ou1qxHTBDhu8N7C-ulJYfTEp-MekMtui3Xe16s/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY3RmYXNzZXRz/Lm5ldC9ocmx0eDEy/cGw4aHEvNzAzZXBZ/amNObjZMa09UZHM1/NXI3RS85MmI2MDQx/MjQ2MmVmZDUzM2I5/ZjllZGI3ZjUxNGQz/MC9DVlJUXzE0NTdf/U3RhcnJ5X05pZ2h0/X0hQX2JhY2tncm91/bmQud2VicD9maXQ9/ZmlsbCZ3PTYwMCZo/PTYwMA"},
    {dp:"https://imgs.search.brave.com/Y8feeFfHephoBpaGqmAcn0GTUxzudzi3xktg3Gmg7zs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTg1/MTM4NjYwL3Bob3Rv/L3BvcnRyYWl0LW9m/LXNlbmlvci1idXNp/bmVzc21hbi1zbWls/aW5nLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz0zSVh5X21N/emFkcGpjb0wwczhL/cVk3MzZqUU1YQjVK/OVdzaHJFYkJORWZ3/PQ",story:"https://imgs.search.brave.com/Z6skdL-Lws_R6KD3C0xwLk7L2WshJZOxMzBqYhtetts/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/d29tYW4tcG9ydHJh/aXQtb24tcGluay1i/cmljay5qcGc_d2lk/dGg9MTAwMCZmb3Jt/YXQ9cGpwZyZleGlm/PTAmaXB0Yz0w"}
];
var stoyian = document.querySelector(".stoyian");
var clutter = "";
arr.forEach(function(elem,idx){
    clutter += `
            <div class="story">
                <img id="${idx}"src="${elem.dp}" alt="">
            </div>`
})
stoyian.innerHTML = clutter; 
stoyian.addEventListener("click",function(dets){
    document.querySelector(".full-screen").style.display = "block"
  document.querySelector(".full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`
  var a = document.querySelector(".username");
  addEventListener("click",function(){
    a.innerHTML = "";
  })
  setTimeout(function(){
a.innerHTML = "Kunal"
  },2000)
  var b = document.querySelector(".elon");
  addEventListener("click",function(){
    b.innerHTML = "";
  })
  setTimeout(function(){
b.innerHTML = "Elon Musk"
  },2000)
  setTimeout(function(){
document.querySelector(".full-screen").style.display = "none";
  },2000)
});


var con = document.querySelector('.likedimg');
var love = document.querySelector('i');
con.addEventListener('dblclick', function() {
   love.style.transform = 'translate(-50%,-50%) scale(1)';
   love.style.opacity = 0.8;
   setTimeout(function() {
       love.style.opacity = 0;
    
   },1000)
  setTimeout(function() {
       love.style.transform = 'translate(-50%,-50%) scale(0)';
    
   },2000)
});
 var a  = document.querySelector(".username");
 
