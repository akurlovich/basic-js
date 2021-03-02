const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(array) {
  
  if (!(array instanceof Array)) {
    return false;
  } else 
  if (array.length == 0) {
    return false;
  } else {
  
  let newArr = [],
      finArr = [];
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] == 'string') {
      newArr = array[i].trim().toUpperCase().split('');
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
  }
};

// let array = ['amelia', 'Yrace', 111, 'Lily', 'Ruby'];
// createDreamTeam(array);
