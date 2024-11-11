import { objectIncludesValue } from "../../../main";

describe("objectIncludesValue", () => {
    it("Correctly checks if object includes value", () => {
        const object = {
            a: 1,
            b: 2,
            c: 3,
        };

        expect(objectIncludesValue(object, 1)).toBe(true);
        expect(objectIncludesValue(object, 2)).toBe(true);
        expect(objectIncludesValue(object, 3)).toBe(true);
        expect(objectIncludesValue(object, 4)).toBe(false);
    })
});
