const test = require('tape');
const toUpper = require('../../string/toUpper');

test('string toUpper: return all uppercase letters', t => {
  const result = toUpper('aBcDeF');

  t.same(result, 'ABCDEF');
  t.end();
});
