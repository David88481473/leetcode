/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  let result = [];
  function helper(index, nums, result, temp) {
      result.push(temp.concat());
      for (let j = index; j < nums.length; j++) {
          temp.push(nums[j]);
          helper(j+1, nums, result, temp);
          temp.pop();
      }
  }
  helper(0, nums, result, []);
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
