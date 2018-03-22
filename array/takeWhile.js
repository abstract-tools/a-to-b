const curry = require('../function/curry')

// takeWhile :: (a -> Boolean) -> Array a -> Array a
function takeWhile (f, arr = []) {
  const i = arr.findIndex(x => !f(x))

  return arr.slice(0, i < 0 ? Infinity : i)
}

module.exports = curry(2, takeWhile)
