export function wrapText(text: string, limit: number): string {
  let wrappedText = "";
  let currentLine = "";

  const words = text.split(" ");

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    if (currentLine.length + word.length > limit) {
        wrappedText += currentLine.trim() + "\n";
        currentLine = "";
    }

    currentLine += word + " ";

    if (i === words.length - 1) {
        wrappedText += currentLine.trim();
    }
  }

  return wrappedText;
}

console.log(wrapText("This is a test string.", 10));
