const questions = document.querySelectorAll(".question");

questions.forEach(function (singleQuestion) {
    const btns = singleQuestion.querySelector(".question-btn");
    btns.addEventListener("click",function(){
        questions.forEach(function(item){
            if(item !== singleQuestion){
                item.classList.remove("show-text");
            }
        });
        singleQuestion.classList.toggle("show-text");
    })
    
});

// questions.forEach(function(questions){
//     const btns = questions.querySelector(".question-btn");
//     btns.addEventListener("click",function(){
//         questions.classList.toggle("show-text");
//     });
// });