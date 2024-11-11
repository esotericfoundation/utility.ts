import { cleanString } from "../../../utility/string/cleanString";

describe("cleanString", () => {
  it("ignores double \\n characters", () => {
    const text = "This is a test string\n\nwith a newline character.";

    const cleanedText = cleanString(text);

    expect(cleanedText).toBe(
      "This is a test string\n\nwith a newline character."
    );
  });
});
