const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  // var chainLength = ''
  getLength() {
    // let length = 0
    // for(let i = 0; i < chainLength.length - 1; i++){
    //   if(chainLength[i] === '~'){
    //     length += 1
    //   }else{
    //   i++
    // }
    // return length / 2;
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  addLink(/*value*/) {
    // if(chainLength === ''){
    //   return `( ${value} )`
    // }else{
    //   return `~~( ${value} )`
    // }

    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  removeLink(/*position*/) {

    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  reverseChain() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  finishChain() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
};

module.exports = {
  chainMaker
};
