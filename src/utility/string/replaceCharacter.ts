/**
 * This function replaces a character in a {@link string} to a {@link newCharacter}.
 * @param string The string with the character to replace.
 * @param characterIndex The index of the character to replace with the {@link newCharacter}.
 * @param newCharacter The character to replace the old character with.
 * @returns The string with the old character replaced by the {@link newCharacter}.
 * @author Esoteric Enderman <esotericenderman@gmail.com>
 * @copyright 2024 [Esoteric Foundation](https://esoteric.foundation)
 * @license [GPL-3.0-only](https://github.com/EsotericFoundation/utility.ts/blob/main/LICENSE)
 */
export function replaceCharacter(string: string, characterIndex: number, newCharacter: string): string {
    return string.substring(0, characterIndex) + newCharacter + string.substring(characterIndex + 1);
}
