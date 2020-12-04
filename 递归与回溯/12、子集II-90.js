/**
 * @param {number[]} nums
 * @return {number[][]}
 * 数字会有重复，所以需要排序后剪枝
 */
var subsetsWithDup = function(nums) {
  if (!nums || !nums.length) return [];
  nums.sort(helper);
  function helper(a, b) {
      return a-b;
  }
  let result = [];
  function backtrace(start, tmp) {
      result.push(tmp.concat());
      for (let i=start; i<nums.length; i++) {
          if (i > start && nums[i] === nums[i-1]) continue;
          tmp.push(nums[i]);
          backtrace(i+1, tmp);
          tmp.pop();
      }
  }
  backtrace(0, []);
  return result;
};