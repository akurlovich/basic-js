const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  let season = '';
  if (typeof date == 'undefined') {
    let message = 'Unable to determine the time of year!';
    return message;
  } else if (!(date instanceof Date)) {
        return false;
      } else {
      month = date.getMonth();
      // console.log(month);
      if (month == 1 || month == 2 || month == 0) {season = 'winter'}
        else if (month >= 3 && month <= 5) {season = 'spring'}
          else if (month >= 6 && month <= 8) {season = 'summer'}
            else if (month >= 9 && month <= 11) {season = 'autumn'};
              // else season = 'error';
      // throw new CustomError('Not implemented');
      // remove line with error and write your code here
    };
    return season;
}
// const date = new Date(2020, 15, 31)
// getSeason(date);