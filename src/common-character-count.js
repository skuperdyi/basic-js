const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
    let str1 = new Array(26);
    let str2 = new Array(26);
    str1.fill(0);
    str2.fill(0);
    let i, count = 0;
    for (i = 0; i < s1.length; i++){
      str1[s1[i].charCodeAt() - 'a'.charCodeAt()]++;
    } 
    for (i = 0; i < s2.length; i++){
      str2[s2[i].charCodeAt() - 'a'.charCodeAt()]++;
    }
    for (i = 0; i < 26; i++){
      count += (Math.min(str1[i], str2[i]));
    }    
    return count;
}
 
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here


module.exports = {
  getCommonCharacterCount
};


 // let quantity = 0;
  // for (let i = 0; i < s1.length - 1; i++) {
  //   for (let j = 0; j < s2.length - 1;) {
  //     if (s1[i] === s2[j]) {
  //       quantity += 1;
  //       s1 = s1.slice(0, i) + s1.slice(i + 1);
  //       s2 = s2.slice(0, j) + s2.slice(j + 1);
  //       // console.log(quantity);
  //       // console.log(s1);
  //       // console.log(s2);
  //     } else {
  //       j++
  //       quantity += 0;
  //     }
  //   }
  // }
  // return quantity