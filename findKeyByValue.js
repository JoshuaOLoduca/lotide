// FUNCTION IMPLEMENTATION
const findKeyByValue = function(object, value) {
  let foundKey = undefined;
  for (let key in object) {
    if (object[key] !== value) continue;
    foundKey = key;
    break;
  }

  return foundKey;
};

module.exports = findKeyByValue;

// DEBUGGING
// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);