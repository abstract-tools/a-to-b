const test = require('tape')
const append = require('../../string/append')

test('string append: combines two strings', t => {
  const result = append('testing', 'test')

  t.same(result, 'testtesting')
  t.end()
})
