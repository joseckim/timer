let timer = 5;

function clock() {
    if (timer > 0) {
        console.log("timer." + timer + " seconds.");
        timer--;
        return;
    }

    console.log("time's up.");
    clearInterval(intervalId);
}

const intervalId = setInterval(clock, 1000);

