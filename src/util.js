const util = {

  map: (...args) => {
    const [arr, cb] = args;
    if (typeof (arr) !== 'object' || arr === null) {
      return []
    }
    if (cb === undefined) {
      return arr;
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
    } else {
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
  filter: (...args) => {
    const [arr, cb] = args;
    if (typeof (arr) !== 'object' || arr === null) {
      return []
    }
    let result = [];
    if (Array.isArray(arr)) {
      for (let index = 0; index < arr.length; index++) {
        if (cb === undefined) {
          if (arr[index]) {
            result.push(arr[index]);
          }
        } else if (typeof cb === "string") {
          if (arr[index][cb]) {
            result.push(arr[index]);
          }
        } else {
          if (cb(arr[index], index)) {
            result.push(arr[index]);
          }
        }
      }
    } else {
      for (const key in arr) {
        if (cb === undefined) {
          if (arr[key]) {
            result.push(arr[key])
          }
        } else if (typeof cb === "string") {
          if (arr[key][cb]) {
            result.push(arr[key]);
          }
        } else {
          if (cb(arr[key], key)) {
            result.push(arr[key]);
          }
        }
      }
    }
    return result;
  }
};
export default util;