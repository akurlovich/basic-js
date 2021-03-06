const CustomError = require("../extensions/custom-error");

module.exports = function transform(array) {
  if (!(array instanceof Array)) {
    // throw new CustomError('Not implemented')};
    throw new Error('Not implemented')};
  let dn = '--discard-next',
      dp = '--discard-prev',
      ddn = '--double-next',
      ddp = '--double-prev',
      newArr = [];
  for (let i = 0; i < array.length; i++) {
    switch (array[i]) {
      case dn:
        i++;
        // newArr.push(array[i + 1]);
        break;
      case ddn:
        newArr.push(array[i + 1]);
        // newArr.push(array[i + 1]);
        break;
      case dp:
        if (array[i - 2] == dn) {
          newArr.push(array[i]);
        } else {
        newArr.pop();
        break;
        }
      case ddp:
        if (array[i - 2] == dn) {
          newArr.push(array[i]);
        } 
        //!
        else if (array[i - 2] == ddn) {
          newArr.push(array[i - 1]);  
        }
        //!
        else {
        // newArr.pop();
        // newArr.push(array[i - 1]);
        newArr.push(array[i - 1]);
        break;
        }
      default:
        newArr.push(array[i]);
    }
  };

  for (let n = 0; n < newArr.length; n++) {
    if (newArr[n] === ddp) {newArr.splice(n, 1)};
    if (newArr[n] === undefined) {newArr.splice(n, 1)};
    if (newArr[n] === dn) {newArr.splice(n, 1)};
    if (newArr[n] === dp) {newArr.splice(n, 1)}
      
  }
  // console.log(newArr);
  for (let n = 0; n < newArr.length; n++) {
    if (newArr[n] === ddp) {newArr.splice(n, 1)};
    if (newArr[n] === dp) {newArr.splice(n, 1)};
    if (newArr[n] === ddn) {newArr.splice(n, 1)}
  }


  for (let n = 0; n < newArr.length; n++) {
    if (newArr[n] === undefined) {newArr.splice(n, 1)};
    if (newArr[n] === dp) {newArr.splice(n, 1)};
    if (newArr[n] === ddp) {newArr.splice(n, 1)}
  }
// console.log(newArr);
  return newArr;
};

// let array = [1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5, 8, 11, '--double-next', 1337, '--double-prev', 4, 5];
// transform(array);