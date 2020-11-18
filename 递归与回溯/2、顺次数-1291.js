/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 * 我们定义「顺次数」为：每一位上的数字都比前一位上的数字大 1 的整数。
 * 请你返回由 [low, high] 范围内所有顺次数组成的 有序 列表（从小到大排序）。
 * 
 * 原生的排序是按照asc码，所以需要重写
 */
var sequentialDigits = function(low, high) {
  let result = [];
  for (let i = 1; i <= 9; i++) {
      let number = i;
      for (let j = i + 1; j <= 9; j++) {
          number = number * 10 + j;
          console.log(number);
          if (number >= low && number <= high) {
              result.push(number);
          }
      }
  }
  const compareFunction = (a, b) => { return a-b };
  return result.sort(compareFunction);
};