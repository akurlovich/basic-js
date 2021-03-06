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
    // console.log(i, ' ', array[i], ' ', newArr);
    switch (array[i]) {
      case dn:
        // console.log(array[i], ' ', 'dn', ' ', i, ' ', newArr);
        i++;
        newArr.push(array[i + 1]);
        // console.log(array[i], ' ', 'dn', ' ', i, ' ', newArr);
        break;
      case ddn:
        // console.log(array[i], ' ', 'ddn');
        newArr.push(array[i + 1]);
        newArr.push(array[i + 1]);
        break;
      case dp:
        // console.log(array[i], ' ', 'dp');
        if (array[i - 2] == dn) {
          newArr.push(array[i]);
        } else {
        newArr.pop();
        break;
        }
      case ddp:
        // console.log(array[i], ' ', 'ddp', array[i - 2]);
        if (array[i - 2] == dn) {
          newArr.push(array[i]);
        } else {
        newArr.pop();
        newArr.push(array[i - 1]);
        break;
        }
      default:
        // console.log(array[i], ' ', newArr);
        newArr.push(array[i]);
    }

    
// //! 
//     if (array[i] == dn) {i++}
//       // else newArr.push(array[i]);
//     else 
//     if (array[i] == ddn) {
//       newArr.push(array[i + 1]);
//       newArr.push(array[i + 1]);
//       i++;}
//       // else newArr.push(array[i]);
//     else 
//     if (array[i] == dp) {newArr.pop();}
//       // else newArr.push(array[i]);
//     else 
//     if ((array[i] == ddp) && (array[i - 2] !== dn)) {
//         newArr.pop();
//         newArr.push(array[i - 1]);}
//       else newArr.push(array[i]);
// //!



  //   if (array[i] == dn) {
  //     // newArr.push(array[i + 1]);
  //     // console.log(array[i], i);
  //     i++;
  //   } else
  //   if (array[i] == ddn) {
  //     newArr.push((array[i + 1] ** 2));
  //     console.log('ddn');
  //     i++;
  //   } else
  //   if (array[i] == dp) {
  //     // console.log(newArr + 'dp');
  //     newArr.pop();
  //   } else
  //   if ((array[i] == ddp) && (array[i - 2] !== dn)) {
  //     // console.log(newArr[i - 1]);
  //     // console.log(newArr[i - 1]);
  //       // newArr.pop();
  //     newArr.push(array[i - 1]);
  //     console.log(newArr);


  //   } else
  //   newArr.push(array[i])
  // }


  // for (let n = 0; n < newArr.length; n++) {
  //   // if (newArr[n] === NaN) {
  //   if (Number.isNaN(newArr[n])) {
  //     newArr.splice(n, 1);
  //   }
  // }

  // 
  
  
  };

  // for (let n = 0; n < newArr.length; n++) {
  //     if (newArr[n] == ddp) {newArr.splice(n, 1)}
  // }
  // return newArr;
  // console.log(newArr);
  for (let n = 0; n < newArr.length; n++) {
    if (newArr[n] === ddp) {newArr.splice(n, 1)};
    if (newArr[n] === undefined) {newArr.splice(n, 1)};
    if (newArr[n] === dn) {newArr.splice(n, 1)};
    if (newArr[n] === dp) {newArr.splice(n, 1)}
      
  }
  // console.log(newArr);
  for (let n = 0; n < newArr.length; n++) {
    if (newArr[n] === ddp) {newArr.splice(n, 1)};
    if (newArr[n] === dp) {newArr.splice(n, 1)}
  }


  for (let n = 0; n < newArr.length; n++) {
    if (newArr[n] === undefined) {newArr.splice(n, 1)};
    if (newArr[n] === dp) {newArr.splice(n, 1)}
  }
// console.log(newArr);
return newArr;
};

// let array = [1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5, 8, 11, '--double-next', 1337, '--double-prev', 4, 5];
// transform(array);