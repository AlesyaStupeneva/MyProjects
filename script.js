//Get stopwatch field
const hourElement = document.querySelector('.hour');
const minuteElement = document.querySelector('.minute');
const secondElement = document.querySelector('.second');
const millisecondElement = document.querySelector('.millisecond');

//Bottons
const startButton = document.querySelector('.start');
const stopButton = document.querySelector('.stop');
const pauseButton = document.querySelector('.pause');
const newCircle = document.querySelector('.circle');



//Listeners

startButton.addEventListener('click', () => {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
    newCircle.disabled = false;
})
pauseButton.addEventListener('click', () => {
    clearInterval(interval);
    
})
stopButton.addEventListener('click', () => {
    clearInterval(interval);
    clearValue();
    newCircle.disabled = true;
})
newCircle.addEventListener('click', () => {
    clearInterval(interval);
    counter++;
    const results = document.querySelector('.results');
    const block = document.createElement('div');
    block.insertAdjacentHTML('afterbegin', ` 
    <div class="table-row">
        <div class="table-cell">Круг ${counter}</div>
        <div class="table-cell">Result: ${hour}:${minute}:${second}:${millisecond}</div>
    </div>
    `);
    // block.innerText = `Result ${counter}: ${hour}: ${minute}:${second}:${millisecond}`;
    results.append(block);
    clearValue();
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
})


//Variables
 let hour = 00;
 let minute = 00;
 let second = 00;
 let millisecond = 00;
 let interval;
 let counter = 0;
 let disabled = true;

 function startTimer() {
     millisecond++
     if(millisecond < 9) {
         millisecondElement.innerText = "0" + millisecond;  
     }
     if(millisecond > 9){
         millisecondElement.innerText = millisecond;
     }
     if(millisecond > 59) {
         second++;
         secondElement.innerText = "0" + second;
         millisecond = 0;
         millisecondElement.innerText = "0" + millisecond;
     }

    if(second < 9) {
        secondElement.innerText = "0" + second;  
    }
    if(second > 9) {
        secondElement.innerText = second;
    }
    if(second > 59) {
        minute++;
        minuteElement.innerText = "0" + minute;
        second = 0;
        secondElement.innerText = "0" + second;
    }

    if(minute < 9) {
        minuteElement.innerText = "0" + minute;  
    }
    if(minute > 9) {
        secondElement.innerText = minute;
    } 
    if(minute > 59) {
        hour++;
        hourElement.innerText = "0" + hour;
        minute = 0;
        minuteElement.innerText = "0" + minute;
    }

    if(hour < 9) {
        hourElement.innerText = "0" + hour;  
    }
    if(hour > 9) {
        hourElement.innerText = hour;
    } 
   
    
 }


 function clearValue () {
    hour = 00;
    minute = 00;
    second = 00;
    millisecond = 00;
    millisecondElement.textContent = "00";
    secondElement.textContent = "00";
    minuteElement.textContent = "00";
    hourElement.textContent = "00";
 }

 function disableBtn() {
     if(disabled) {
         newCircle.disabled = true;
     }
 }
 disableBtn();