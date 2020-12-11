/*
 * @Author: gaominghao
 * @Date: 2020-12-10 10:29:49
 * @LastEditors: gaominghao
 * @LastEditTime: 2020-12-10 10:31:41
 * @Description: none
 */
// Asserts that the function fn does not throw an error.

const assert = require('assert').strict;

/* 方式2 */
assert.doesNotThrow(
  () => {
    throw new TypeError('Wrong value');
  },
  /Wrong value/,
  'Whoops'
);
// Throws: AssertionError: Got unwanted exception: Whoops



/* 方式1 */
assert.doesNotThrow(
  () => {
    throw new TypeError('Wrong value');
  },
  SyntaxError
);