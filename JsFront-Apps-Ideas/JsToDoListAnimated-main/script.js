let input = document.getElementById("inp");
let button = document.getElementById("sub");
let list = document.querySelector('.todo');

button.addEventListener('click',function(event){
    var entered = document.createElement('p');
    entered.innerText = input.value;
    list.appendChild(entered);
    input.value="";
    entered.addEventListener('click',function(event){
        entered.style.textDecoration = "line-through";
    });
    entered.addEventListener('dblclick',function(event){
        list.removeChild(entered);
    });

    
});

