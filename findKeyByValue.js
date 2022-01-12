// FUNCTION IMPLEMENTATION
const findKeyByValue = function(object, value) {
  let foundKey = undefined;
  for (let key in object) {
    if (object[key] !== value) continue;
    foundKey = key;
    break;
  }

  return foundKey;
};

const assertEqual = function(actual, expected) {
  if (actual === expected) console.log(
    `✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  else console.log(
    `⛑️⛑️⛑️ Assertion Failed: ${actual} !== ${expected}`);
};

// DEBUGGING
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);