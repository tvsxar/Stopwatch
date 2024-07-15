const stopwatch = document.querySelector('.stopwatch');
const resetBtn = document.querySelector('.reset-button');
const ms = document.querySelector('#ms');
const sec = document.querySelector('#sec');
const min = document.querySelector('#min');

let isOn = false;
let interval;
let countMs = 0;
let countSec = 0;
let countMin = 0;


function start() {
    countMs++;
    ms.innerHTML = countMs < 10 ? '0' + countMs : countMs;
    if(countMs == 10) {
        countMs = 0;
        countSec++;
        sec.innerHTML = countSec < 10 ? '0' + countSec : countSec;
    }

    if(countSec == 60) {
        countSec = 0;
        countMin++;
        min.innerHTML = countMin < 10 ? '0' + countMin : countMin;
    }

    isOn = true;
}

function stop() {
    clearInterval(interval);

    isOn = false;
}

stopwatch.addEventListener('click', () => {
    if(!isOn) {
        resetBtn.classList.add('none');
        interval = setInterval(start, 100);
    } else {
        stop();
        resetBtn.classList.remove('none');
    }
})

resetBtn.addEventListener('click', () => {
    ms.innerHTML = '00';
    sec.innerHTML = '00';
    min.innerHTML = '00';

    countMs = 0;
    countSec = 0;
    countMin = 0;

    resetBtn.classList.add('none');
})