/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { it, expect, describe } = require("@jest/globals");
const { randomButtonElements } = require("../src/components/help-component");

describe("Функция внутри модуля help-component", () => {
    it("Создает строку с HTML разеткой кнопок, проверяем на строку", () => {
        const number = 6;
        let string = "";

        string = randomButtonElements(number);

        expect(string).toEqual(expect.any(String));
    });
});
