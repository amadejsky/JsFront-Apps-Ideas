let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("sec");
function clock(){
  let h = new Date().getHours();
let m = new Date().getMinutes();
let s = new Date().getSeconds();

hours.innerHTML=h;
minutes.innerHTML=m;
seconds.innerHTML=s;  
}

var interval = setInterval(clock, 1000);


var div = document.getElementById("days");
const date = new Date();
var day = date.getDay();

//console.log(day);
//2

function dayName(day){
const name =["Monday","Tuesday","Wednesday",
"Thursday","Friday","Saturday","Sunday"];
div.innerHTML = name[day];                                                                                          //console.log(name[day]);
return name[day];

};

dayName(day);
