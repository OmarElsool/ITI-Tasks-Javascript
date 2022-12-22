const ArrayImg = function(){
    return ["images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg","images/5.jpg","images/6.jpg","images/7.jpg","images/8.jpg"]
}

const findImgPosInArr = function(imgToSlice, arrayToSearch){

    let imgNameIndex = imgToSlice.src.indexOf("images"); //bcs of 127.0.0.0/images/1.jpg
    let imgNameSlice = imgToSlice.src.slice(imgNameIndex); // => images/1.jpg
    let imgPosInArray = arrayToSearch.indexOf(imgNameSlice); // find  => images/1.jpg Pos in array

    return imgPosInArray;

}

const startSliding = function(ImgObj){
    
    let imgToChange = ImgObj;

    let imgArray = ArrayImg();
    
    imgPosInArray = findImgPosInArr(imgToChange,imgArray);

    let counter = imgPosInArray;

    let intervalId = setInterval(()=>{
        counter++
        if(counter > imgArray.length - 1){
            counter = 0
        }
        imgToChange.src = imgArray[counter];
        
    },1000)
    return intervalId;

}

const stopSliding = function(id){
    clearInterval(id);
}

const nextSlide = function(ImgObj){

    let imgToChange = ImgObj;
    let imgArray = ArrayImg();

    let imgPosInArray = findImgPosInArr(imgToChange,imgArray);

    let counter = imgPosInArray;
    counter++;
    if(counter > imgArray.length - 1){
        counter = 0
    }

    imgToChange.src = imgArray[counter];

}

const previousSlide = function(ImgObj){

    let imgToChange = ImgObj;
    let imgArray = ArrayImg();

    let imgPosInArray = findImgPosInArr(imgToChange,imgArray);

    let counter = imgPosInArray;
    counter--;

    if(counter < 0){
        counter = (imgArray.length - 1);
    }

    imgToChange.src = imgArray[counter];
}


const countTimer = function(singleSec, decimalSec, singleMin, decimalMin){

    let singleSecCounter = singleSec.textContent;
    let decimalSecCounter = decimalSec.textContent;
    let singleMinCounter = singleMin.textContent;
    let decimalMinCounter = decimalMin.textContent;

    let intervalTimerId = setInterval(()=>{

        singleSecCounter++;
        singleSec.innerText = singleSecCounter;
    
        if(singleSec.textContent > 9){
            singleSecCounter = 0;
            singleSec.innerText = 0;
            decimalSecCounter++;
            decimalSec.innerText = decimalSecCounter;
        }
    
        if(singleSecCounter == 9 && decimalSecCounter == 5){
            singleSecCounter = 0;
            singleSec.innerText = 0;
            decimalSecCounter = 0;
            decimalSec.innerText = 0;
            singleMinCounter++;
            singleMin.innerText = singleMinCounter;
        }
    
        if(singleMinCounter > 9){
            singleMinCounter = 0;
            singleMin.innerText = 0;
            decimalMinCounter++;
            decimalMin.innerText = decimalMinCounter;
        }
    
        if(decimalMinCounter > 9){
            singleSecCounter = 0;
            singleSec.innerText = 0;
            decimalSecCounter = 0;
            decimalSec.innerText = 0;
            singleMinCounter = 0;
            singleMin.innerText = 0;
            decimalMinCounter = 0;
            decimalMin.innerText = 0;
        }
        
    },1000)

    return intervalTimerId;
}