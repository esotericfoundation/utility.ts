import { cleanString } from "./cleanString";

export function wrapText(text: string, limit: number, indentPart?: RegExp): string {
  text = cleanString(text);
  let wrappedText = "";

  const paragraphs = text.split("\n\n");
  for (let l = 0; l < paragraphs.length; l++) {
    const paragraph = paragraphs[l];
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
  const indentCharacter = indent?.[0] ?? " ";

  const match = paragraph.match(indentPart);

  const matchIndent = match?.[0] ? indentCharacter.repeat(match?.[0]?.length) : "";
  const totalIndent = indent + matchIndent;

  paragraph = paragraph.replaceAll("\n", " ");
  paragraph = paragraph.replaceAll(RegExp(`${indentCharacter}{2,}`, "g"), " ");

  const trimmedLine = paragraph.trimStart();

  const words = trimmedLine.split(" ");

  let linesWrapped = 0
  let currentLine = "";

  for (let w = 0; w < words.length; w++) {
    const word = words[w];

    currentLine += word + " ";

    if (w == words.length - 1 || (linesWrapped == 0 ? indent : totalIndent).length + currentLine.length + words[w + 1].length > limit) {
      wrappedParagraph += (linesWrapped == 0 ? indent : totalIndent) + currentLine.trimEnd() + (w == words.length - 1 ? "" : "\n");

      linesWrapped++;
      currentLine = "";
    }
  }

  return wrappedParagraph;
}
