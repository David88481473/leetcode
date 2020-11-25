/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  if (!n) return [];
  let left = 0, top = 0, right = n - 1, bottom = n - 1;
  let result = [];
  for (let i = 0; i < n; i++) result.push([]);
  let num = 1;
  let cnt = n * n;
  while (num <= cnt ) {
      for (let i = left; i <= right && num <= cnt; i++, num++) {
          result[top][i] = num;
      }
      top++;
      for (let i = top; i <= bottom && num <= cnt; i++, num++) {
          result[i][right] = num;
      }
      right--;
      for (let i = right; i >= left && num <= cnt; i--, num++) {
          result[bottom][i] = num;
      }
      bottom--;
      for (let i = bottom; i >= top && num <= cnt; i--, num++) {
          result[i][left] = num;
      }
      left++;
  }
  return result;
};