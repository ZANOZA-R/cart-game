(() => {
    "use strict";
    var t = {
        mainElement: document.getElementById("main"),
        suit: ["spades", "hearts", "diamonds", "clubs"],
        rank: ["A", "K", "Q", "J", "10", "9", "8", "7", "6"],
        randomPreset: new Array(),
        difficulty: "",
        selectedCard: "clear",
        index: 0,
        timer: "",
        timerCheck: "on",
    };
    function e() {
        var e = document.querySelector(".difficulty__buttonStart");
        e instanceof HTMLElement &&
            e.addEventListener("click", function () {
                (t.selectedCard = "clear"), (t.index = 0), r();
            });
    }
    var n = function (t, e, n) {
        if (n || 2 === arguments.length)
            for (var a, i = 0, c = e.length; i < c; i++)
                (!a && i in e) ||
                    (a || (a = Array.prototype.slice.call(e, 0, i)),
                    (a[i] = e[i]));
        return t.concat(a || Array.prototype.slice.call(e));
    };
    function a(e) {
        for (var a = [], i = 0; i < e; i++) {
            0 === t.suit.length &&
                (t.suit = ["spades", "hearts", "diamonds", "clubs"]),
                0 === t.rank.length &&
                    (t.rank = ["A", "K", "Q", "J", "10", "9", "8", "7", "6"]);
            var c = Math.floor(Math.random() * t.suit.length),
                s = Math.floor(Math.random() * t.rank.length);
            (a[i] = t.suit[c] + t.rank[s]),
                t.suit.splice(c, 1),
                t.rank.splice(s, 1);
        }
        t.randomPreset = n(n([], a, !0), a, !0);
    }
    function i(e) {
        t.index = e;
        for (var n = [], a = 0; a < e; a++) {
            var i = Math.floor(Math.random() * t.randomPreset.length);
            (n[a] = '\n        <button data-preset="'
                .concat(
                    t.randomPreset[i],
                    '" class="game__cards-button preset__'
                )
                .concat(t.randomPreset[i], '"></button>\n        ')),
                t.randomPreset.splice(i, 1);
        }
        return n.join("");
    }
    var c =
        '\n<div class="game__title">\n    <div class="game__time-box">\n        <div class="game__text-box">\n            <p class="game__text">min</p>\n            <p class="game__text">sek</p>\n        </div>\n        <span id="timer" class="game__time">00:00</span>\n    </div>\n    <button class="game__again-button">Начать заново</button>\n</div>\n';
    function s() {
        if (t.mainElement instanceof HTMLElement)
            switch (t.difficulty) {
                case "easy":
                    a(3),
                        (t.mainElement.innerHTML =
                            '\n            <div class="game">\n                '
                                .concat(
                                    c,
                                    '\n                <div class="game__cards">\n                    '
                                )
                                .concat(
                                    i(6),
                                    "\n                </div>\n            </div>\n            "
                                ));
                    break;
                case "average":
                    a(6),
                        (t.mainElement.innerHTML =
                            '\n            <div class="game">\n                '
                                .concat(
                                    c,
                                    '\n                <div class="game__cards">\n                    '
                                )
                                .concat(
                                    i(12),
                                    "\n                </div>\n            </div>\n            "
                                ));
                    break;
                case "hard":
                    a(9),
                        (t.mainElement.innerHTML =
                            '\n            <div class="game">\n                '
                                .concat(
                                    c,
                                    '\n                <div class="game__cards">\n                    '
                                )
                                .concat(
                                    i(18),
                                    "\n                </div>\n            </div>\n            "
                                ));
            }
        var n,
            s,
            o = document.querySelector(".game__again-button");
        o instanceof HTMLElement &&
            o.addEventListener("click", function () {
                (t.selectedCard = "clear"), (t.timerCheck = "on"), r();
            }),
            (n = Array.from(document.querySelectorAll(".game__cards-button"))),
            (s = 0),
            setTimeout(function () {
                for (var a = 0, i = n; a < i.length; a++)
                    (l = i[a]) instanceof HTMLElement &&
                        l.classList.remove("preset__".concat(l.dataset.preset));
                for (
                    var c = function (n) {
                            n instanceof HTMLElement &&
                                n.addEventListener("click", function () {
                                    switch (
                                        (n.classList.add("button-active"),
                                        n.classList.add(
                                            "preset__".concat(n.dataset.preset)
                                        ),
                                        t.selectedCard)
                                    ) {
                                        case "clear":
                                            "on" === t.timerCheck &&
                                                ((t.timerCheck = "off"),
                                                (function () {
                                                    var e =
                                                            document.getElementById(
                                                                "timer"
                                                            ),
                                                        n = 0,
                                                        a = 0;
                                                    function i() {
                                                        ++n >= 60 &&
                                                            ((n = 0),
                                                            ++a >= 60 &&
                                                                (a = 0)),
                                                            e instanceof
                                                                HTMLElement &&
                                                                ((e.innerHTML =
                                                                    (a > 9
                                                                        ? a
                                                                        : "0" +
                                                                          a) +
                                                                    ":" +
                                                                    (n > 9
                                                                        ? n
                                                                        : "0" +
                                                                          n)),
                                                                (t.timer =
                                                                    e.innerHTML)),
                                                            c();
                                                    }
                                                    function c() {
                                                        var e = setTimeout(
                                                            i,
                                                            1e3
                                                        );
                                                        "on" !== t.timerCheck ||
                                                            clearTimeout(e);
                                                    }
                                                    c();
                                                })()),
                                                (t.selectedCard =
                                                    n.dataset.preset),
                                                (n.dataset.preset = "open");
                                            break;
                                        case "open":
                                            t.selectedCard = "clear";
                                            break;
                                        case n.dataset.preset:
                                            if (((s += 2), t.index === s))
                                                return (
                                                    (t.timerCheck = "on"),
                                                    t.mainElement instanceof
                                                        HTMLElement &&
                                                        (t.mainElement.innerHTML =
                                                            '\n<section class="difficulty">\n<h1 class="difficulty__win"></h1>\n<h2 class="difficulty__title-win">Вы выиграли!</h2>\n<p class="difficulty__text">Затраченное время:</p>\n<p class="difficulty__timer">'.concat(
                                                                t.timer,
                                                                '</p>\n<button class="difficulty__buttonStart">Играть снова</button>\n</section>\n'
                                                            )),
                                                    void e()
                                                );
                                            (t.selectedCard = "clear"),
                                                (n.dataset.preset = "open");
                                            break;
                                        default:
                                            (t.timerCheck = "on"),
                                                t.mainElement instanceof
                                                    HTMLElement &&
                                                    (t.mainElement.innerHTML =
                                                        '\n<section class="difficulty">\n<h1 class="difficulty__lose"></h1>\n<h2 class="difficulty__title-win">Вы проиграли!</h2>\n<p class="difficulty__text">Затраченное время:</p>\n<p class="difficulty__timer">'.concat(
                                                            t.timer,
                                                            '</p>\n<button class="difficulty__buttonStart">Играть снова</button>\n</section>\n'
                                                        )),
                                                e();
                                    }
                                });
                        },
                        r = 0,
                        o = n;
                    r < o.length;
                    r++
                ) {
                    var l;
                    c((l = o[r]));
                }
            }, 5e3);
    }
    function r() {
        t.mainElement instanceof HTMLElement &&
            (t.mainElement.innerHTML =
                '\n<section class="difficulty">\n<h1 class="difficulty__title">Выбери сложность</h1>\n<div class="difficulty__choose">\n    <button class="difficulty__chooseButton">1</button>\n    <button class="difficulty__chooseButton">2</button>\n    <button class="difficulty__chooseButton">3</button>\n</div>\n<button class="difficulty__buttonStart">Старт</button>\n</section>\n'),
            (function () {
                for (
                    var e = Array.from(
                            document.querySelectorAll(
                                ".difficulty__chooseButton"
                            )
                        ),
                        n = document.querySelector(".difficulty__buttonStart"),
                        a = function (n) {
                            n.addEventListener("click", function () {
                                for (var a = 0, i = e; a < i.length; a++)
                                    i[a].classList.remove("button-active");
                                switch (
                                    (n.classList.add("button-active"),
                                    n.textContent)
                                ) {
                                    case "1":
                                        t.difficulty = "easy";
                                        break;
                                    case "2":
                                        t.difficulty = "average";
                                        break;
                                    case "3":
                                        t.difficulty = "hard";
                                }
                            });
                        },
                        i = 0,
                        c = e;
                    i < c.length;
                    i++
                )
                    a(c[i]);
                n instanceof HTMLElement &&
                    n.addEventListener("click", function () {
                        t.difficulty
                            ? s()
                            : alert("С начало выберете сложность");
                    });
            })();
    }
    r();
})();
