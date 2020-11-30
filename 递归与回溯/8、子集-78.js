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