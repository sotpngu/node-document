/*
 * @Author: gaominghao
 * @Date: 2020-12-10 11:13:13
 * @LastEditors: gaominghao
 * @LastEditTime: 2020-12-10 11:13:33
 * @Description: none
 */
const assert = require('assert').strict;

assert.fail();
// AssertionError [ERR_ASSERTION]: Failed

assert.fail('boom');
// AssertionError [ERR_ASSERTION]: boom

assert.fail(new TypeError('need array'));
// TypeError: need array