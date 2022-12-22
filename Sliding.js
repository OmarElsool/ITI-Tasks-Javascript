
window.addEventListener("load",function(){

    let startSlidingBtn = document.querySelector(".slidingBtn");
    let stopSlidingBtn = document.querySelector(".stopBtn");
    let nextSlidingBtn = document.querySelector(".nextBtn");
    let previousSlidingBtn = document.querySelector(".previousBtn")
    let imgToSlide = this.document.querySelector(".img-sliding");
    
    let intervalId;

    nextSlidingBtn.onclick = function(){
        nextSlide(imgToSlide);
    }

    previousSlidingBtn.onclick = function(){
        previousSlide(imgToSlide);
    }

    startSlidingBtn.onclick = function(){
        if(!intervalId){
            intervalId = startSliding(imgToSlide);
        }
    };

    stopSlidingBtn.onclick = function(){
        clearInterval(intervalId);
        intervalId = 0
    }
})



