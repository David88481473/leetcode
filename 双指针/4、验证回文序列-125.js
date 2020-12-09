/**
 * @param {string} s
 * @return {boolean}
 * 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
 */
var isPalindrome = function(s) {
  let str = s.replace(' ', '').toLowerCase();
  let left = 0;
  let right = str.length - 1;
  let reg = /^[0-9a-zA-Z]$/;
  while (left < right) {
      if (!reg.test(str[left])) {
          left++;
          continue;
      }
      if (!reg.test(str[right])) {
          right--;
          continue;
      }
      if (str[left] !== str[right]) return false;
      left++;
      right--;
  }
  return true;
};