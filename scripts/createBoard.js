import { startTimer } from "./timer.js";
import { createCard } from "./cards.js";
import { createIconsArray } from "./cards.js";



const gameBoard = document.querySelector(".board");

function createBoard(columns){
    gameBoard.innerHTML = '';
    const template = document.querySelector("#gameTableTemplate");
    const gameTable = template.content.querySelector('.table');
    const restartButton = template.content.querySelector(".table__button");
    gameTable.style = `grid-template-columns: repeat(${columns ** 0.5}, 1fr); grid-template-rows: repeat(${columns ** 0,5}, 1fr);`;
    gameBoard.append(gameTable);
    gameBoard.append(restartButton);


    restartButton.addEventListener("click", () => {
        location.reload
    })

    
    const icons = createIconsArray(columns)
    icons.forEach((icon) => {
        gameTable.append(createCard(icon));
    });



}; 

export {createBoard};
