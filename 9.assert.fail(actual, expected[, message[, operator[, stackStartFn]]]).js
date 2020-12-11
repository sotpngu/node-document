/*
 * @Author: gaominghao
 * @Date: 2020-12-10 11:14:55
 * @LastEditors: gaominghao
 * @LastEditTime: 2020-12-10 11:15:12
 * @Description: none
 */

const assert = require('assert').strict;

assert.fail('a', 'b');
// AssertionError [ERR_ASSERTION]: 'a' != 'b'

assert.fail(1, 2, undefined, '>');
// AssertionError [ERR_ASSERTION]: 1 > 2

assert.fail(1, 2, 'fail');
// AssertionError [ERR_ASSERTION]: fail

assert.fail(1, 2, 'whoops', '>');
// AssertionError [ERR_ASSERTION]: whoops

assert.fail(1, 2, new TypeError('need array'));
// TypeError: need array