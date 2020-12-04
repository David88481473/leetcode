/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  if (!nums || !nums.length) return [];
  let result = [];
  function backtrace(start, tmp) {
      result.push(tmp.concat());
      for (let i = start; i < nums.length; i++) {
          tmp.push(nums[i]);
          backtrace(i+1, tmp);
          tmp.pop();
      }
  }
  backtrace(0, []);
  return result;
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 * https://leetcode-cn.com/problems/subsets/solution/shou-hua-tu-jie-zi-ji-hui-su-fa-xiang-jie-wei-yun-/
 */
var subsets = function(nums) {
  const t = [];
  const ans = [];
  const n = nums.length;
  const dfs = (cur) => {
      if (cur === nums.length) {
          ans.push(t.slice());
          return;
      }
      t.push(nums[cur]);
      dfs(cur + 1, nums);
      t.pop();
      dfs(cur + 1, nums);
  }
  dfs(0, nums);
  return ans;
};
