import { globalThis } from "./global";

function randomSuitAndRank(numb: number) {
    const randomPreset = [];
    for (let i = 0; i < numb; i++) {
        if (globalThis.suit.length === 0) {
            globalThis.suit = ["spades", "hearts", "diamonds", "clubs"];
        }
        if (globalThis.rank.length === 0) {
            globalThis.rank = ["A", "K", "Q", "J", "10", "9", "8", "7", "6"];
        }
        const randomSuit = Math.floor(Math.random() * globalThis.suit.length);
        const randomRank = Math.floor(Math.random() * globalThis.rank.length);
        randomPreset[i] =
            globalThis.suit[randomSuit] + globalThis.rank[randomRank];
        globalThis.suit.splice(randomSuit, 1);
        globalThis.rank.splice(randomRank, 1);
    }
    globalThis.randomPreset = [...randomPreset, ...randomPreset];
    return;
}

function randomButtonElements(numb: number) {
    globalThis.index = numb;
    const randomButtonElement = [];
    for (let i = 0; i < numb; i++) {
        const randomI = Math.floor(
            Math.random() * globalThis.randomPreset.length
        );
        randomButtonElement[i] = `
        <button data-preset="${globalThis.randomPreset[randomI]}" class="game__cards-button preset__${globalThis.randomPreset[randomI]}"></button>
        `;
        globalThis.randomPreset.splice(randomI, 1);
    }
    return randomButtonElement.join("");
}

function startTime() {
    const timerElement = document.getElementById("timer");
    let sec = 0;
    let min = 0;

    function tick() {
        sec++;
        if (sec >= 60) {
            sec = 0;
            min++;
            if (min >= 60) {
                min = 0;
            }
        }
        return;
    }

    function add() {
        tick();
        if (timerElement instanceof HTMLElement) {
            timerElement.innerHTML =
                (min > 9 ? min : "0" + min) + ":" + (sec > 9 ? sec : "0" + sec);
            globalThis.timer = timerElement.innerHTML;
        }
        timer();
        return;
    }

    function timer() {
        const t = setTimeout(add, 1000);
        if (globalThis.timerCheck === "on") {
            clearTimeout(t);
            return;
        }
        return;
    }

    timer();
}

export { randomSuitAndRank, randomButtonElements, startTime };
