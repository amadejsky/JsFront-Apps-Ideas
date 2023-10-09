let d = document.getElementById("days");
let h = document.getElementById("hours");
let m = document.getElementById("minutes");
let s = document.getElementById("seconds");
let n = document.getElementById("new");



function diff(){
    const current = new Date().getFullYear();
console.log(current);

const next = new Date(`January 01 ${current+1} 00:00:00`);
console.log(next);

const now = new Date();



    const result= next - now;
    console.log(result);

    const sr = Math.floor(result/1000)%60;
    
    const mr = Math.floor(result/1000/60)%60;

    const hr = Math.floor(result/1000/60/60)%24;

    const dr = Math.floor(result/1000/60/60/24);

    // console.log(sr,mr,hr,dr);
    n.innerHTML=next.getFullYear();
    d.innerHTML=dr;
    h.innerHTML=hr;
    m.innerHTML=mr;
    s.innerHTML=sr;
};
var interval = setInterval(diff,1000);
diff();