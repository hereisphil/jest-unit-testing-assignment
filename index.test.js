import { obscureCreditCard } from "./index.js";

describe("Credit Card Obscurification Tests", () => {
    test("Neg test: returns false if credit card number is less than 12 digits.", () => {
        expect(obscureCreditCard("12345678901234567")).toBeFalsy();
    });

    test("Neg test: returns false if credit card number is more than 16 digits.", () => {
        expect(obscureCreditCard("12345678901")).toBeFalsy();
    });

    test("Neg test: returns false if non-string input entered", () => {
        expect(obscureCreditCard()).toBeFalsy();
    });

    test("Pos test: only last 4 digits appear", () => {
        const creditCardNumber = "0000111199992222";
        expect(obscureCreditCard(creditCardNumber)).toBe("xxxxxxxxxxxx2222");
    });
});
