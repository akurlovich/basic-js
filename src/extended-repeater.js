const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let repeatTime = options.repeatTimes,
      separator = options.separator,
      addition = options.addition,
      additionRepeatTimes = options.additionRepeatTimes,
      additionSeparator = options.additionSeparator;
  // str.toString();
  let newStr = [],
      i = 1,
      j = 1;
  if (typeof separator == 'undefined') {separator = '+'};
  if (typeof addition == 'undefined') {addition = ''};
  if (typeof repeatTime == 'undefined') {repeatTime = 1};
  if (typeof additionRepeatTimes == 'undefined') {additionRepeatTimes = 1};
  if (typeof additionSeparator == 'undefined') {additionSeparator = ''};
  // while(newStr.length < (repeatTime * 3)) {
  while (i <= repeatTime) {
    newStr.push(str);
    // newStr.push(addition + separator);
  while (j <= additionRepeatTimes) {
    newStr.push(addition);
    if ((additionRepeatTimes >= 2) && (j < additionRepeatTimes)) {
      newStr.push(additionSeparator)
    };
    j++;
  }
    newStr.push(separator);
    i++;
    j = 1;
  }
  // if (addition == '') {
    newStr.pop();
  
  
  return newStr.join('');
  // return newStr;
  // console.log(newStr.join(''), repeatTime);
  // console.log(separator);
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
};

// repeater('hello', {repeatTimes: 3, separator: 's'})