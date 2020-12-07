/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (!s.length) return true;
  let stack = [];
  for (let i = 0; i < s.length; i++) {
      if (stack.length === 0 && [')', ']', '}'].includes(s[i])) return false;
      if (stack.length > 0 && [')', ']', '}'].includes(s[i])) {
          if (isPair(stack[stack.length-1], s[i])) {
              stack.pop();
          } else {
              return false;
          }
      } else {
          stack.push(s[i]);
      }
  }

  function isPair(a, b) {
      return (a === '(' && b === ')' || a === '[' && b === ']' || a === '{' && b === '}');
  }

  return !stack.length;
};