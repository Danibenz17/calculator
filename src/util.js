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
        } null
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
  },
  max: (...args) => {
    const [arr] = args;
    if (typeof arr !== "object" || arr.length === 0) {
      return undefined;
    }
    let result = arr[0];
    if (Array.isArray(arr)) {
      for (let index = 0; index < arr.length; index++) {
        if (result < arr[index]) {
          result = arr[index];
        }
      }
      return result;
    }
  },
  maxBy: (...args) => {
    const [arr, cb] = args;
    if (typeof (arr) !== 'object' || arr.length === 0) {
      return undefined
    }
    let result = arr[0];
    if (Array.isArray(arr)) {
      for (let index = 0; index < arr.length; index++) {
        if (cb(result) < (cb(arr[index]))) {
          result = (arr[index])
        }
      }
    } else {
      for (const key in arr) {
        if (cb(result) < (cb(arr[key]))) {
          result = (arr[key])
        }
      }
    }
    return result
  },
  find: (...args) => {
    const [arr, cb] = args;
    if (typeof (arr) !== 'object' || arr.length === 0) {
      return undefined
    }
    if (Array.isArray(arr)) {
      for (let index = 0; index < arr.length; index++) {
        if ((cb(arr[index]))) {
          return arr[index]
        }
      }
    } else {
      for (const key in arr) {
        if ((cb(arr[key]))) {
          return (arr[key])
        }
      }
    }
  },
  sum: (...args) => {
    const [arr] = args;
    if (typeof (arr) !== 'object' || arr.length === 0) {
      return undefined
    }
    let result = 0
    if (Array.isArray(arr)) {
      for (let index = 0; index < arr.length; index++) {
        result += arr[index]
      }
    }
    return result
  }
}
export default util;