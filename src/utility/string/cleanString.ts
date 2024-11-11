export function cleanString(text: string): string {
  return text
          .replaceAll("\r\n", "\n")
          .replaceAll(/(?<!\n)\n(?!\n)/g, " ");
}
