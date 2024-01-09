let timerInterval;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startTimer() {
    timerInterval = setInterval(updateTimer, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function resetTimer() {
    stopTimer();
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateTimer();
}

function updateTimer() {
    seconds++;

    if (seconds === 60) {
        seconds = 0;
        minutes++;

        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }

    const formattedTime = pad(hours) + ':' + pad(minutes) + ':' + pad(seconds);
    document.getElementById('timer').innerText = formattedTime;
}

function pad(value) {
    return value < 10 ? '0' + value : value;
}
