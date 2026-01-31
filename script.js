let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

const display = document.getElementById("display");
const startPauseBtn = document.getElementById("startPause");
const lapBtn = document.getElementById("lap");
const resetBtn = document.getElementById("reset");
const laps = document.getElementById("laps");

// Start / Pause
startPauseBtn.addEventListener("click", () => {
    if (!isRunning) {
        timer = setInterval(updateTime, 1000);
        isRunning = true;
        startPauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i> Pause';
    } else {
        clearInterval(timer);
        isRunning = false;
        startPauseBtn.innerHTML = '<i class="fa-solid fa-play"></i> Start';
    }
});

// Reset
resetBtn.addEventListener("click", () => {
    clearInterval(timer);
    isRunning = false;
    seconds = minutes = hours = 0;
    display.innerHTML = "00:00:00";
    startPauseBtn.innerHTML = '<i class="fa-solid fa-play"></i> Start';
    laps.innerHTML = "";
});

// Lap
lapBtn.addEventListener("click", () => {
    if (isRunning) {
        const li = document.createElement("li");
        li.textContent = display.innerHTML;
        laps.appendChild(li);
    }
});

// Update Time
function updateTime() {
    seconds++;

    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }

    if (minutes === 60) {
        minutes = 0;
        hours++;
    }

    display.innerHTML =
        `${String(hours).padStart(2, "0")}:` +
        `${String(minutes).padStart(2, "0")}:` +
        `${String(seconds).padStart(2, "0")}`;
}
