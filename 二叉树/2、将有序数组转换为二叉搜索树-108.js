/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 要求是平衡树，高度差小于1
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  return dfs(nums, 0, nums.length-1);
};

let dfs = (nums, left, right) => {
  if (left > right) {
      return null;
  }
  let mid = Number.parseInt((left + right) / 2);
  let root = new TreeNode(nums[mid]);
  root.left = dfs(nums, left, mid-1);
  root.right = dfs(nums, mid+1, right);
  return root;
}