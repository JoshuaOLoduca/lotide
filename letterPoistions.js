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

module.exports = letterPositions;

// TEST CODE
// assertArraysEqual(letterPositions("hello").e, [1], true);