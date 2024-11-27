import { readdirSync } from "fs";

/**
 * Gets files from a {@link directory} recursively.
 * @param directory The directory to get files from.
 * @returns The array of names of the files in the {@link directory}.
 * @author Esoteric Enderman <esotericenderman@gmail.com>
 * @copyright 2024 [Esoteric Foundation](https://esoteric.foundation)
 * @license [GPL-3.0-only](https://github.com/EsotericFoundation/utility.ts/blob/main/LICENSE)
 */
export function getFiles(directory: string) {
  const output = [];

  const files = readdirSync(directory);
  files.forEach((file) => {
    const path = `${directory}/${file}`;

    try {
      output.push(...getFiles(path));
    } catch (error) {
      output.push(path);
    }
  });

  return output;
}
