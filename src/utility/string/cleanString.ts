export function cleanString(text: string): string {
  return text
          .replaceAll("\r\n", "\n")
}
