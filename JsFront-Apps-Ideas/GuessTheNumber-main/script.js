
let dis = document.getElementById("display");
let btn = document.getElementById("button");

let ran = Math.floor(Math.random()*101);
// console.log(ran);
let counter = 0;
btn.addEventListener("click",function(){
    let inp = Number(document.getElementById("input").value);
    if(inp===ran){
        dis.innerHTML="You guessed ";
    }else if(inp>ran){
        dis.innerHTML="To High!";
        counter++;
    }else if(inp<ran){
        dis.innerHTML="To Low! ";
        counter++;
    };
    let c = document.getElementById("c");
    c.innerHTML=`Its yours ${counter} try`;
   
});

let textC = document.getElementById("t");
let textD = document.getElementsByTagName("span");
let i = 0;
 function changer(){
    textD[i].style.display = "none";
    i = (i+1)%textD.length;
    textD[i].style.display="initial";
   
 };
 setInterval(changer,1000);
