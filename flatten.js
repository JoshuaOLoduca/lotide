// FUNCTION IMPLEMENTATION
const flatten = function(list) {
  let flat = [];

  for (let item of list) {
    if (Array.isArray(item)) flat = flat.concat(flatten(item));
    else flat.push(item);
  }
  return flat;
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


// console.log(flatten([1,2,3,[4,5],[6,[7,8],9],10]));
// TEST CODE
assertArraysEqual(flatten([1,2,3,[4,5],[6,[7,[8]],9],10]),[1,2,3,4,5,6,7,8,9,10], true); // => true