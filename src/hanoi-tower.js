const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turns = (2 ** disksNumber) - 1,
      seconds = Math.floor( turns / (turnsSpeed/60/60));

  // console.log({disks, speed});
  return {turns, seconds};
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
};

// calculateHanoi(5, 4074);

// let i = (2 ** 9) - 1,
//     j = Math.floor( i / (4308/60/60));
// console.log(i, j)
