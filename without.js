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

module.exports = without;

// assertArraysEqual(without([1,2,3,4],[2]), [1,3,4], true);
// assertArraysEqual(without([1,2,3,4],['2']), [1,2,3,4], true);