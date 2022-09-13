import util from "../src/util.js";

// describe(".map", () => {
//   describe("when wrong arguments are passed", () => {
//     test("returns empty array when no arguments are passed", () => {
//       expect(util.map()).toEqual([]);
//     });
//     test("returns empty array when null is passed", () => {
//       expect(util.map(null)).toEqual([]);
//     });
//     test("returns empty array when undefined is passed", () => {
//       expect(util.map(undefined)).toEqual([]);
//     });
//     test("returns empty array when non iterable argument is passed", () => {
//       expect(util.map(true)).toEqual([]);
//       expect(util.map(false)).toEqual([]);
//     });
//   });

//   describe("when array is passed", () => {
//     const sampleArray = [1, 2, 3, 4, 5];
//     test("accepts array as argument", () => {
//       expect(util.map(sampleArray, (e) => e + 1)).toEqual([2, 3, 4, 5, 6]);
//     });

//     test("calls callback with element as 1st argument", () => {
//       expect(util.map(sampleArray, (e) => e)).toEqual(sampleArray);
//     });

//     test("calls callback with index as 2nd argument", () => {
//       expect(util.map(sampleArray, (_e, i) => i)).toEqual([0, 1, 2, 3, 4]);
//     });

//     test("returns same array when 2nd argument is not given", () => {
//       expect(util.map(sampleArray)).toEqual(sampleArray);
//     });

//     describe("when second argument is string", () => {
//       test("returns property values when array of objects is passed", () => {
//         const data = [
//           { name: "Ram", age: 25 },
//           { name: "Raj", age: 23 },
//           { name: "Sita", age: 22 },
//         ];
//         expect(util.map(data, "name")).toEqual(["Ram", "Raj", "Sita"]);
//         expect(util.map(data, "name")).toEqual(["Ram", "Raj", "Sita"]);
//         expect(util.map(data, "age")).toEqual([25, 23, 22]);
//       });

//       test("returns function result for each element in array", () => {
//         const data = ["Ram", "Raj", "Sita"];
//         expect(util.map(data, "length")).toEqual([3, 3, 4]);
//       });

//       test("returns function result for each element in object", () => {
//         const data = { "1st": "Ram", "2nd": "Raj", "3rd": "Sita" };
//         expect(util.map(data, "length").sort()).toEqual([3, 3, 4].sort());
//       });
//     });
//   });
//   describe("when object is passed", () => {
//     const sampleObject = { a: 1, b: 2, c: 3 };

//     test("accepts object as argument", () => {
//       expect(util.map(sampleObject, (value) => value + 1).sort()).toEqual(
//         [2, 3, 4].sort()
//       );
//     });

//     test("calls callback with element as 1st argument", () => {
//       expect(util.map(sampleObject, (value) => value).sort()).toEqual(
//         [1, 2, 3].sort()
//       );
//     });

//     test("calls callback with key as 2nd argument", () => {
//       expect(util.map(sampleObject, (_value, key) => key).sort()).toEqual(
//         ["a", "b", "c"].sort()
//       );
//     });

//     test("returns same object when 2nd argument is not given", () => {
//       expect(util.map(sampleObject)).toEqual(sampleObject);
//     });
//   });
// });

// describe(".filter", () => {
//   describe("when wrong arguments are passed", () => {
//     test("returns empty array when no arguments are passed", () => {
//       expect(util.filter()).toEqual([]);
//     });
//     test("returns empty array when null is passed", () => {
//       expect(util.filter(null)).toEqual([]);
//     });
//     test("returns empty array when undefined is passed", () => {
//       expect(util.filter(undefined)).toEqual([]);
//     });
//     test("returns empty array when non iterable argument is passed", () => {
//       expect(util.filter(true)).toEqual([]);
//       expect(util.filter(false)).toEqual([]);
//     });
//   });

//   describe("when array is passed", () => {
//     const sampleArray = [1, 2, 3, 4, 5];
//     test("returns elements which returns truthy", () => {
//       expect(util.filter(sampleArray, (e) => e % 2 === 0)).toEqual([2, 4]);
//     });

//     test("calls callback with element as 1st argument", () => {
//       expect(util.filter(sampleArray, (e) => e % 2 === 0)).toEqual([2, 4]);
//     });

//     test("calls callback with index as 2nd argument", () => {
//       expect(util.filter(sampleArray, (_e, i) => i % 2 === 0)).toEqual([1, 3, 5]);
//     });

//     test("returns only truthy elements when second argument is not passed", () => {
//       expect(util.filter([1, null, undefined, '', 0, true, false, 'apple'])).toEqual([1, true, 'apple']);
//     });
//   });
//   describe("when second argument is string", () => {
//     test("returns property values when array of objects is passed", () => {
//       const data = [
//         { name: "Ram", active: true },
//         { name: "Raj", active: false },
//         { name: "Sita", active: true },
//       ];
//       expect(util.filter(data, "active")).toEqual([
//         { name: "Ram", active: true },
//         { name: "Sita", active: true },
//       ]);
//     });

