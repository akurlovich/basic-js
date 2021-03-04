const CustomError = require("../extensions/custom-error");
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const tabulaRecta = [

];

const START_POSITION_CHARCODE = 65;

class VigenereCipheringMachine {

  constructor(isDirect = true) {
    this._reverseFlag = !isDirect;
  }
  
  encrypt(message, key) {
    if (message === undefined || key === undefined) throw new CustomError('Not implemented');
    
    let keyUC = key.toUpperCase(),
        keyUCDried = keyUC.replace(/\s/g, ''),
        messegeUC = message.toUpperCase(),
        messageUCDried = messegeUC.trim(),
        res = [],
        keyLength = keyUCDried.length,
        msgLength = messageUCDried.length;

    for (let i = 0, n = 0; i < msgLength; i++, n++) {
      let messageChar = messageUCDried[i];
      if (!alphabet.indexOf(messageChar)) {
        res = push(messageChar);
        n--;
        continue;
      }

      let messageCharCode = messageChar.charCodeAt(0),
          shiftedRowIndex = keyUCDried.charCodeAt(n % keyLength) - START_POSITION_CHARCODE,
          shiftedCharIndex = messageCharCode - START_POSITION_CHARCODE;

      res.push(tabulaRecta[shiftedRowIndex][shiftedCharIndex]);
    }
    if (this._reverseFlag === true) return res.reverse().join('');
    return res.join('');
  }

  decrypt(ecryptedMessage, key) {
    if (ecryptedMessage === undefined || key === undefined) throw new CustomError('Not implemented');
    let keyUC = key.toUpperCase(),
        keyUCDried = keyUC.replace(/\s/g, ''),
        ecryptedMessageUC = ecryptedMessage.toUpperCase(),
        ecryptedMessageUCDreid = ecryptedMessageUC.trim(),
        keyLength = keyUCDried.length,
        msgLength = ecryptedMessageUCDreid.length,
        res = [];
    
      for (let i = 0, n = 0; i < msgLength; i++, n++) {
        let ecryptedMessageChar = ecryptedMessageUCDreid[i],
            rowIndex = keyUCDried.charCodeAt(n % keyLength) - START_POSITION_CHARCODE,
            row = tabulaRecta[rowIndex];
        if (!alphabet.indexOf(ecryptedMessageChar)) {
          res.push(ecryptedMessageChar);
          n--;
          continue;
        }

        let targetIndex = row.indexOf(ecryptedMessageChar),
            unshiftedRow = tabulaRecta[0],
            trueChar = unshiftedRow[targetIndex];

        res.push(trueChar);
      }

      if (this._reverseFlag === true) return res.reverse().join('');
      return res.join('');

    
  }
}

module.exports = VigenereCipheringMachine;
