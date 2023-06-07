import { globalThis } from "./global";
import { renderingDifficulty } from "./difficulty-component";

function renderingWinGame() {
    if (globalThis.mainElement instanceof HTMLElement) {
        globalThis.mainElement.innerHTML = `
<section class="difficulty">
<h1 class="difficulty__win"></h1>
<h2 class="difficulty__title-win">Вы выиграли!</h2>
<p class="difficulty__text">Затраченное время:</p>
<p class="difficulty__timer">${globalThis.timer}</p>
<button class="difficulty__buttonStart">Играть снова</button>
</section>
`;
    }
    checkButtonEnd();
}

function renderingloseGame() {
    if (globalThis.mainElement instanceof HTMLElement) {
        globalThis.mainElement.innerHTML = `
<section class="difficulty">
<h1 class="difficulty__lose"></h1>
<h2 class="difficulty__title-win">Вы проиграли!</h2>
<p class="difficulty__text">Затраченное время:</p>
<p class="difficulty__timer">${globalThis.timer}</p>
<button class="difficulty__buttonStart">Играть снова</button>
</section>
`;
    }
    checkButtonEnd();
}

function checkButtonEnd() {
    const startButtonElement = document.querySelector(
        ".difficulty__buttonStart"
    );
    if (startButtonElement instanceof HTMLElement) {
        startButtonElement.addEventListener("click", () => {
            globalThis.selectedCard = "clear";
            globalThis.index = 0;
            renderingDifficulty();
        });
    }
}

export { renderingWinGame, renderingloseGame };
