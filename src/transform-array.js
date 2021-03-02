const CustomError = require("../extensions/custom-error");

module.exports = function transform(array) {
  if (!(array instanceof Array)) {
    throw new CustomError('Not implemented')};
  let dn = '--discard-next',
      dp = '--discard-prev',
      ddn = '--double-next',
      ddp = '--double-prev',
      newArr = [];
  for (let i = 0; i < array.length; i++) {
    // if ((+array[i])) {
    //   newArr.push(array[i])
    // } else if (array[i] == dn) {
    //   // newArr.push(array[i + 1]);
    //   i++;
    // } else if (array[i] == ddn) {
    //     newArr.push((array[i + 1] ** 2));
    //     i++;
    // } else if (array[i] == dp) {
    //   newArr.pop();
    // } else if (array[i] == ddp) {
    //   // console.log(newArr[i - 1]);
    //   // console.log(newArr[i - 1]);
    //   newArr.pop();
    //   newArr.push((array[i - 1] ** 2));
    // }
    if (array[i] == dn) {
      // newArr.push(array[i + 1]);
      i++;
    } else
    if (array[i] == ddn) {
      newArr.push((array[i + 1] ** 2));
      i++;
    } else
    if (array[i] == dp) {
      newArr.pop();
    } else
    if (array[i] == ddp) {
      // console.log(newArr[i - 1]);
      // console.log(newArr[i - 1]);
      newArr.pop();
      newArr.push((array[i - 1] ** 2));
    } else
    newArr.push(array[i])
  }
  return newArr;
  // console.log(newArr);
  // for (let i = 0; i < newArr.length; i++) {
  //   console.log(typeof newArr[i])
  // }
  
  // remove line with error and write your code here
};
// let array = [1, 3, 5, '--discard-next', 6, 11, 4, '--discard-prev', 3, 3, 7, 18, '--double-next', 5, 8, '--double-prev'];
// transform(array);