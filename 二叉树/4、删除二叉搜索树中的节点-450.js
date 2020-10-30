/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 1、如果是leaf，直接删除
 * 2、如果只有一个child，则用另一个child替代
 * 3、如果有两个child，则在右子树中找后继节点（一直找右节点的左节点直到null），将原节点替换为后继节点，并递归删除后继节点，将问题转化为1、2
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
  return deleteHelper(root, key);
};

let deleteHelper = (root, key) => {
  if (root === null) return null;
  if (root.val < key) {
      root.right = deleteHelper(root.right, key);
  } else if (root.val > key) {
      root.left = deleteHelper(root.left, key);
  } else {
      if (root.left === null) return root.right;
      if (root.right === null) return root.left;
      let temp = root;
      root = find(root.right);
      root.right = deleteHelper(temp.right, root.val)
      root.left = temp.left;
  }
  return root;
}

let find = (root) => {
  if (root.left === null) return root;
  return find(root.left);
}
