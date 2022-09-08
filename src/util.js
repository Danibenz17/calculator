const util = {

  map: (...args) => {
    const [arr, cb] = args;
    // const arr = args[0];
    // const cb = args[1];

    if (typeof (arr) !== 'object' || arr === null) {
      return []
    }
    if (cb === undefined) {
      return args[0];
    }
    let result = [];
    if (Array.isArray(arr)) {
      for (let index = 0; index < arr.length; index++) {
        if (typeof cb === "string") {
          result.push(arr[index][cb]);
        } else {
          result.push(cb(arr[index], index));
        }
      }
    } else  {
      for (const key in arr) {
        if (typeof cb === "string") {
          result.push(arr[key][cb]);
        } else {
          result.push(cb(arr[key], key));
        }
      }
    }
      return result;
    },
  };
  export default util;