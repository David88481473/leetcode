/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (!nums || !nums.length) return 0;
  let p1 = 0;
  let p2 = 1;
  while (p2 < nums.length) {
      if (nums[p1] !== nums[p2]) {
          nums[++p1] = nums[p2]; 
      }
      p2++;
  }
  return p1 + 1;
};