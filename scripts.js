let startTime, updatedTime, difference, tInterval;
let running = false;

const display = document.getElementById('display');
const startButton = document.getElementById('startButton');
const pauseButton = document.getElementById('pauseButton');
const resetButton = document.getElementById('resetButton');
const lapButton = document.getElementById('lapButton');
const laps = document.getElementById('laps');

function startStopwatch() {
    if (!running) {
        startTime = new Date().getTime();
        tInterval = setInterval(getShowTime, 10);
        running = true;
        startButton.style.display = 'none';
        pauseButton.style.display = 'inline';
        lapButton.style.display = 'inline';
    }
}

function pauseStopwatch() {
    if (running) {
        clearInterval(tInterval);
        running = false;
        startButton.style.display = 'inline';
        pauseButton.style.display = 'none';
    }
}

function resetStopwatch() {
    clearInterval(tInterval);
    running = false;
    display.innerHTML = '00:00:00.00';
    startButton.style.display = 'inline';
    pauseButton.style.display = 'none';
    lapButton.style.display = 'none';
    laps.innerHTML = '';
}

function lapStopwatch() {
    const lapTime = display.innerHTML;
    const lapDiv = document.createElement('div');
    lapDiv.textContent = lapTime;
    laps.appendChild(lapDiv);
}

function getShowTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    const milliseconds = Math.floor((difference % 1000) / 10);

    display.innerHTML = 
        (hours < 10 ? '0' : '') + hours + ':' + 
        (minutes < 10 ? '0' : '') + minutes + ':' + 
        (seconds < 10 ? '0' : '') + seconds + '.' + 
        (milliseconds < 10 ? '0' : '') + milliseconds;
}

startButton.addEventListener('click', startStopwatch);
pauseButton.addEventListener('click', pauseStopwatch);
resetButton.addEventListener('click', resetStopwatch);
lapButton.addEventListener('click', lapStopwatch);