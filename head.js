const head = function(array) {
  return array[0];
};

const assertEqual = function(actual, expected) {
  if (actual === expected) console.log(
    `✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  else console.log(
    `⛑️⛑️⛑️ Assertion Failed: ${actual} !== ${expected}`);
};

assertEqual(head([,1,1]), undefined);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");