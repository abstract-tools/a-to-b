const curry = require('../function/curry')

// append :: String -> String -> String
function append (a = '', b = '') {
  return b.concat(a)
}

module.exports = curry(2, append)
