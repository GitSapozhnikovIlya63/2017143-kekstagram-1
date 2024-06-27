const checkPalindrome = (string) => {
  const result = string.split('').reverse().join('').toLowerCase().replaceAll(' ', '');
  if (result === string) {
    return true;
  }
  return false;
};

const getNumberFromString = (string) => string.toString().replace(/\D/g,'');

const upgradeString = (str, length, add) => str.length >= length ? str.slice(0, length) : add.slice(0, str.length - length + 1) + str;

const checkLengthString = (str, length) => {
  if (str.length <= length) {
    return true;
  }

  return false;
};
