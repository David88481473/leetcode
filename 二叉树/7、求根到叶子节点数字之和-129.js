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
var sumNumbers = function(root) {
  return dfs(root, 0);
};

let dfs = (node, prev) => {
  if (!node) return 0;
  let val = prev * 10 + node.val;
  if (!node.left && !node.right) {
      return val;
  } else {
      return dfs(node.left, val) + dfs(node.right, val);
  }
}