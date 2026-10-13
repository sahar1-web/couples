import { gameLogic } from "./gameLogic.js";

let dubl;
function createCard(count){
    const cardTemplate = document.querySelector('#cardTemplate');
    const card = cardTemplate.content.querySelector(".card").cloneNode(true);
    const flippedIcon = card.querySelector("#flippedIcon");

    flippedIcon.classList.add(`fa-${count}`);

    card.addEventListener('click', () => gameLogic(card));


    return card
    

}

function createIconsArray(initialCount){
    const cardsIcons = ["compass", "cloud", "play", "bolt", "stop", "cogs", "atom", "basketball-ball", "arrows", "angle-left", "bars", "file", "filter", "gear", "folder", "folder-open", "shield", "scissors", "pen-clip"];

    let cards = cardsIcons.slice(0, Math.floor(initialCount / 2));
    const duobleCards = dublicateElements(cards);

    return shuffleArray(duobleCards);
}

function dublicateElements(array){
    dubl = [];
    array.forEach((item) => {
        dubl.push(item, item);
    });
    return dubl
}

function shuffleArray(array){
    let currentIndex = array.length;

  // Повторяем до тех пор, пока текущий индекс не достиг нул
    while (currentIndex > 0) {
        currentIndex--;
        const randomIndex = Math.floor(Math.random() * currentIndex);
        const temp = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temp;
    };
    return array;
}

export {createCard, createIconsArray}