/**
 * This method checks if an object includes a value.
 * @param object The object to check.
 * @param value The value to check for.
 * @returns `true` if the {@link object} includes the value, `false` otherwise.
 * @author Esoteric Enderman <esotericenderman@gmail.com>
 * @copyright 2024 [Esoteric Foundation](https://esoteric.foundation)
 * @license [GPL-3.0-only](https://github.com/EsotericFoundation/utility.ts/blob/main/LICENSE)
 */
export function objectIncludesValue(object: Object, value: any) {
  return Object.values(object).includes(value);
}
