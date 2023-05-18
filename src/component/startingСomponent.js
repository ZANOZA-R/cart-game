import { globalData, mainelement } from "../index.js";
import { renderingPresetsCards } from "./gameComponent.js";
function difficultyLevel() {
    mainelement.innerHTML = `
    <Section class="header">
        <h1 class="header__title">Выбери сложность</h1>
        <div class="header__buttonBox">
            <button class="header__button">1</button>
            <button class="header__button">2</button>
            <button class="header__button">3</button>
        </div>
        <button class="header__buttonStart">Старт</button>
    </Section>
    `;
    checkButton();
}
function checkButton() {
    const headerButtonElements = document.querySelectorAll(".header__button");
    const headerButtonStartElement = document.querySelector(
        ".header__buttonStart"
    );
    for (const headerButtonElement of headerButtonElements) {
        headerButtonElement.addEventListener("click", () => {
            globalData.difficultyLevel = headerButtonElement.textContent;
            switch (globalData.difficultyLevel) {
                case "1":
                    globalData.difficultyLevel = "easy";
                    globalData.cards = "6 карточек (3 пары)";
                    break;
                case "2":
                    globalData.difficultyLevel = "average";
                    globalData.cards = "12 карточек (6 пар)";
                    break;
                case "3":
                    globalData.difficultyLevel = "hard";
                    globalData.cards = "18 карточек (9 пар)";
                    break;
                default:
                    break;
            }
        });
    }

    headerButtonStartElement.addEventListener("click", () => {
        if (!difficultyLevel) {
            alert("С начала выберите сложность");
            return;
        }
        renderingPresetsCards();
    });
}
export { difficultyLevel };
