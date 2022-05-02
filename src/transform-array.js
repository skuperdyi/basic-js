const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
if(Array.isArray(arr)){ 
      for(let i = 0; i < arr.length; i++){
        if(arr[0] === "--double-prev" || arr[0] === "--discard-prev"){ 
          arr.splice(0, 1)
        }else if(arr[arr.length - 1] === "--double-next" || arr[arr.length - 1] === "--discard-next"){
          arr.splice(arr.length - 1, 1)
        }else if(arr[i] === "--double-next"){
          arr.splice(i, 1)
          arr.splice(i, 0, i + 1)
        }else if(arr[i] === "--double-prev"){
          arr.splice(i, 1)
          arr.splice(i, 0, i - 1)
        }else if(arr[i] === "--discard-prev"){
          arr.splice(i, 1)
          arr.splice((i - 1), 1)
        }else if(arr[i] === "--discard-next"){
          arr.splice(i, 1)
          arr.splice((i + 1), 1)
        }else{
        arr = arr
        }
  }
  return arr;
}else{
  return  new Error("'arr' parameter must be an instance of the Array!")

  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
}



module.exports = {
  transform
};
