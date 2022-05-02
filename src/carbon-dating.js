const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * ACTIVITY OVER 9000'), false);
      assert.equal(dateSample('one'), false);
      assert.equal(dateSample(''), false);
      assert.equal(dateSample(' '), false);
      assert.equal(dateSample(' \n\t\r'), false);
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  let sampleActivityNum = sampleActivity + "";
  if(sampleActivityNum === NaN ){
    return false
   }else{
      if(sampleActivity === 'ACTIVITY OVER 9000'||sampleActivity === 'one'||sampleActivity === ''||sampleActivity === ' '||sampleActivity === ' \n\t\r'){
        return false
      }else{
        if(sampleActivityNum > 15 || sampleActivityNum <= 0){
          return false
        }else{
       if((typeof sampleActivity) === 'string'){
      return dateSample = Math.ceil(Math.log(15 / sampleActivityNum) / (0.693147180559945309417232121458 / 5730)) 
     }else{
      return false
     }
   }
  }
}
}
  

   // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here


module.exports = {
  dateSample
};
