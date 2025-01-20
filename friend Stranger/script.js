 var istatus = document.querySelector('h5');
 var addFriend= document.querySelector('#Add');
 var check = 0;
 addFriend.addEventListener('click', function(){
    if(check==0){
        istatus.innerHTML = "Friend";
        istatus.style.color = "green";
           check = 1; 
    }
    else{
        istatus.innerHTML = "Stranger";
        istatus.style.color = "Red";
        check = 0;
    }
    if(check==1){
        addFriend.innerHTML = "Remove";
    }
    else{
        addFriend.innerHTML = "Add Friend";
    }
 });
