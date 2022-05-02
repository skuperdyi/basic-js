const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if(Array.isArray(members)){
  let result = [];
  let newArr = members.filter((el) => (typeof el) === 'string'); 
  let newArray = newArr.map((el) => el.trim())
  for(let i = 0; i < newArray .length; i++){
    result = [...result, newArray[i][0].toUpperCase()]
  }
  return result.sort().join('')
}else{
  return false
}
}

module.exports = {
  createDreamTeam
};
