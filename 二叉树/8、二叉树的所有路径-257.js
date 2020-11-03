/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  if (!root) return [];
  let result = [];
  const dfs = (root, path) => {
      if (root) {
          path += root.val.toString();
          if (!root.left && !root.right) {
              result.push(path);
          } else {
              path += "->";
              dfs(root.left, path);
              dfs(root.right, path);
          }
      }
  }

  dfs(root, '');
  return result;
};