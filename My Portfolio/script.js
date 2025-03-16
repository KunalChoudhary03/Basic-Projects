
    let flag = 0;
    let b = document.querySelector("ul");

    function myFun() {
        if (flag === 0) {
            b.style.opacity = 1;
            flag = 1;
        } else {
            b.style.opacity = 0;
            flag = 0;
        }
    }
