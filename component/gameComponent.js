import {globalData, mainelement} from "../index.js";
import {difficultyLevel} from "./startingСomponent.js";
function renderingPresetsCards() {
    switch (globalData.difficultyLevel) {
        case "easy":
            mainelement.innerHTML = ` 
        <h1>Легкий уровень - 6 карточек (3 пары)</h1>
        <button class="header__buttonStart">Назад</button>
        `
            break;
        case "average":
            mainelement.innerHTML = `
        <h1>Средний уровень - 12 карточек (6 пар)</h1>
        <button class="header__buttonStart">Назад</button>
        `
            break;
        case "hard":
            mainelement.innerHTML = `
        <h1>Сложный уровень - 18 карточек (9 пар)</h1>
        <button class="header__buttonStart">Назад</button>
        `
            break;
        default:
            break;
    }
    document.querySelector(".header__buttonStart").addEventListener('click', () => {
        difficultyLevel();
    })
}
export {renderingPresetsCards};