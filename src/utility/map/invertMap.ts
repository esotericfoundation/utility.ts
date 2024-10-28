export function invertMap<K, V>(map: Map<K, V>): Map<V, K> {
  const invertedMap = new Map<V, K>();

  map.forEach((value, key) => {
    invertedMap.set(value, key);
  });

  return invertedMap;
}
