/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 * 给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。
 */
var combine = function(n, k) {
  let result = [];
  function backtrace(start, tmp) {
      if (k - tmp.length > n - start + 1) return; //当数字不够时
      if (tmp.length === k) {
          result.push(tmp.concat());
      }
      for (let i = start; i <= n; i++) {
          tmp.push(i);
          backtrace(i+1, tmp);
          tmp.pop();
      }
  }
  backtrace(1, []);
  return result;
}