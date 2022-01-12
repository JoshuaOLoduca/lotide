const countLetters = function(string) {
  let count = {};
  let noSpace = removeChar(' ', string);
  for (let letter of noSpace) {
    if (count[letter] === undefined) count[letter] = 0;
    count[letter]++;
  }
  return count;
}

const removeChar = function(char, string) {
  let cleaned = '';
  for (let letter of string) {
    if (letter !== char) cleaned += letter;
  }
  return cleaned;
} 

const assertEqual = function(actual, expected) {
  if (actual === expected) console.log(
    `✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  else console.log(
    `⛑️⛑️⛑️ Assertion Failed: ${actual} !== ${expected}`);
};

console.log(countLetters('lighthouse in the house'));