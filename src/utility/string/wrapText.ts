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

    wrappedText += wrapParagraph(paragraph, limit).trim();
  }

  return wrappedText + "\n";
}

export function wrapParagraph(text: string, limit: number): string {
  let wrappedText = "";
  let currentLine = "";

  const words = text.split(" ");

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    currentLine += word + " ";

    if (
      i === words.length - 1 ||
      currentLine.length + words[i + 1].length > limit
    ) {
      wrappedText += currentLine.trim() + "\n";
      currentLine = "";
    }
  }

  return wrappedText;
}
