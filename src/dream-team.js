const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(array) {
  let newArr = [],
      finArr = [];
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] == 'string') {
      newArr = array[i].split('');
      console.log(newArr);
      console.log(newArr[0]);
      finArr.push(newArr[0]);
    }

  }
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  // finArr.join('');
  // console.log(finArr.sort().join(''));
  return (finArr.sort().join(''));
};

// let array = ['Amelia', 'Yrace', 111, 'Lily', 'Ruby'];
// createDreamTeam(array);
