export function cleanString(text: string): string {
  return text
          .replaceAll("\r", "\n")
          .replaceAll(/(?<!\n)\n(?!\n)/g, " ");
}
