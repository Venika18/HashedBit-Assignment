let hours = 0, minutes = 0, seconds = 0;
let timer;
let isRunning = false;
let isPaused = false;

function updateDisplay() {
    const display = document.getElementById("time");
    display.innerText = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function incrementTime() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }
    updateDisplay();
}

function start() {
    if (!isRunning) {
        isRunning = true;
        isPaused = false;
        timer = setInterval(incrementTime, 1000);
        document.getElementById("start").disabled = true;
        document.getElementById("pause").disabled = false;
        document.getElementById("stop").disabled = false;
    }
}

function pause() {
    if (isRunning) {
        if (isPaused) {
            isPaused = false;
            timer = setInterval(incrementTime, 1000);
            document.getElementById("pause").innerText = "Pause";
        } else {
            isPaused = true;
            clearInterval(timer);
            document.getElementById("pause").innerText = "Continue";
        }
    }
}

function stop() {
    clearInterval(timer);
    isRunning = false;
    isPaused = false;
    hours = 0;
    minutes = 0;
    seconds = 0;
    updateDisplay();
    document.getElementById("start").disabled = false;
    document.getElementById("pause").disabled = true;
    document.getElementById("stop").disabled = true;
    document.getElementById("pause").innerText = "Pause";
}

document.addEventListener('DOMContentLoaded', (event) => {
    updateDisplay();
});
