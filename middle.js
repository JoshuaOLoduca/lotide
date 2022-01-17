// FUNCTION IMPLEMENTATION
const middle = function(list) {
  let middleOfList = [];
  let length = list.length;

  if (length <= 2) return middle;

  if (isEven(length)) {
    let start = length / 2 - 1;
    let end = start + 2;
    middleOfList = list.slice(start,end);
  } else {
    middleOfList.push(list[Math.floor(length / 2)]);
  }

  return middleOfList;
};

const isEven = function(num) {
  return num % 2 === 0;
};

module.exports = middle;