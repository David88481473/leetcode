/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
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
      for (let i = start; i < candidates.length; i++) {
          if (target - candidates[i] < 0) break;
          path.push(candidates[i]);
          backtrace(i, target-candidates[i]);
          path.pop();
      }
  }
  backtrace(0, target);
  return result;
};