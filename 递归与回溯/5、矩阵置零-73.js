/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 * 只能修改原矩阵。
 * 本算法将第一行第一列作为标志。
 */
var setZeroes = function(matrix) {
  if (!matrix || !matrix.length) return;
  let row = matrix.length - 1;
  let col = matrix[0].length - 1;
  let row0_has = false;
  let col0_has = false;

  for (let i = 0; i <= col; i++) {
      if (matrix[0][i] === 0)  {
          row0_has = true
          break;
      }
  } 
  
  for (let i = 0; i <= row; i++) {
      if (matrix[i][0] === 0) {
          col0_has = true;
          break;
      }
  }

  for (let i = 1; i <= row; i++) {
      for (let j = 1; j <= col; j++) {
          if (matrix[i][j] === 0) {
              matrix[i][0] = matrix[0][j] = 0;
          }
      }
  }

  for (let i = 1; i <= row; i++) {
      for (let j = 1; j <= col; j++) {
          if (matrix[i][0] === 0 || matrix[0][j] === 0) {
              matrix[i][j] = 0;
          }
      }
  }

  if (row0_has) {
      for (let i = 0; i <= col; i++) {
          matrix[0][i] = 0;
      }
  }

  if (col0_has) {
      for (let i = 0; i <= row; i++) {
          matrix[i][0] = 0;
      }
  }
};