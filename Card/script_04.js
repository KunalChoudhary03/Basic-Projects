// let arr = [10,20,30,40,50,60];
// arr.forEach(function(element,index){
//     console.log(index,element);
     
// });

let arr = [
    {
        user: "Salman",
        age: 20,
        img: "https://i.pinimg.com/474x/57/ca/ed/57caed7159cb4b90f2f54176c44cf839.jpg",
        marid: "Married",
        istatus: "Stranger"
    },
    {
        user: "Aman",
        age: 22,
        img: "https://i.pinimg.com/474x/1a/61/7e/1a617e1d8a03cb024a16c3f25f262464.jpg",
        marid: "Unmarried",
        istatus: "Stranger"
    },
    {
        user: "Ravi",
        age: 25,
        img: "https://i.pinimg.com/474x/2f/71/02/2f710272d1a52f45fd45b7846e3c7996.jpg",
        marid: "Married",
        istatus: "Stranger"
    },
    {
        user: "Karan",
        age: 28,
        img: "https://i.pinimg.com/474x/9d/94/c8/9d94c852f8a568ca81e18e0a1944ea3c.jpg",
        marid: "Unmarried",
        istatus: "Stranger"
    },
    {
        user: "Raj",
        age: 30,
        img: "https://i.pinimg.com/474x/a0/ac/bf/a0acbf53848994b611d04e10f991bac1.jpg",
        marid: "Married",
        istatus: "Stranger"
    },
    {
        user: "Ankit",
        age: 24,
        img: "https://i.pinimg.com/474x/87/d4/38/87d4385b03ccc69c0ce622e4e0f28d4e.jpg",
        marid: "Unmarried",
        istatus: "Stranger"
    },
    {
        user: "Vivek",
        age: 27,
        img: "https://i.pinimg.com/474x/13/12/8e/13128ee04a9448dd05f46de3ab063636.jpg",
        marid: "Married",
        istatus: "Stranger"
    },
    {
        user: "Deepak",
        age: 26,
        img: "https://i.pinimg.com/474x/d0/03/f5/d003f592f9d58ca5b3d6871ee28a0cd2.jpg",
        marid: "Unmarried",
        istatus: "Stranger"
    },
    {
        user: "Nikhil",
        age: 23,
        img: "https://i.pinimg.com/474x/b0/e6/11/b0e611afd4e431652ab1dedda0e18cc2.jpg",
        marid: "Unmarried",
        istatus: "Stranger"
    },
    {
        user: "Suresh",
        age: 29,
        img: "https://i.pinimg.com/474x/87/86/00/87860074e6e60ebd19815c738b34ac43.jpg",
        marid: "Married",
        istatus: "Stranger"
    }
];


function heroFunction(){
    let sum = '';
    arr.forEach(function(element, idx){
        sum +=  ` 
        <div class="main">
            <div class="card">
                <img src="${element.img}" alt="">
                <h1>${element.user}</h1>
                <h5>${element.age}</h5>
                <h4>${element.marid}</h4>
                <h5>${element.istatus}</h5>
                <button class="add-btn" data-index="${idx}">Add Friend</button>
            </div>
        </div>`;
    });    

    document.body.innerHTML = sum;

    document.querySelectorAll('.add-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            let index = this.getAttribute('data-index');
            if(arr[index].istatus == "Stranger"){
                arr[index].istatus = "Friend";
            }
            else{
                arr[index].istatus = "Stranger";
            }
            heroFunction(); 
        });
    });
}

heroFunction();
