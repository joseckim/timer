let timer = 20;
const timerElement = document.getElementById("timer");

function clock() {
    if (timer > 0) {
        timerElement.textContent = "timer: " + timer + " seconds.";
        timer = timer - 1 ;
        return;
    }

    timerElement.textContent = "time's up.";
    clearInterval(intervalId);
}

const intervalId = setInterval(clock, 1000);

