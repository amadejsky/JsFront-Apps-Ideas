const btns = document.querySelectorAll(".btn");
const amount = document.querySelector("#amount");
let number = 0;
btns.forEach(function(btn){
    btn.addEventListener("click",function(e){

        const current = e.currentTarget.classList;
        if(current.contains("decrease")){
            number--;
        }else if(current.contains("increase")){
            number++;
            console.log(number);
        }else{
            number=0;
        }
        if(number>0){
            amount.style.color="#0be881";
        }else if(number<0){
            amount.style.color="#3c40c6";
        }else{
            amount.style.color="#485460";
        }
        amount.textContent=number;

    });
});