// FUNCTION IMPLEMENTATION
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

module.exports = eqArrays;