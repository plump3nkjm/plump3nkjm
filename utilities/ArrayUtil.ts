export const groupBy = <K, V>(
    array: readonly V[],
    getKey: (cur: V, idx: number, src: readonly V[]) => K
): [K, V[]][] =>
    Array.from(
        array.reduce((map, cur, idx, src) => {
            const key = getKey(cur, idx, src);
            const list = map.get(key);
            if (list) list.push(cur);
            else map.set(key, [cur]);
            return map;
        }, new Map<K, V[]>())
    );

export const sliceByNumber = (array: Array<any>, number: number) => {
    const arrayLength = Math.ceil(array.length / number)
    return new Array(arrayLength).fill(true).map((_, i) => array.slice(i * number, (i + 1) * number))
}