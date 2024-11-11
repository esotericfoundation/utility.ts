import { wrapText } from "../../../utility/string/wrapText";
import { readFileSync } from "fs";

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

  it("handles large inputs correctly", () => {
    const largeText = readFileSync("src/test/utility/string/largeTextExample.txt").toString();
    const expectedWrappedText = readFileSync("src/test/utility/string/wrappedLargeText.txt").toString();

    const limit = 71;

    const wrappedText = wrapText(largeText, limit);
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
