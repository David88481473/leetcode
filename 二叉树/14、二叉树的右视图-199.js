/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
  if (!root) return [];
  let result = [];
  let queue = [root];
  let last = null;
  while (queue.length > 0) {
      result.push(queue[queue.length-1].val);
      let len = queue.length;
      for (let i = 0; i <= len - 1; i++) {
          let node = queue.shift();
          if (node.left) queue.push(node.left);
          if (node.right) queue.push(node.right);
      }
  }
  return result;
};