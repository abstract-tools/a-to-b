const test = require('tape')
const { dec } = require('../../index')

test('number dec', t => {
  const result = dec(1)

  t.same(result, 0)
  t.end()
})
