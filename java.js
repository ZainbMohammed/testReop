let turn = 'X';
let title = document.querySelector(".title");


let items = document.querySelectorAll(".squar");

setTimeout(function(){
    title.innerHTML = `${turn} will start`;

},4000)
// console.log(items.length);
for(let i = 1; i <= items.length; i++ )
{
    let item = document.getElementById("item"+i);
    item.onclick = function()
    {
        if(turn === 'X' && item.innerHTML == ''){
            item.innerHTML = 'X';
            title.innerHTML = turn;
            turn = 'O';
        }
        else if (turn === 'O' && item.innerHTML == '') {
    
            item.innerHTML = 'O';
            title.innerHTML = turn;
            turn = 'X';
       }
       winer();
       
   }  
   
}

// let e = [];
// e= items.innerHTML
// console.log(e);
// // items.forEach((e) => console.log(e));
// setTimeout(function () {console.log(items[0].innerHTML);
//     console.log(items[0]);},5000);

// if(items[0].innerHTML === items[1].innerHTML === items[2].innerHTML){
//     console.log("winnwer");
// }
let iswiner = false;
function winer(){
    if(compare(0,1,2) === true ){
        iswiner = true;
        console.log(items[0].innerHTML+" winner");
        return ;
        
    }
    if(compare(3,4,5) === true){
        iswiner = true;
        console.log(turn+" winner");
    }
    if(compare(6,7,8) === true){
        iswiner = true;
        console.log(turn+" winner");
    }
    if(compare(0,3,6) === true ){
        iswiner = true;
        console.log(turn+" winner");
    }
    if(compare(1,4,7) === true){
        iswiner = true;
        console.log(turn+" winner");
    }
    if(compare(2,5,8) === true){
        iswiner = true;
        console.log(turn+" winner");
    }
    if(compare(0,4,8) === true){
        iswiner = true;
        console.log(turn+" winner");
    }
    if(compare(2,4,6) === true ){
        iswiner = true;
        console.log(turn+" winner");
    }
}
function compare(n1,n2,n3){
    if (items[n1].innerHTML === "" ||  items[n2].innerHTML === "" || items[n3].innerHTML === ""){
        return false;
    }
    else{
        if(items[n1].innerHTML === items[n2].innerHTML && items[n2].innerHTML === items[n3].innerHTML){
            title.innerHTML = `${items[n1].innerHTML} Is Winner`;
            items[n1].style.backgroundColor = "#000";
            items[n2].style.backgroundColor = "#000";
            items[n3].style.backgroundColor = "#000";
            setInterval(() => {
            title.innerHTML += ".";

            }, 1000);
            setTimeout(function(){location.reload()},3000);    
            return true;
        }
        else{
            return false;
        }
    }   
}

