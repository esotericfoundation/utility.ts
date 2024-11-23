import { mkdirSync, rmdirSync, writeFileSync } from "fs";
import { getFiles } from "../../../../utility/file/folder/getFiles";

describe("getFiles", () => {
    const directory = "./work";

    beforeEach(() => {
        mkdirSync(directory);
    });

    it("Should return an empty array when the input is an empty directory.", () => {
        const files = getFiles(directory);
        expect(files).toEqual([]);
        expect(files.length).toBe(0);
    });

    it("Should return an array with the file when the input is a file.", () => {
        const file = "./work/file.txt";
        writeFileSync(file, "Hello, World!");

        const files = getFiles(directory);
        expect(files).toEqual([file]);
        expect(files.length).toBe(1);
    });

    afterEach(() => {
        rmdirSync(directory, { recursive: true });
    });
});
