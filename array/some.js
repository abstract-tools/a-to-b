const curry = require('../function/curry');

// some :: (a -> Boolean) -> Array a -> Boolean
const some = curry(2, function some (f = x => x, arr = []) {
  return arr.some(f);
});

module.exports = some;
