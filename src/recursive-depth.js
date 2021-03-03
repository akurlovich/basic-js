const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let array = arr;
    // return 
    function test(array) {
      return 1 + (array instanceof Array ? array.reduce(function(max, item) {
        return Math.max(max, test(item));
      }, 0) : -1);
    }
    return test(array);
    // console.log(test([1,[1]]))
    // if (Array.isArray(array)) return 1 + Math.max(...array.map(t => calculateDepth(t)))
    //   else return 0
    // return 1 + (arr instanceof Array ? arr.reduce(function(max, item) {
    //   return Math.max(max, calculateDepth(item));
    // }, 0) : -1);
      // return Array.isArray(array) ? 
      // 1 + Math.max(...array.map(calculateDepth)) :
      // 0;
    // function getArrayDepth(obj) {
    //   if (Array.isArray(obj)) return 1 + Math.max(...obj.map(t => getArrayDepth(t)))
    //   else return 0
    // }
  };
}
// console.log(calculateDepth([1,2,[3,4,[5,6],7,[8,[9,91]],10],11,12]));
// console.log(calculateDepth([1,[1]]))