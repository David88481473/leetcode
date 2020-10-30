/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 层序遍历即BFS（Breadth-first search），广度优先搜索
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) return [];
  let result = [];
  let queue = [root];
  while (queue.length) {
      let len = queue.length;
      let level = [];
      result.push(level);
      for (let i = 0; i <= len - 1; i++) {
          let node = queue.shift();
          level.push(node.val);
          if (node.left) queue.push(node.left);
          if (node.right) queue.push(node.right);
      }
  }
  return result;
};