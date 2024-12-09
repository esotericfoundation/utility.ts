import { replaceCharacter } from "../../../utility/string/replace";

describe("replaceCharacter", () => {
    it("replaces a character at a given index in a string with another character", () => {
        const string = "This is a test string.";

        const replacedString = replaceCharacter(string, 5, "x");

        expect(replacedString).toBe("This xs a test string.");
    });
})
