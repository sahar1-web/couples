import { totalFlips } from "./gameLogic.js";

let totalTime = 60;
let intervalId;

function startTimer(){
    const timeElement = document.querySelector(".state__time");
    const movesElement = document.querySelector(".state__moves");
    intervalId = setInterval(() => {
        totalTime--;
        timeElement.textContent = totalTime;
        movesElement.textContent = totalFlips;
        if (totalTime <= 0){
            clearInterval(intervalId);}


    }, 1000)


};

function stopTimer(){
    clearInterval(intervalId);
};

export {startTimer, stopTimer, totalTime, intervalId}

