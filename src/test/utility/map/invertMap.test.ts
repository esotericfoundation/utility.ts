import { invertMap } from "../../../main";

describe("invertMap", () => {
    it("Correctly inverts maps", () => {
        const map = new Map([
            ["a", 1],
            ["b", 2],
            ["c", 3],
        ]);

        const invertedMap = invertMap(map);

        expect(invertedMap.get(1)).toBe("a");
        expect(invertedMap.get(2)).toBe("b");
        expect(invertedMap.get(3)).toBe("c");
    })
})
