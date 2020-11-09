/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
  if (!root) return [];
  let result = [];
  helper(root, [], sum, result);
  return result;
};

let helper = (node, queue, sum, result) => {
  queue.push(node.val);
  if (!node.left && !node.right) {
      if (sum === node.val) {
          result.push(queue.concat());
      }
      queue.pop();
      return;
  }
  if (node.left) helper(node.left, queue, sum - node.val, result);
  if (node.right) helper(node.right, queue, sum - node.val, result);
  queue.pop();
}