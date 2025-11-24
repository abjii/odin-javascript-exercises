const palindromes = function (phrase) {
  let cleanPhrase = phrase.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s]/g, "");
  for (let i = 0; i < cleanPhrase.length / 2; i++) {
    if (cleanPhrase[i].toUpperCase().localeCompare(cleanPhrase[cleanPhrase.length - i - 1].toUpperCase()) != 0) return false;
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
