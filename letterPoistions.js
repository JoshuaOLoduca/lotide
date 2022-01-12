// FUNCTION IMPLEMENTATION
const letterPositions = function(string) {
  let positions = {};
  let length = string.length;

  for (let i = 0; i < length; i++) {
    if (string[i] === ' ') continue;
    if (positions[string[i]] === undefined) positions[string[i]] = [];
    positions[string[i]].push(i);
  }

  return positions;
};

const assertArraysEqual = function(arrayOne, arrayTwo, expectedResult) {

  assertEqual(eqArrays(arrayOne, arrayTwo), expectedResult);
};

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
  let areSame = false;

  for (let i = 0; i <= listLength; i++) {
    if (firstList[i] !== secondList[i]) {
      areSame = false;
      break;
    } else areSame = true;
  }

  return areSame;
};


const areSameLength = function(firstItem, secondItem) {
  let sameLength = true;
  if (firstItem.length !== secondItem.length) sameLength =  false;

  return sameLength;
};

// TEST CODE
assertArraysEqual(letterPositions("hello").e, [1], true);