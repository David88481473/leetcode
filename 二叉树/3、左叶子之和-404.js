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
let sum = 0;

var sumOfLeftLeaves = function(root) {
    dfs(root, false); 
    return sum;
};

let dfs = (root, isLeaf) => {
    if (root === null) return;
    if (root.left === null && root.right === null && isLeaf ) {
        sum = sum + root.val;
    }
    dfs(root.left, true);
    dfs(root.right, false);
}
