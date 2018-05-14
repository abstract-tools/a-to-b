const test = require('tape')
const { split } = require('../../string')

test('string split: return array', t => {
  const result = split(' ')('foo bar baz')

  t.same(result, ['foo', 'bar', 'baz'])
  t.end()
})
