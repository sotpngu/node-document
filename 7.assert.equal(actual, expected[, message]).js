/*
 * @Author: gaominghao
 * @Date: 2020-12-10 10:33:16
 * @LastEditors: gaominghao
 * @LastEditTime: 2020-12-10 10:33:32
 * @Description: none
 */
// An alias of assert.strictEqual().


const assert = require('assert');

assert.equal(1, 1);
// OK, 1 == 1
assert.equal(1, '1');
// OK, 1 == '1'

assert.equal(1, 2);
// AssertionError: 1 == 2
assert.equal({ a: { b: 1 } }, { a: { b: 1 } });
// AssertionError: { a: { b: 1 } } == { a: { b: 1 } }