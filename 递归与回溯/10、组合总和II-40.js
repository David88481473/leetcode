/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  let result = [];
  let path = [];
  if (!candidates || !candidates.length) return [];
  candidates.sort(compare);

  function compare(a, b) {
      return a-b;
  }
  
  function backtrace(start, target) {
      if (target === 0) {
          result.push(path.concat());
          return;
      }
      for (let i = start; i<candidates.length; i++) {
          if (target - candidates[i] < 0) break;
          if (i > start && candidates[i] === candidates[i-1]) continue; //不以相同的数字开始
          path.push(candidates[i]);
          backtrace(i+1, target-candidates[i]);
          path.pop();
      }
  }

  backtrace(0, target);
  return result;
};