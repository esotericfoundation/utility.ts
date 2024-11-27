/**
 * This function is used to "clean" a string. This means that it will change all CRLF line endings to LF line endings.
 * @param text The text to "clean" (change all CRLF to LF).
 * @returns The "cleaned" text.
 * @author Esoteric Enderman <esotericenderman@gmail.com>
 * @copyright 2024 [Esoteric Foundation](https://esoteric.foundation)
 * @license [GPL-3.0-only](https://github.com/EsotericFoundation/utility.ts/blob/main/LICENSE)
 */
export function cleanString(text: string): string {
  return text.replaceAll("\r\n", "\n");
}
