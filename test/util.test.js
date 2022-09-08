import util from "../src/util.js";

describe(".map", () => {
    describe("when wrong arguments are passed", () => {
        test("returns empty array when no arguments are passed", () => {
            expect(util.map()).toEqual([]);
        });
        test("returns empty array when null is passed", () => {
            expect(util.map(null)).toEqual([]);
        });
        test("returns empty array when undefined is passed", () => {
            expect(util.map(undefined)).toEqual([]);
        });
        test("returns empty array when non iterable argument is passed", () => {
            expect(util.map(true)).toEqual([]);
            expect(util.map(false)).toEqual([]);
        });
    });

    describe("when array is passed", () => {
        const sampleArray = [1, 2, 3, 4, 5];
        test("accepts array as argument", () => {
            expect(util.map(sampleArray, (e) => e + 1)).toEqual([2, 3, 4, 5, 6]);
        });

        test("calls callback with element as 1st argument", () => {
            expect(util.map(sampleArray, (e) => e)).toEqual(sampleArray);
        });

        test("calls callback with index as 2nd argument", () => {
            expect(util.map(sampleArray, (_e, i) => i)).toEqual([0, 1, 2, 3, 4]);
        });

        test("returns same array when 2nd argument is not given", () => {
            expect(util.map(sampleArray)).toEqual(sampleArray);
        });
    });
    describe("when object is passed", () => {
        const sampleObject = { a: 1, b: 2, c: 3 };

        test("accepts object as argument", () => {
            expect(util.map(sampleObject, (v) => v + 1).sort()).toEqual([2, 3, 4].sort());
        });

        test("calls callback with element as 1st argument", () => {
            expect(util.map(sampleObject, (e) => e).sort()).toEqual([1, 2, 3].sort());
        });

        test("calls callback with key as 2nd argument", () => {
            expect(util.map(sampleObject, (value, key) => key).sort()).toEqual(['a', 'b', 'c'].sort());
        });

        test("returns same object when 2nd argument is not given", () => {
            expect(util.map(sampleObject)).toEqual(sampleObject);
        });
    });
});