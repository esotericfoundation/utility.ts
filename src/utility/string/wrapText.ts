import { cleanString } from "./cleanString";

/**
 * This function wraps {@link text} to a certain {@link limit} with a configurable detection for {@link indentPart}s.
 * @param text The text to wrap over multiple lines.
 * @param limit The limit of characters in a single line of {@link text}.
 * @param indentPart A regular expression to detect indent characters of the {@link text}.
 * @returns The wrapped text.
 * @author Esoteric Enderman <esotericenderman@gmail.com>
 * @copyright 2024 [Esoteric Foundation](https://esoteric.foundation)
 * @license [GPL-3.0-only](https://github.com/EsotericFoundation/utility.ts/blob/main/LICENSE)
 */
export function wrapText(text: string, limit: number, indentPart?: RegExp): string {
  text = cleanString(text);
  let wrappedText = "";

  const paragraphNewlines = [...text.matchAll(/\n{2,}/g)];

  const paragraphs = text.split(/\n{2,}/g);
  for (let p = 0; p < paragraphs.length; p++) {
    const paragraph = paragraphs[p];
    wrappedText += wrapParagraph(paragraph, limit, indentPart) + (paragraphNewlines[p]?.[0] ?? "\n\n");
  }

  return wrappedText.trimEnd() + "\n";
}

function wrapParagraph(paragraph: string, limit: number, indentPart?: RegExp): string {
  let wrappedParagraph = "";

  paragraph = paragraph.trimEnd();

  const indent = paragraph.match(/^\s*/)[0];
  const indentCharacter = indent[0] ?? " ";

  if (paragraph.length <= limit) {
    if (paragraph === "") return "\n";

    if (!/\n/.test(paragraph)) {
      return paragraph;
    }

    return paragraph.replaceAll(RegExp(`(?<!^)${indentCharacter}{2,}`, "g"), " ").replaceAll("\n", "");
  }

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
