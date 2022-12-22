
window.addEventListener("load",function(){

    let singleSec = document.querySelector(".singleSec");
    let decimalSec = document.querySelector(".decimalSec");
    let singleMin = document.querySelector(".singleMin");
    let decimalMin = document.querySelector(".decimalMin");
    let startTimerBtn = document.querySelector(".startTimerBtn")
    let stopTimerBtn = document.querySelector(".stopTimerBtn")

    let intervalTimerId;

    startTimerBtn.onclick = function(){
        if(!intervalTimerId){
            intervalTimerId = countTimer(singleSec, decimalSec, singleMin, decimalMin);
        }

    }

    stopTimerBtn.onclick = function(){

        clearInterval(intervalTimerId);
        intervalTimerId = 0
    }    

})