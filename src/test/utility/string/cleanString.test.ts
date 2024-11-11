import { cleanString } from "../../../utility/string/cleanString";

describe("cleanString", () => {
  it("replaces \\n with a space", () => {
    const text = "This is a test string\nwith a newline character.";

    const cleanedText = cleanString(text);

    expect(cleanedText).toBe("This is a test string with a newline character.");
  });

  it("ignores double \\n characters", () => {
    const text = "This is a test string\n\nwith a newline character.";

    const cleanedText = cleanString(text);

    expect(cleanedText).toBe(
      "This is a test string\n\nwith a newline character."
    );
  });
});
