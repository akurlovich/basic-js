const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(array) {
    function getArrayDepth(obj) {
      if (Array.isArray(obj)) return 1 + Math.max(...obj.map(t => getArrayDepth(t)))
      else return 0
  }
  
  
    console.log(getArrayDepth([1,2,[3,4,[5,6],7,[8,[9,91]],10],11,12]));
    console.log(getArrayDepth([1,[1]]));
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
  }
};