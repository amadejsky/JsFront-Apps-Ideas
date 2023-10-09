var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var bodyHtml = document.getElementById("bb");

function gradient(){
    bodyHtml.style.background = "linear-gradient(to right,"+color1.value+","+color2.value+")";
    h3.textContent=bodyHtml.style.background+";";
}

color1.addEventListener("input",gradient);
color2.addEventListener("input",gradient);

var h3 = document.querySelector(".css");

