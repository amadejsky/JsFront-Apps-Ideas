// var buttons = document.getElementById("buttons");
var display = document.getElementById("display");
let buttons = Array.from(document.getElementsByClassName("button"));
// console.log(buttons);
buttons.map(button =>{
    // console.log(button);
    button.addEventListener("click", (e) =>{
        // console.log(e.target.innerHTML);
        // display.innerHTML+=e.target.innerHTML;
        switch(e.target.innerHTML){
            default:
                display.innerHTML+=e.target.innerHTML;
                break;
            case "C":
                display.innerHTML="";
                break;
            case "←":
                if(display.innerHTML){
                    display.innerHTML=display.innerHTML.slice(0,-1);
                }
                break;
                case "=":
                    try{
                        display.innerHTML=eval(display.innerText);
                    }catch{
                        display.innerHTML="Invalid!"
                    }
                    
                    break;

        }
    })
});

var mode = document.querySelector('.mode');


let cont = document.querySelector(".cont");
let equal = document.getElementById("equal");

mode.addEventListener("click",function(){
    // console.log("clikc")
    document.body.style.backgroundColor = "#192a56" ;
    cont.style.backgroundColor = "#192a56" ;
    display.style.borderColor = "#00a8ff";

    buttons.map(button=>{
        button.style.borderColor = "#00a8ff";
        button.style.color="white";
    });
    display.style.color = "white";
    equal.style.backgroundColor = "red";
    
});

mode.addEventListener("dblclick",function(){
    document.body.style.backgroundColor = "white" ;
    cont.style.backgroundColor = "white" ;
    display.style.borderColor = "#FE5C36";

    buttons.map(button=>{
        button.style.borderColor = "#FE5C36";
        button.style.color="black";
    });
    display.style.color = "black";
    equal.style.backgroundColor = "#54AFBC";
    
})

