import {
    globalData,
    mainelement,
    getRandomInt,
    randomButtonElements,
} from "../index.js";
import { difficultyLevel } from "./startingСomponent.js";
const cardsTitle = `
<div class="cards__title">
<div>
    <div class="cards__time-box">
        <p class="cards__time">min</p>
        <p class="cards__time">sek</p>
    </div>
    <p class="cards__timer">00.00</p>
</div>
<button class="cards__button-again">Начать заново</button>
</div>
`;

function renderingPresetsCards() {
    switch (globalData.difficultyLevel) {
        case "easy":
            getRandomInt(3);
            mainelement.innerHTML = `
            <div  class="cards">
                ${cardsTitle}
                <div class="cards__button-box">
                    ${randomButtonElements(6)}  
                </div>
            </div> 
            `;
            break;
        case "average":
            getRandomInt(6);
            mainelement.innerHTML = `
            <div  class="cards">
                ${cardsTitle}
                <div class="cards__button-box">
                    ${randomButtonElements(12)}  
                </div>
            </div> 
            `;
            break;
        case "hard":
            getRandomInt(9);
            mainelement.innerHTML = `
            <div  class="cards">
                ${cardsTitle}
                <div class="cards__button-box">
                    ${randomButtonElements(18)}  
                </div>
            </div> 
            `;
            break;
        default:
            break;
    }
    document
        .querySelector(".cards__button-again")
        .addEventListener("click", () => {
            delete globalData.selectedCard;
            difficultyLevel();
        });
    checkButtonPreset();
}
function checkButtonPreset() {
    const buttonElements = document.querySelectorAll(".cards__button");
    setTimeout(() => {
        for (const buttonElement of buttonElements) {
            buttonElement.classList.remove(
                `preset__${buttonElement.dataset.preset}`
            );
        }
        for (const buttonElement of buttonElements) {
            buttonElement.addEventListener("click", () => {
                buttonElement.classList.add(
                    `preset__${buttonElement.dataset.preset}`
                );
                if (!globalData.selectedCard) {
                    globalData.selectedCard = buttonElement.dataset.preset;
                    buttonElement.dataset.preset = "";
                    return;
                }
                if (globalData.selectedCard === buttonElement.dataset.preset) {
                    alert("Вы победили");
                    delete globalData.selectedCard;
                } else {
                    alert("Вы не победили");
                    delete globalData.selectedCard;
                }
            });
        }
    }, 5 * 1000);
}
export { renderingPresetsCards };
