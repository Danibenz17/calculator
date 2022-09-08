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
    console.log("came here -- " + Array.isArray(arr));
    if (Array.isArray(arr)) {
      console.log(`came here - ${arr}`)
      for (let index = 0; index < arr.length; index++) {
        result.push(cb(arr[index], index));
      }
    } else {
      for (const key in arr){
        result.push(cb(arr[key], key));
      }
    }
    return result;
  }
};
export default util;