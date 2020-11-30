/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function(S) {
  let array = S.split('');
  let result = [];
  dfs(array, 0, result);
  return result;
};

let dfs = (array, index, result) => {
  if (array.length === index) { // 这里很关键。当长度为1时，需要进一次下面的字符判断
      result.push(array.join(''));
      return;
  }
  dfs(array, index + 1, result);

  let pattern1 = new RegExp('[a-z]+');
  let pattern2 = new RegExp('[A-Z]+');

  if (pattern1.test(array[index])) {
      array[index] = array[index].toUpperCase();
      dfs(array, index + 1, result);
      // array[index] = array[index].toLowerCase(); // 这里不用重置状态
  } else if (pattern2.test(array[index])) {
      array[index] = array[index].toLowerCase();
      dfs(array, index + 1, result);
      // array[index] = array[index].toUpperCase();
  }
}