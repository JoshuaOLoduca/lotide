// FUNCTION IMPLEMENTATION
const without = function(sourceList, toRemoveList) {
  let output = [];
  let dontAddItem = false;

  for (let item of sourceList) {

    for (let toRemove of toRemoveList) {
      if (item === toRemove) {
        dontAddItem = true;
        break;
      } else dontAddItem = false;
    }

    if (!dontAddItem) {
      output.push(item);
    }
  }
  return output;
};
// FUNCTION IMPLEMENTATION
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

assertArraysEqual(without([1,2,3,4],[2]), [1,3,4], true);
assertArraysEqual(without([1,2,3,4],['2']), [1,2,3,4], true);