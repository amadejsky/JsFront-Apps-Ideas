const symbols = ["1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
const widget = document.getElementById("widget");
const btn = document.getElementById("onlyB");
const content = document.getElementById("content");
btn.addEventListener('click',function(){
    console.log("//debug");
    let hexText="#";
    for(let i=0;i<6;i++){
        hexText+=symbols[random()];
    }
    widget.innerHTML=hexText;
    document.body.style.backgroundColor=hexText;
})



function random(){
    return Math.floor(Math.random()*symbols.length)
}