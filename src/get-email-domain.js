const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let domain = ""
  for(let i = 0; i < email.length - 1;)
  if(email.charAt(i) === '@' && email.charAt(i + 1) !== '.'){
    domain = domain + email.slice(i + 1);
    break;
  }else{
    i++
  }
  return domain;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getEmailDomain
};
