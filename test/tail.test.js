const assert = require('chai').assert;
const tail = require('../tail');

describe('tail', () => {
  it('returns tail of array when given an array', () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual(result[result.length-1], "Labs")
  })
  it('returns empty [] for []', () => {
    const none = tail([]);
    assert.strictEqual(none.length, 0);
  });
})