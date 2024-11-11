import { wrapText } from "../../../utility/string/wrapText";

describe("wrapText", () => {
    it("wraps text at the given limit", () => {
        const text = "This is a test string.";
        const limit = 10;

        const wrappedText = wrapText(text, limit);

        expect(wrappedText).toBe("This is a\ntest\nstring.\n");
    });

    it("ignores \\n characters", () => {
        const text = "This is a test string\nwith a newline character.";
        const limit = 10;

        const wrappedText = wrapText(text, limit);

        expect(wrappedText).toBe("This is a\ntest\nstring\nwith a\nnewline\ncharacter.\n");
    })

    it("respects double \\n characters", () => {
        const text = "This is a test string\n\nwith a newline character.";
        const limit = 10;

        const wrappedText = wrapText(text, limit);

        expect(wrappedText).toBe("This is a\ntest\nstring\n\nwith a\nnewline\ncharacter.\n");
    });
});