//     test("returns filtered array using function result for each element in array", () => {
//       const data = ["Ram", "Raj", "", "Sita"];
//       expect(util.filter(data, "length")).toEqual(["Ram", "Raj", "Sita"]);
//     });

//     test("returns filtered array using function result for each element in object", () => {
//       const data = { "1st": "Ram", "2nd": "", "3rd": "Sita", "4th": "Raj" };
//       expect(util.filter(data, "length").sort()).toEqual(["Ram", "Sita", "Raj"].sort());
//     });
//   });
//   describe("when object is passed", () => {
//     const sampleObject = { apple: 1, banana: 2, almond: 3 };

//     test("accepts object as argument", () => {
//       expect(util.filter(sampleObject, (value) => value < 3).sort()).toEqual(
//         [1, 2].sort()
//       );
//     });

//     test("calls callback with element as 1st argument", () => {
//       expect(util.filter(sampleObject, (value) => value < 3).sort()).toEqual(
//         [1, 2].sort()
//       );
//     });

//     test("calls callback with key as 2nd argument", () => {
//       expect(util.filter(sampleObject, (_value, key) => /^a/gi.test(key)).sort()).toEqual(
//         [1, 3].sort()
//       );
//     });

//     test("returns truthy values of object when 2nd argument is not given", () => {
//       const object = { 'first': 1, 'second': null, 'third': undefined, 'fourth': 0, 'fifth': true, 'sixth': false, seventh: 'apple' }
//       expect(util.filter(object).sort()).toEqual([1, true, 'apple'].sort());
//     })
//   });
// });
describe(".max", () => {
  describe("when wrong arguments are passed", () => {
    test("returns null when empty array are passed", () => {
      expect(util.max([])).toEqual(undefined);
    });
  });
  describe("when an array is passed", () => {
    test("returns the highest number in the array", () => {
      const samplearray = [10, 4, 2, 7, 8, 1, 3, 5, 9, 6];
      expect(util.max(samplearray)).toEqual(10)
    });
    test("return the highest number from the array of negative values", () => {
      const samplearray1 = [-5, -3, -7, -4, -6];
      expect(util.max(samplearray1)).toEqual(-3)
    })
  });
});
describe(".maxBy", () => {
  describe("when wrong arguments are passed", () => {
    test("returns null when empty array are passed", () => {
      expect(util.maxBy()).toEqual(undefined);
    });
  });
  describe("when an array is passed", () => {
    test("returns the biggest string by length in the array", () => {
      const samplearray2 = ["abi", "ben", "cindy", "deborah", "sana"];
      expect(util.maxBy(samplearray2, (e) => e.length)).toEqual("deborah")
    });
  });
  describe("when an object is passed", () => {
    test("accepts object as argument", () => {
      const sampleObject = [{
        age: 23, height: 168, name: "ben"
      },
      {
        age: 21, height: 167, name: "ann"
      },
      {
        age: 25, height: 170, name: "daniel"
      }]
      expect(util.maxBy(sampleObject, (value) => value.height)).toEqual(
        { age: 25, height: 170, name: "daniel" })
    });
  })
});
describe(".find", () => {
  describe("when wrong arguments are passed", () => {
    test("returns null when empty array are passed", () => {
      expect(util.find()).toEqual(undefined);
    });
  });
  describe("when an array is passed", () => {
    test("returns the element to find from the array", () => {
      const samplearray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      const element = 7;
      expect(util.find(samplearray, (e) => e === element)).toEqual(7)
    });
    test("return the  string to find from the array ", () => {
      const samplearray1 = ["ann", "sana", "jhon", "dani"];
      const element1 = "sana"
      expect(util.find(samplearray1, (e) => e === element1)).toEqual("sana")
    })
  });
  describe("when an object is passed", () => {
    test("accepts object as argument", () => {
      const sampleObject = [{
        age: 25, height: 165, name: "ann"
      },
      {
        age: 21, height: 167, name: "ben"
      },
      {
        age: 23, height: 170, name: "daniel"
      }]
      expect(util.find(sampleObject, (value) => value.age < 23)).toEqual(
        { age: 21, height: 167, name: "ben" })
    });
  })
});
describe(".sum", () => {
  describe("when wrong arguments are passed", () => {
    test("returns null when empty array are passed", () => {
      expect(util.sum([])).toEqual(undefined);
    });
  });
  describe("when an array is passed", () => {
    test("returns the sum of array", () => {
      const samplearray4 = [1, 2, 3, 4, 5];
      expect(util.sum(samplearray4)).toEqual(15)
    });
    test("return the sum of array of negative values", () => {
      const samplearray5 = [-7, -6, -5, -4, -3];
      expect(util.sum(samplearray5)).toEqual(-25)
    })
  });
});