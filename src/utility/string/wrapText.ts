import { cleanString } from "./cleanString";

export function wrapText(text: string, limit: number, indentPart?: RegExp): string {
  text = cleanString(text);
  let wrappedText = "";

  const paragraphs = text.split("\n\n");
  for (let p = 0; p < paragraphs.length; p++) {
    const paragraph = paragraphs[p];
    wrappedText += wrapParagraph(paragraph, limit, indentPart) + "\n\n";
  }

  return wrappedText.trimEnd() + "\n";
}

export function wrapParagraph(paragraph: string, limit: number, indentPart?: RegExp): string {
  let wrappedParagraph = "";

  paragraph = paragraph.trimEnd();

  if (paragraph.length <= limit) {
    return paragraph;
  }

  const indent = paragraph.match(/^\s*/)[0];
  const indentCharacter = indent[0] ?? " ";

  const match = paragraph.match(indentPart);

  const matchIndent = match?.[0] ? indentCharacter.repeat(match[0].length) : "";
  const totalIndent = indent + matchIndent;

  paragraph = paragraph.replaceAll("\n", " ");
  paragraph = paragraph.replaceAll(RegExp(`${indentCharacter}{2,}`, "g"), " ");

  const trimmedParagraph = paragraph.trimStart();

  const words = trimmedParagraph.split(" ");

  let linesWrapped = 0;
  let currentLine = "";

  for (let w = 0; w < words.length; w++) {
    const word = words[w];

    currentLine += word + " ";

    const currentIndent = linesWrapped === 0 ? indent : totalIndent;

    if (w === words.length - 1 || currentIndent.length + currentLine.length + words[w + 1].length > limit) {
      wrappedParagraph += currentIndent + currentLine.trimEnd() + (w === words.length - 1 ? "" : "\n");

      linesWrapped++;
      currentLine = "";
    }
  }

  return wrappedParagraph;
}
