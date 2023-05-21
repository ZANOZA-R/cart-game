import "./css/styles.css";
import { difficultyLevel } from "./component/startingСomponent.js";
const globalData = {
    suit: ["spades", "hearts", "diamonds", "clubs"],
    rank: ["A", "K", "Q", "J", "10", "9", "8", "7", "6"],
};
const mainelement = document.getElementById("main");
difficultyLevel();

function getRandomInt(numb) {
    let randomPreset = new Array(numb);
    for (let i = 0; i < numb; i++) {
        const randomSuit = Math.floor(Math.random() * globalData.suit.length);
        const randomRank = Math.floor(Math.random() * globalData.rank.length);
        randomPreset[i] =
            globalData.suit[randomSuit] + globalData.rank[randomRank];
    }
    globalData.randomPreset = [...randomPreset, ...randomPreset];
    return;
}
function randomButtonElements(numb) {
    let randomButtonElement = new Array(numb);
    for (let i = 0; i < numb; i++) {
        const randomNumb = Math.floor(
            Math.random() * globalData.randomPreset.length
        );
        randomButtonElement[i] = `
        <button data-preset="${globalData.randomPreset[randomNumb]}" class="cards__button preset__${globalData.randomPreset[randomNumb]}"></button>
        `;
        globalData.randomPreset.splice(randomNumb, 1);
    }
    return randomButtonElement.join("");
}
export { getRandomInt };
export { globalData };
export { mainelement };
export { randomButtonElements };
