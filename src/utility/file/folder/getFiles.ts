import { readdirSync } from "fs";

/**
 * Gets files from a directory recursively.
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
