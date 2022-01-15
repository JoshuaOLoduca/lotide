// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) console.log(
    `✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  else console.log(
    `⛑️⛑️⛑️ Assertion Failed: ${actual} !== ${expected}`);
};

const eqArrays = function(firstList, secondList) {
  let areSame = false;

  if (areSameLength(firstList, secondList)) {
    areSame = haveSameContents(firstList, secondList);
  }
  return areSame;
};

const haveSameContents = function(firstList, secondList) {
  let listLength = firstList.length;
  let areSame = true;

  for (let i = 0; i <= listLength; i++) {
    if (Array.isArray(firstList[i]) || Array.isArray(secondList[i])) {
      areSame = haveSameContents(firstList[i], secondList[i]);
    } else if (firstList[i] !== secondList[i]) {
      areSame = false;
    }
    if (!areSame) break;
  }

  return areSame;
};


const areSameLength = function(firstItem, secondItem) {
  let sameLength = true;
  if (firstItem.length !== secondItem.length) sameLength =  false;

  return sameLength;
};

// // TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true

// // Failed
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true

// // Failed
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false

console.log(eqArrays([[2, 3], [4]], [[2, 3], [4]])) // => true

console.log(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]));// => false
console.log(eqArrays([[2, 3], [4]], [[2, 3], 4])) // => false