import { cleanString } from "./cleanString";

export function wrapText(text: string, limit: number): string {
  text = cleanString(text);
  let wrappedText = "";

  const paragraphs = text.split("\n\n");

  for (let j = 0; j < paragraphs.length; j++) {
    const paragraph = paragraphs[j];

    if (j != 0) {
      wrappedText += "\n\n";
    }

    wrappedText += wrapParagraph(paragraph, limit);
  }

  return wrappedText;
}

export function wrapParagraph(text: string, limit: number): string {
  text = cleanString(text);

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
