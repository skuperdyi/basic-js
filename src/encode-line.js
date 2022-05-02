const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let quantity = 1;
  let newCode = "";
  if(str === ''){
    return str;
  }else if(str.length < 2 ){
      return "1" + str;
  }
  for(let i = 0; i < str.length - 1; i++){
      if(str.charAt(i) === str.charAt(i + 1)){
          quantity++;
      }else{
          if(quantity > 1){
          newCode = newCode + quantity + "" + str.charAt(i);
          quantity = 1;
          }else{
              newCode = newCode + "" + str.charAt(i);
          }
      }
      if(i === str.length - 2){
          if(quantity > 1){
          newCode = newCode + quantity + "" + str.charAt(i + 1);
          }else{
              newCode = newCode + "" + str.charAt(i + 1) ;
          }
      }
  }
  return newCode;
  

  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  encodeLine
};
