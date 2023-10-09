const div1 = document.getElementById("1");
const para = div1.querySelector("p");
div1.addEventListener("click", tic);                                              // Field 1
div1.addEventListener("dblclick", tac);
function tic(e){
    para.innerHTML="<br><br>X</br>";
};
function tac(e){
    para.innerHTML="<br><br>O</br>";
};

const div2 = document.getElementById("2");
const para2 = div2.querySelector("p");

div2.addEventListener("click", tic2);                                           //Field 2
div2.addEventListener("dblclick", tac2);

function tic2(e){
    para2.innerHTML="<br><br>X</br>";
};
function tac2(e){
    para2.innerHTML="<br><br>O</br>";
};


const div3 = document.getElementById("3");
const para3 = div3.querySelector("p");

div3.addEventListener("click", tic3);                                           //Field 3
div3.addEventListener("dblclick", tac3);
function tic3(e){
    para3.innerHTML="<br><br>X</br>";
};
function tac3(e){
    para3.innerHTML="<br><br>O</br>";
};


const div4 = document.getElementById("4");
const para4 = div4.querySelector("p");

div4.addEventListener("click", tic4);                                          //Field 4
div4.addEventListener("dblclick", tac4);
function tic4(e){
    para4.innerHTML="<br><br>X</br>";
};
function tac4(e){
    para4.innerHTML="<br><br>O</br>";
};

const div5=document.getElementById("5");
const para5=div5.querySelector("p");
div5.addEventListener("click",tic5);
div5.addEventListener("dblclick",tac5);                                        //Field 5
function tic5(e){
    para5.innerHTML="<br><br>X</br>";
};
function tac5(e){
    para5.innerHTML="<br><br>O</br>";
};

const div6 = document.getElementById("6");
const para6 = div6.querySelector("p");
div6.addEventListener("click", tic6);                                              // Field 6
div6.addEventListener("dblclick", tac6);
function tic6(e){
    para6.innerHTML="<br><br>X</br>";
};
function tac6(e){
    para6.innerHTML="<br><br>O</br>";
};

const div7 = document.getElementById("7");
const para7 = div7.querySelector("p");

div7.addEventListener("click", tic7);                                           //Field 7
div7.addEventListener("dblclick", tac7);

function tic7(e){
    para7.innerHTML="<br><br>X</br>";
};
function tac7(e){
    para7.innerHTML="<br><br>O</br>";
};


const div8 = document.getElementById("8");
const para8 = div8.querySelector("p");

div8.addEventListener("click", tic8);                                          //Field 8
div8.addEventListener("dblclick", tac8);
function tic8(e){
    para8.innerHTML="<br><br>X</br>";
};
function tac8(e){
    para8.innerHTML="<br><br>O</br>";
};


const div9 = document.getElementById("9");
const para9 = div9.querySelector("p");

div9.addEventListener("click", tic9);                                          //Field 9
div9.addEventListener("dblclick", tac9);
function tic9(e){
    para9.innerHTML="<br><br>X</br>";
};
function tac9(e){
    para9.innerHTML="<br><br>O</br>";
};

//if(para.innerHTML="<br><br>X</br>" || "<br><br>O</br>" & para2.innerHTML="<br><br>X</br>" || "<br><br>O</br>" & para3.innerHTML="<br><br>X</br>" || "<br><br>O</br>"){
//alert("X wins!");
//}