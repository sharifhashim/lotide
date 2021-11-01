const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');


describe('middle', () => {
  it('returns middle index of array when array.length is odd', () => {
    const arr = [1,2,3,4,5,6,7];
    assert.strictEqual(assertArraysEqual(middle(arr), [4]));
  });
  it('returns middle two index when array.length is even', () => {
    const arr = [1,2,3,4];
    assert.strictEqual(assertArraysEqual(middle(arr), [2,3]))
  })
})
