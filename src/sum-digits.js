const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let sum = 0;
  let str = n + "";
  for(let i = 0; i < str.length; i++){
    console.log(str[i])
  sum = sum + Number(str[i]);
  }
   if(sum > 9){
    let sum1 = 0
    let str1 = sum + "";
    for(let j = 0; j < str1.length; j++){
      sum1 += Number(str1[j]);
      }
      return sum1
    }else{
    return sum
    
}

  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getSumOfDigits
};
