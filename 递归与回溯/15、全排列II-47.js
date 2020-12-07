/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  if (!nums || !nums.length) return [];
  let result = [];
  let used = [];
  nums.sort(compare);
  function compare(a, b) {
      return a - b;
  }

  function backtrace(path) {
      if (path.length === nums.length) {
          result.push(path.concat());
          return;
      }
      for (let i = 0; i < nums.length; i++) {
          if (i > 0 && nums[i] === nums[i-1] && !used[i-1]) continue;
          if (used[i]) continue;
          path.push(nums[i]);
          used[i] = true;
          backtrace(path);
          used[i] = false;
          path.pop();
      }
  }

  backtrace([]);
  return result;
}