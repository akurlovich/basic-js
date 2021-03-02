const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  let season = '';
  if (typeof date == 'undefined') {
    let message = 'Unable to determine the time of year!';
    return message;
  } 
  // else if (isNaN(Date.parse(date)))
  else if (!(date instanceof Date)) 
  {
    throw new CustomError('Not implemented');
        // return false;
      } else {
      month = date.getMonth();
      // console.log(month);
      if (month >= 11 || month <= 1) {season = 'winter'}
        else if (month <= 4) {season = 'spring'}
          else if (month <= 7) {season = 'summer'}
            else season = 'autumn';
              // else season = 'error';
      // throw new CustomError('Not implemented');
      // remove line with error and write your code here
    };
    return season;
}
// const date = new Date(2020, 15, 31)
// getSeason(date);