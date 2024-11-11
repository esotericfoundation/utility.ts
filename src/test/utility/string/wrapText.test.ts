import { wrapText } from "../../../utility/string/wrapText";

describe("wrapText", () => {
    it("should wrap text at the given limit", () => {
        const text = "This is a test string.";
        const limit = 10;

        const wrappedText = wrapText(text, limit);

        console.log(wrappedText)

        expect(wrappedText).toBe("This is a\ntest\nstring.");
    });
});
