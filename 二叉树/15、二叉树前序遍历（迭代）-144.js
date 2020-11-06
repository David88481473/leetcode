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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  let result = [];
  let stack = [
      {
          type: 'save',
          node: root
      }
  ];
  while (stack.length) {
      let { type, node } = stack.pop();
      if (!node) continue;
      if (type === 'print') {
          result.push(node.val);
      }
      if (type === 'save') {
          if (node.right) {
              stack.push({
                  type: 'save',
                  node: node.right
              });
          }
          if (node.left) {
               stack.push({
                  type: 'save',
                  node: node.left
              });
          }
          stack.push({
              type: 'print',
              node
          });
      }
  }
  return result;
};