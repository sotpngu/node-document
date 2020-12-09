/*
 * @Author: gaominghao
 * @Date: 2020-12-09 17:09:23
 * @LastEditors: gaominghao
 * @LastEditTime: 2020-12-09 17:09:51
 * @Description: none
 */
const assert = require('assert').strict;

assert.deepEqual([[[1, 2, 3]], 4, 5], [[[1, 2, '3']], 4, 5]);

// AssertionError: Input A expected to strictly deep-equal input B:
// + expected - actual ... Lines skipped
//
//   [
//     [
// ...
//       2,
// -     3
// +     '3'
//     ],
// ...
//     5
//   ]