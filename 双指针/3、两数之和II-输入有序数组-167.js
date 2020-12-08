/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 * 给定一个已按照升序排列 的有序数组，找到两个数使得它们相加之和等于目标数。
 * 函数应该返回这两个下标值 index1 和 index2，其中 index1 必须小于 index2。
 * 首、尾收缩范围
 */
var twoSum = function(numbers, target) {
  let i = 0;
  let j = numbers.length - 1;
  while(i < j) {
      if (numbers[i] + numbers[j] < target) {
          i++
      } else if (numbers[i] + numbers[j] > target) {
          j--;
      } else {
          return [i + 1, j + 1];
      }
  }
};