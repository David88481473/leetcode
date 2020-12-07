/**
 * @param {number[]} nums
 * @return {number[][]}
 * 给定一个 没有重复 数字的序列，返回其所有可能的全排列。
 */
var permute = function(nums) {
  if (!nums || !nums.length) return [];
  let result = [];
  let used = [];

  function backtrace(path) {
      if (path.length === nums.length) {
          result.push(path.concat());
          return;
      }
      for (let i = 0; i < nums.length; i++) {
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
};