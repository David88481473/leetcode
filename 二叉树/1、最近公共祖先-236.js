/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

 //三种情况：
// 1、p和q在root的子树中，且分列root的异侧；
// 2、p=root，且q在root的左或右子树中；
// 3、q=root，且p在root的左或右子树中。

var lowestCommonAncestor = function(root, p, q) {
  if(root === null || root.val === p.val || root.val === q.val) return root;
  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);
  // if (left === null && right === null) return null; 此情况可合并省略
  if (left === null) return right;
  if (right === null) return left;
  return root;
};