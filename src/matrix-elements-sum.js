const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let columnsWithZeroIdx = [];
  let sumColumn = 0;
  let columnCount = matrix[0].length;

  for (let i = 0; i < columnCount; i++) {
    for (let j = 0; j < matrix.length; j++) {
      sumColumn += matrix[j][i];
      if (matrix[j][i] === 0) {
        columnsWithZeroIdx.push(sumColumn);
        break;
      }
    }
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
return sumColumn;
}

module.exports = {
  getMatrixElementsSum
};
