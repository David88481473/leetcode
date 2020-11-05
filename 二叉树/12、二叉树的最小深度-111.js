/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
  const helper = (root, depth) => {
      if (!root) return 0;
      if (!root.left && !root.right) return depth;
      if (!root.left) {
          return helper(root.right, depth + 1);
      } else if (!root.right) {
          return helper(root.left, depth + 1);
      } else {
          return Math.min(helper(root.left, depth + 1), helper(root.right, depth + 1));
      }
  }

  return helper(root, 1);
};