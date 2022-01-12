const countLetters = function(string) {
  let count = {};
  let noSpace = removeChar(' ', string);
  for (let letter of noSpace) {
    if (count[letter] === undefined) count[letter] = 0;
    count[letter]++;
  }
  return count;
};

const removeChar = function(char, string) {
  let cleaned = '';
  for (let letter of string) {
    if (letter !== char) cleaned += letter;
  }
  return cleaned;
};

console.log(countLetters('lighthouse in the house'));