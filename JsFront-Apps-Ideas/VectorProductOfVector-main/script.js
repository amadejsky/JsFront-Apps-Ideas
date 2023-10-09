let f = document.getElementById("f");//every div
let se = document.getElementById("s");
let t = document.getElementById("t");
let fo = document.getElementById("fo");
let fi = document.getElementById("fi");
let si = document.getElementById("si");
let sev = document.getElementById("se");
let ei = document.getElementById("ei");
let ni = document.getElementById("ni");
let te = document.getElementById("te");
let el = document.getElementById("el");
let tv = document.getElementById("tv");
let th = document.getElementById("th");
let ft = document.getElementById("ft");
let fft = document.getElementById("fft");
let st = document.getElementById("st");  

//function to generate
function add(){
    let symbols ="ABCDEFGHIJKLMNOUPRSVWZXY0123456789アァカサタナハマヤャラワガザダバパピビジヂギヰリミヒニチシキィイウゥクスツヌフムユュルグズヅブプペベデゼゲトホモボポ";
    let s=[];
    s=symbols;

    f.innerHTML+=s[Math.floor(Math.random()*s.length)];   //attached to every div
    se.innerHTML+=s[Math.floor(Math.random()*s.length)];
    t.innerHTML+=s[Math.floor(Math.random()*s.length)];
    fo.innerHTML+=s[Math.floor(Math.random()*s.length)];
    fi.innerHTML+=s[Math.floor(Math.random()*s.length)];
    si.innerHTML+=s[Math.floor(Math.random()*s.length)];
    sev.innerHTML+=s[Math.floor(Math.random()*s.length)];
    ei.innerHTML+=s[Math.floor(Math.random()*s.length)];
    ni.innerHTML+=s[Math.floor(Math.random()*s.length)];
    te.innerHTML+=s[Math.floor(Math.random()*s.length)];
    el.innerHTML+=s[Math.floor(Math.random()*s.length)];
    tv.innerHTML+=s[Math.floor(Math.random()*s.length)];
    th.innerHTML+=s[Math.floor(Math.random()*s.length)];
    ft.innerHTML+=s[Math.floor(Math.random()*s.length)];
    fft.innerHTML+=s[Math.floor(Math.random()*s.length)];
    st.innerHTML+=s[Math.floor(Math.random()*s.length)];


}

setInterval(add,75);

// //DEBUGGING STORY
// // console.log(1);
// //     console.log(symbols.value);
// //     console.log(toString(symbols));
// //     console.log(s[Math.floor(Math.random()*s.length)]);
console.log(f.scrollHeight);
console.log(f.offsetHeight);
let con = document.getElementById("con");
// console.log(con.scrollHeight)
// console.log(con.offsetHeight);
let divId = ["f","s","t","fo","fi","si","se","ei","ni","te","el","tv","th","ft","fft","st"];

function clear(){
        // if(f.scrollHeight>f.offsetHeight){
        divId.forEach(function(id){
			let div = document.getElementById(id);
			div.innerHTML="";
		});
		
        f.style.animation="animate 2s infinite linear";
        console.log("im working");
    // };
};

setInterval(clear,3250);

//counting mechanism

//decl

let subm = document.getElementById("subm");

let a1 = document.getElementById("a1")
let a2 = document.getElementById("a2")
let a3 = document.getElementById("a3")

let b1 = document.getElementById("b1")
let b2 = document.getElementById("b2")
let b3 = document.getElementById("b3")

let res = document.getElementById("result")

let i =0;
let j=0;
let k=0;

//


subm.addEventListener("click",function(e){
    console.log(b2.value);
    i=((a2.value*b3.value)-(a3.value*b2.value));
    j=-((a1.value*b3.value)-(a3.value*b1.value));
    k=((a1.value*b2.value)-(a2.value*b1.value));
    res.innerHTML=i;
    res.innerHTML+=",";
    res.innerHTML+=j;
    res.innerHTML+=",";
    res.innerHTML+=k;

});

(function scroll(text){
    document.title=text;
    setTimeout(function(){
            scroll(text.substr(1)+text.substr(0,1));
    },500);


});

