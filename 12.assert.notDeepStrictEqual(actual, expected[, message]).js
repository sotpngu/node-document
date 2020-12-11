/*
 * @Author: gaominghao
 * @Date: 2020-12-10 11:42:17
 * @LastEditors: gaominghao
 * @LastEditTime: 2020-12-10 11:42:32
 * @Description: none
 */

const assert = require('assert').strict;

assert.notDeepStrictEqual({ a: 1 }, { a: '1' });
// OK
