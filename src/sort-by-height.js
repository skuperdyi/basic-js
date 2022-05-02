const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {


    let arrIndex = []
  for(let i = 0; i < arr.length - 1; i++){
    if(arr[i] === -1){
      arrIndex.push(i) 
  }
}
for(let i = 0; i < arr.length - 1;){
  if(arr[i] === -1){
    arr.splice(i, 1)
  }else{
      i++
    }
}
arr.sort(function(a, b){return a - b})
for(let j = 0; j < arrIndex.length;j++){
      arr.splice(arrIndex.at(j), 0, -1)
  } 
return arr;

//   let arrIndex = []
//   for(let i = 0; i < arr.length - 1; i++){
//     if(arr[i] === -1){
//       arrIndex.push(i)
//   }
// }
// for(let i = 0; i < arr.length - 1;){
//   if(arr[i] === -1){
//     arr.splice(i, 1)
//   }else{
//       i++
//     }
// }



// arr.sort(function(a, b){return a - b})
// return arr;

  // let arrIndex = ''
  // for(let i = 0; i < arr.length - 1;){
  // if(arr[i] === -1){
  // arr.splice(i, 1)
  // arrIndex = arrIndex + i
  // }else{
  //   i++
  // }
  // arr.sort(function(a, b){return a - b})
//   for(let j = 0; j < arrIndex.length - 1;j++){
//     arr.splice(arrIndex.charAt(j), 0, '-1')
// }
 
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
// return arrIndex;

module.exports = {
  sortByHeight
};
