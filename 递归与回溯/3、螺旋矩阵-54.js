/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if (!matrix || matrix.length === 0) return [];
  let bottom = matrix.length - 1;
  let right = matrix[0].length - 1;
  let cnt = matrix.length * matrix[0].length;
  let left = 0, top = 0;
  let result = [];
  while (cnt) {
      for (let i = left; i <= right && cnt; i++, cnt--) {
          result.push(matrix[top][i]);
      }
      top++;
      for (let i = top; i <= bottom && cnt; i++, cnt--) {
          result.push(matrix[i][right]);
      }
      right--;
      for (let i = right; i >= left && cnt; i--, cnt--) {
          result.push(matrix[bottom][i]);
      }
      bottom--;
      for (let i = bottom; i >= top && cnt; i--, cnt--) {
          result.push(matrix[i][left]);
      }
      left++;
  }
  return result;
};