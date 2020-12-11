/*
 * @Author: gaominghao
 * @Date: 2020-12-10 11:48:52
 * @LastEditors: gaominghao
 * @LastEditTime: 2020-12-10 11:51:11
 * @Description: none
 */
const assert = require('assert')

assert.rejects(
  Promise.reject(new Error('Wrong value')),
  Error
).then(() => {
  // ...
});
