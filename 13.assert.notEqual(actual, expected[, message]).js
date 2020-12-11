/*
 * @Author: gaominghao
 * @Date: 2020-12-10 11:44:30
 * @LastEditors: gaominghao
 * @LastEditTime: 2020-12-10 11:44:38
 * @Description: none
 */

const assert = require('assert');

assert.notEqual(1, 2);
// OK

assert.notEqual(1, 1);
// AssertionError: 1 != 1

assert.notEqual(1, '1');
// AssertionError: 1 != '1'