const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    
      var calculateDepth = [];
      (function flat(array) {
        array.forEach(function(el) {
          if (Array.isArray(el)) flat(el);
          else calculateDepth.push(el);
        });
      })(array);
      return calculateDepth;
    }




//    let counter= 0;
//    for(let s=[...JSON.stringify(arr)].filter(i=>(i=="[" || i=="]")).join(""); s.length != 0; counter++){
//       s = s.replace(/\[\]/g, "");
//    }
//    return counter;
// }
  // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

  }


module.exports = {
  DepthCalculator
};
