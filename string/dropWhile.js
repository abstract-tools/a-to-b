const curry = require('../function/curry')

// dropWhile :: (String -> Boolean) -> String -> String
function dropWhile (f, str = '') {
  const i = Array.from(str).findIndex(x => !f(x))

  return i < 0 ? '' : str.slice(i)
}

module.exports = curry(2, dropWhile)
