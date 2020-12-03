/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
  let result = [];
  let path = [];
  function backtrace(start, sum, cnt) {
      if (sum === 0 && cnt === 0) {
          result.push(path.concat());
          return;
      }
      for (let i = start; i<=9 ; i++) {
          if (sum - i < 0 || cnt - 1 < 0) break;
          path.push(i);
          cnt--;
          backtrace(i+1, sum-i, cnt);
          path.pop();
          cnt++;
      }
  }
  backtrace(1, n, k);
  return result;
}