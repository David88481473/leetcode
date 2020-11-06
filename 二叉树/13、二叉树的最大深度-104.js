/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  if(!root) return 0;
  const helper = (root, depth) => {
      if (!root) return depth;
      if (!root.left && !root.right) return depth;
      if (!root.left) {
          return helper(root.right, depth + 1);
      } else if (!root.right){
          return helper(root.left, depth + 1);
      } else {
          return Math.max(helper(root.left, depth + 1), helper(root.right, depth + 1));
      }
  }

  return helper(root, 1);
};