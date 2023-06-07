import { renderingPresetsCards } from "./presets-cards-component";
import { globalThis } from "./global";

function renderingDifficulty() {
    if (globalThis.mainElement instanceof HTMLElement) {
        globalThis.mainElement.innerHTML = `
<section class="difficulty">
<h1 class="difficulty__title">Выбери сложность</h1>
<div class="difficulty__choose">
    <button class="difficulty__chooseButton">1</button>
    <button class="difficulty__chooseButton">2</button>
    <button class="difficulty__chooseButton">3</button>
</div>
<button class="difficulty__buttonStart">Старт</button>
</section>
`;
    }
    checkButtonDifficulty();
}

function checkButtonDifficulty() {
    const chooseButtonElements = Array.from(
        document.querySelectorAll(".difficulty__chooseButton")
    );
    const startButtonElement = document.querySelector(
        ".difficulty__buttonStart"
    );

    for (const chooseButtonElement of chooseButtonElements) {
        chooseButtonElement.addEventListener("click", () => {
            for (const chooseButtonElement of chooseButtonElements) {
                chooseButtonElement.classList.remove("button-active");
            }
            chooseButtonElement.classList.add("button-active");
            switch (chooseButtonElement.textContent) {
                case "1":
                    globalThis.difficulty = "easy";
                    break;
                case "2":
                    globalThis.difficulty = "average";
                    break;
                case "3":
                    globalThis.difficulty = "hard";
                    break;
                default:
                    break;
            }
        });
    }
    if (startButtonElement instanceof HTMLElement) {
        startButtonElement.addEventListener("click", () => {
            if (!globalThis.difficulty) {
                alert("С начало выберете сложность");
                return;
            }
            renderingPresetsCards();
        });
    }
}

export { renderingDifficulty };
