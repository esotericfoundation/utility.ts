import { cleanString } from "./cleanString";

export function wrapText(text: string, limit: number, indentPart?: RegExp): string {
  text = cleanString(text);
  let wrappedText = "";

  const lines = text.split("\n");
  for (let l = 0; l < lines.length; l++) {
    const line = lines[l];
    wrappedText += wrapLine(line, limit, indentPart) + "\n";
  }

  return wrappedText;
}

export function wrapLine(line: string, limit: number, indentPart?: RegExp): string {
  let wrappedLine = "";

  line = line.trimEnd();

  if (line.length <= limit) {
    return line;
  }

  const indent = line.match(/^\s*/)[0];
  const indentCharacter = indent?.[0] ?? " ";

  const match = line.match(indentPart);

  const matchIndent = match[0] ? indentCharacter.repeat(match[0].length) : "";
  const totalIndent = indent + matchIndent;

  const trimmedLine = line.trimStart();

  const words = trimmedLine.split(" ");

  let linesWrapped = 0
  let currentLine = "";

  for (let w = 0; w < words.length; w++) {
    const word = words[w];

    currentLine += word + " ";

    if (w == words.length - 1 || totalIndent.length + currentLine.length + words[w + 1].length > limit) {
      wrappedLine += (linesWrapped == 0 ? indent : totalIndent) + currentLine.trimEnd() + (w == words.length - 1 ? "" : "\n");

      linesWrapped++;
      currentLine = "";
    }
  }

  return wrappedLine;
}
