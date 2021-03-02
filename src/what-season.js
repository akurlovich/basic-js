// const CustomError = require("../extensions/custom-error");

// module.exports = 
function getSeason(date) {
  if (typeof date == 'undefined') {
    let message = 'Unable to determine the time of year!';
    console.log(message);
  } else if (!(date instanceof Date)) {
        return false;
      } else {
      month = date.getMonth();
      console.log(month);
      // throw new CustomError('Not implemented');
      // remove line with error and write your code here
    };
}


const date = new Date(2020, 10, 31)
getSeason(date);