const curry = require('../function/curry')

function take (n, arr) {
  return arr.slice(0, n)
}

module.exports = curry(2, take)
