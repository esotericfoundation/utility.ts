import { wrapText } from "../../../utility/string/wrapText";
import { readFileSync, writeFileSync } from "fs";

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

    expect(wrappedText).toBe(
      "This is a\ntest\nstring\nwith a\nnewline\ncharacter.\n"
    );
  });

  it("respects double \\n characters", () => {
    const text = "This is a test string\n\nwith a newline character.";
    const limit = 10;

    const wrappedText = wrapText(text, limit);

    expect(wrappedText).toBe(
      "This is a\ntest\nstring\n\nwith a\nnewline\ncharacter.\n"
    );
  });

  it("respects indents", () => {
    const indentedText = `1. give appropriate Attribution, as is defined in the Public License below; and`

    const expectedText =
`1. give appropriate Attribution, as is defined in the Public License
   below; and\n`;

    const limit = 71;
    const wrappedText = wrapText(indentedText, limit, /\d+\. /);

    expect(wrappedText).toBe(expectedText);
  })

  it("handles large inputs correctly", () => {
    const largeText = readFileSync("src/test/utility/string/largeTextExample.txt").toString();
    const expectedWrappedText = readFileSync("src/test/utility/string/wrappedLargeText.txt").toString().replaceAll("\r\n", "\n");

    const limit = 71;

    const wrappedText = wrapText(largeText, limit);

    writeFileSync("output.txt", wrappedText);

    expect(wrappedText).toBe(expectedWrappedText);
  })

  it("wraps text (with a newline at the end) at the given limit", () => {
    const text = "This is a test string.\n";
    const limit = 10;

    const wrappedText = wrapText(text, limit);

    expect(wrappedText).toBe("This is a\ntest\nstring.\n");
  });

  it("ignores \\n characters (with a newline at the end)", () => {
    const text = "This is a test string\nwith a newline character.\n";
    const limit = 10;

    const wrappedText = wrapText(text, limit);

    expect(wrappedText).toBe(
      "This is a\ntest\nstring\nwith a\nnewline\ncharacter.\n"
    );
  });

  it("respects double \\n characters (with a newline at the end)", () => {
    const text = "This is a test string\n\nwith a newline character.\n";
    const limit = 10;

    const wrappedText = wrapText(text, limit);

    expect(wrappedText).toBe(
      "This is a\ntest\nstring\n\nwith a\nnewline\ncharacter.\n"
    );
  });
});
