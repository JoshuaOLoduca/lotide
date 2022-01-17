// FUNCTION IMPLEMENTATION
const flatten = function(list) {
  let flat = [];

  for (let item of list) {
    if (Array.isArray(item)) flat = flat.concat(flatten(item));
    else flat.push(item);
  }
  return flat;
};

module.exports = flatten;

// console.log(flatten([1,2,3,[4,5],[6,[7,8],9],10]));
// TEST CODE
// assertArraysEqual(flatten([1,2,3,[4,5],[6,[7,[8]],9],10]),[1,2,3,4,5,6,7,8,9,10], true); // => true