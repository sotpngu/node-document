/*
 * @Author: gaominghao
 * @Date: 2020-12-10 10:23:29
 * @LastEditors: gaominghao
 * @LastEditTime: 2020-12-10 10:28:42
 * @Description: none
 */
// Awaits the asyncFn promise or, if asyncFn is a function, immediately calls the function and awaits the returned promise to complete. It will then check that the promise is not rejected.
const assert = require('assert').strict;

/* 方式1 */
(async () => {
  await assert.doesNotReject(
    async () => {
      throw new TypeError('Wrong value');
    },
    SyntaxError
  );
})();

/* 方式2 */
assert.doesNotReject(Promise.reject(new TypeError('Wrong value')))
  .then(() => {
    // ...
  });