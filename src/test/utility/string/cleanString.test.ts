import { cleanString } from "../../../utility/string/cleanString";

describe("cleanString", () => {
  it("removes windows-style newline characters", () => {
    const text = "This is a test string\r\nwith a newline character.";

    const cleanedText = cleanString(text);

    expect(cleanedText).toBe("This is a test string\nwith a newline character.");
  });

  it("ignores double \\n characters", () => {
    const text = "This is a test string\n\nwith a newline character.";

    const cleanedText = cleanString(text);

    expect(cleanedText).toBe("This is a test string\n\nwith a newline character.");
  });
});
