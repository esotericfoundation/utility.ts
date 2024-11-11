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

  console.log(line)

  if (line.length <= limit) {
    return line;
  }

  let indent = line.match(/^\s*/)[0];

  if (indent.length != 0) {
    const indentCharacter = indent[0];

    const match = line.match(indentPart);
    indent += indentCharacter.repeat(match[0].length);  
  }

  const trimmedLine = line.trimStart();

  const words = trimmedLine.split(" ");

  let currentLine = "";

  for (let w = 0; w < words.length; w++) {
    const word = words[w];

    currentLine += word + " ";

    if (w == words.length - 1 || currentLine.length + words[w + 1].length > limit) {
      wrappedLine += indent + currentLine.trimEnd() + "\n";
      currentLine = "";
    }
  }

  return wrappedLine;
}
