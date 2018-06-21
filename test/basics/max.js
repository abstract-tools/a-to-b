const test = require('tape')
const { max } = require('../../index')

test('max', t => {
  const result1 = max(4)(9)
  const result2 = max(9)(4)

  t.same(result1, 9)
  t.same(result2, 9)

  t.end()
})
