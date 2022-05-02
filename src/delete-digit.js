const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  if(n == '10'){
    n = 1
    return n;
  }else{
  n = n + ""
  for (let i = 0; i < n.length - 1; ){
    if(n[i] < n[i+1] || n[i] === n.length -1){
      n = n.slice(0, i) + n.slice(i+1);
      return Number(n);
    }else{
      i += 1
    }
  }
}


  
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  deleteDigit
};
