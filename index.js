import { createBoard } from "./scripts/createBoard.js";
import { startTimer } from "./scripts/timer.js";

const inputNumber = document.querySelector(".board__input");
const startButton = document.querySelector(".board__button");

let count;

function buttonClick(){
    const number = Number(inputNumber.value);
    if (number >= 2 && number <= 6 && number % 2 === 0){
        count = number * number;
        createBoard(count);
    };

    if (number > 0){
        startTimer()
    }

};








startButton.addEventListener("click", buttonClick);

// createBoard(count);