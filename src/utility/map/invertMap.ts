/**
 * This method inverts a {@link map}, changing all keys to values and all values to keys.
 * @param map The map to invert.
 * @returns The inverted map.
 * @author Esoteric Enderman <esotericenderman@gmail.com>
 * @copyright 2024 [Esoteric Foundation](https://esoteric.foundation)
 * @license [GPL-3.0-only](https://github.com/EsotericFoundation/utility.ts/blob/main/LICENSE)
 */
export function invertMap<K, V>(map: Map<K, V>): Map<V, K> {
  const invertedMap = new Map<V, K>();

  map.forEach((value, key) => {
    invertedMap.set(value, key);
  });

  return invertedMap;
}
