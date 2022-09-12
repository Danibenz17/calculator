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

    describe("when second argument is string", () => {
      test("returns property values when array of objects is passed", () => {
        const data = [
          { name: "Ram", age: 25 },
          { name: "Raj", age: 23 },
          { name: "Sita", age: 22 },
        ];
        expect(util.map(data, "name")).toEqual(["Ram", "Raj", "Sita"]);
        expect(util.map(data, "name")).toEqual(["Ram", "Raj", "Sita"]);
        expect(util.map(data, "age")).toEqual([25, 23, 22]);
      });

      test("returns function result for each element in array", () => {
        const data = ["Ram", "Raj", "Sita"];
        expect(util.map(data, "length")).toEqual([3, 3, 4]);
      });

      test("returns function result for each element in object", () => {
        const data = { "1st": "Ram", "2nd": "Raj", "3rd": "Sita" };
        expect(util.map(data, "length").sort()).toEqual([3, 3, 4].sort());
      });
    });
  });
  describe("when object is passed", () => {
    const sampleObject = { a: 1, b: 2, c: 3 };

    test("accepts object as argument", () => {
      expect(util.map(sampleObject, (value) => value + 1).sort()).toEqual(
        [2, 3, 4].sort()
      );
    });

    test("calls callback with element as 1st argument", () => {
      expect(util.map(sampleObject, (value) => value).sort()).toEqual(
        [1, 2, 3].sort()
      );
    });

    test("calls callback with key as 2nd argument", () => {
      expect(util.map(sampleObject, (_value, key) => key).sort()).toEqual(
        ["a", "b", "c"].sort()
      );
    });

    test("returns same object when 2nd argument is not given", () => {
      expect(util.map(sampleObject)).toEqual(sampleObject);
    });
  });
});

describe(".filter", () => {
  describe("when wrong arguments are passed", () => {
    test("returns empty array when no arguments are passed", () => {
      expect(util.filter()).toEqual([]);
    });
    test("returns empty array when null is passed", () => {
      expect(util.filter(null)).toEqual([]);
    });
    test("returns empty array when undefined is passed", () => {
      expect(util.filter(undefined)).toEqual([]);
    });
    test("returns empty array when non iterable argument is passed", () => {
      expect(util.filter(true)).toEqual([]);
      expect(util.filter(false)).toEqual([]);
    });
  });

  describe("when array is passed", () => {
    const sampleArray = [1, 2, 3, 4, 5];
    test("returns elements which returns truthy", () => {
      expect(util.filter(sampleArray, (e) => e % 2 === 0)).toEqual([2, 4]);
    });

    test("calls callback with element as 1st argument", () => {
      expect(util.filter(sampleArray, (e) => e % 2 === 0)).toEqual([2, 4]);
    });

    test("calls callback with index as 2nd argument", () => {
      expect(util.filter(sampleArray, (_e, i) => i % 2 === 0)).toEqual([1, 3, 5]);
    });

    test("returns only truthy elements when second argument is not passed", () => {
      expect(util.filter([1, null, undefined, '', 0, true, false, 'apple'])).toEqual([1, true, 'apple']);
    });
  });
  describe("when second argument is string", () => {
    test("returns property values when array of objects is passed", () => {
      const data = [
        { name: "Ram", active: true },
        { name: "Raj", active: false },
        { name: "Sita", active: true },
      ];
      expect(util.filter(data, "active")).toEqual([
        { name: "Ram", active: true },
        { name: "Sita", active: true },
      ]);
    });

    test("returns filtered array using function result for each element in array", () => {
      const data = ["Ram", "Raj", "", "Sita"];
      expect(util.filter(data, "length")).toEqual(["Ram", "Raj", "Sita"]);
    });

    test("returns filtered array using function result for each element in object", () => {
      const data = { "1st": "Ram", "2nd": "", "3rd": "Sita", "4th": "Raj" };
      expect(util.filter(data, "length").sort()).toEqual(["Ram", "Sita", "Raj"].sort());
    });
  });
  describe("when object is passed", () => {
    const sampleObject = { apple: 1, banana: 2, almond: 3 };

    test("accepts object as argument", () => {
      expect(util.filter(sampleObject, (value) => value < 3).sort()).toEqual(
        [1, 2].sort()
      );
    });

    test("calls callback with element as 1st argument", () => {
      expect(util.filter(sampleObject, (value) => value < 3).sort()).toEqual(
        [1, 2].sort()
      );
    });

    test("calls callback with key as 2nd argument", () => {
      expect(util.filter(sampleObject, (_value, key) => /^a/gi.test(key)).sort()).toEqual(
        [1, 3].sort()
      );
    });

    test("returns truthy values of object when 2nd argument is not given", () => {
      const object = { 'first': 1, 'second': null, 'third': undefined, 'fourth': 0, 'fifth': true, 'sixth': false, seventh: 'apple' }
      expect(util.filter(object).sort()).toEqual([1, true, 'apple'].sort());
    })
  });
});