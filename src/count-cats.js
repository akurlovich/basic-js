// const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let count = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] == '^^') {
        count++;
        // console.log(count);
      } 
    }
  }
  // console.log(count);
  return count;
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
};

// let matrix = [['##', 'dd', '00'], ['^^', '..', 'ss'], ['AA', '^^', 'Oo']];
// countCats(matrix);

