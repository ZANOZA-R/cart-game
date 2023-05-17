import { globalData, mainelement } from "../index.js";
import { difficultyLevel } from "./startingСomponent.js";
const cardsPresetsClosed = `
<div class="cards">
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
        <div class="cards__button-box">
        <button class="cards__button"></button>
        <button class="cards__button"></button>
        <button class="cards__button"></button>
        <button class="cards__button"></button>
        <button class="cards__button"></button>
        <button class="cards__button"></button>
        <button class="cards__button"></button>
        <button class="cards__button"></button>
        <button class="cards__button"></button>
        <button class="cards__button"></button>
        <button class="cards__button"></button>
        <button class="cards__button"></button>
        <button class="cards__button"></button>
        <button class="cards__button"></button>
        <button class="cards__button"></button>
        <button class="cards__button"></button>
        <button class="cards__button"></button>
        <button class="cards__button"></button>
        <button class="cards__button"></button>
        <button class="cards__button"></button>
        <button class="cards__button"></button>
        <button class="cards__button"></button>
        <button class="cards__button"></button>
        <button class="cards__button"></button>
        <button class="cards__button"></button>
        <button class="cards__button"></button>
        <button class="cards__button"></button>
        <button class="cards__button"></button>
        <button class="cards__button"></button>
        <button class="cards__button"></button>
        <button class="cards__button"></button>
        <button class="cards__button"></button>
        <button class="cards__button"></button>
        <button class="cards__button"></button>
        <button class="cards__button"></button>
        <button class="cards__button"></button>
        </div>
    </div>
`;
const cardsPresetsOpen = `
<div class="cards">
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
   <div class="cards__button-box">
       <button class="cards__button"> <img src="./img/пики/туз пики.svg" alt=""></button>
       <button class="cards__button"><img src="./img/пики/король пики.svg" alt=""></button>
       <button class="cards__button"><img src="./img/пики/дама пики.svg" alt=""></button>
       <button class="cards__button"><img src="./img/пики/валет пики.svg" alt=""></button>
       <button class="cards__button"><img src="./img/пики/10 пики.svg" alt=""></button>
       <button class="cards__button"><img src="./img/пики/9 пики.svg" alt=""></button>
       <button class="cards__button"><img src="./img/пики/8 пики.svg" alt=""></button>
       <button class="cards__button"><img src="./img/пики/7 пики.svg" alt=""></button>
       <button class="cards__button"><img src="./img/пики/6 пики.svg" alt=""></button>
       <button class="cards__button"><img src="./img/черви/туз черви.svg" alt=""></button>
       <button class="cards__button"><img src="./img/черви/король черви.svg" alt=""></button>
       <button class="cards__button"><img src="./img/черви/дама черви.svg" alt=""></button>
       <button class="cards__button"><img src="./img/черви/валет черви.svg" alt=""></button>
       <button class="cards__button"><img src="/img/черви/10 черви.svg" alt=""></button>
       <button class="cards__button"><img src="./img/черви/9 черви.svg" alt=""></button>
       <button class="cards__button"><img src="./img/черви/8 черви.svg" alt=""></button>
       <button class="cards__button"><img src="./img/черви/7 черви.svg" alt=""></button>
       <button class="cards__button"><img src="./img/черви/6 черви.svg" alt=""></button>
       <button class="cards__button"><img src="./img/буби/туз бубны.svg" alt=""></button>
       <button class="cards__button"><img src="./img/буби/король бубны.svg" alt=""></button>
       <button class="cards__button"><img src="/img/буби/дама бубны.svg" alt=""></button>
       <button class="cards__button"><img src="./img/буби/валет бубны.svg" alt=""></button>
       <button class="cards__button"><img src="./img/буби/10 бубны.svg" alt=""></button>
       <button class="cards__button"><img src="./img/буби/9 бубны.svg" alt=""></button>
       <button class="cards__button"><img src="./img/буби/8 бубны.svg" alt=""></button>
       <button class="cards__button"><img src="./img/буби/7 бубны.svg" alt=""></button>
       <button class="cards__button"><img src="./img/буби/6 бубны.svg" alt=""></button>
       <button class="cards__button"><img src="./img/крести/туз крести.svg" alt=""></button>
       <button class="cards__button"><img src="./img/крести/король крести.svg" alt=""></button>
       <button class="cards__button"><img src="./img/крести/дама крести.svg" alt=""></button>
       <button class="cards__button"><img src="./img/крести/валет крести.svg" alt=""></button>
       <button class="cards__button"><img src="./img/крести/10 крести.svg" alt=""></button>
       <button class="cards__button"><img src="./img/крести/9 крести.svg" alt=""></button>
       <button class="cards__button"><img src="./img/крести/8 крести.svg" alt=""></button>
       <button class="cards__button"><img src="./img/крести/7 крести.svg" alt=""></button>
       <button class="cards__button"><img src="./img/крести/6 крести.svg" alt=""></button>
       </div>
       </div>
       `;
function renderingPresetsCards() {
    switch (globalData.difficultyLevel) {
        case "easy":
            mainelement.innerHTML = cardsPresetsClosed;
            break;
        case "average":
            mainelement.innerHTML = cardsPresetsClosed;
            break;
        case "hard":
            mainelement.innerHTML = cardsPresetsOpen;
            break;
        default:
            break;
    }
    document
        .querySelector(".cards__button-again")
        .addEventListener("click", () => {
            difficultyLevel();
        });
}
export { renderingPresetsCards };
