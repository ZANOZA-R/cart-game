type Card = {
    mainElement: HTMLElement | null;
    suit: Array<string>;
    rank: Array<string>;
    randomPreset: Array<string>;
    difficulty: string;
    selectedCard: string | undefined;
    index: number;
    timer: string;
    timerCheck: string;
};

const globalThis: Card = {
    mainElement: document.getElementById("main"),
    suit: ["spades", "hearts", "diamonds", "clubs"],
    rank: ["A", "K", "Q", "J", "10", "9", "8", "7", "6"],
    randomPreset: new Array<string>(),
    difficulty: "",
    selectedCard: "clear",
    index: 0,
    timer: "",
    timerCheck: "on",
};

export { globalThis };
