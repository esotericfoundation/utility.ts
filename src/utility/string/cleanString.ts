export function cleanString(text: string): string {
  return text.replaceAll(/(?<!\n)\n(?!\n)/g, " ");
}
