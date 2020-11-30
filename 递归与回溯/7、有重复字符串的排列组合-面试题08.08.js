/**
 * @param {string} S
 * @return {string[]}
 */
var permutation = function(S) {
  let arr = S.split('').sort();
  let result = [];
  let backtrack = (track, rest) => {
      if (track.length === S.length) {
          result.push(track);
      }
      let used = {};
      for (let i = 0; i <= rest.length - 1; i++) {
          if (used[rest[i]]) continue;
          used[rest[i]] = true;
          backtrack(track + rest[i], rest.filter((_, index) => index !== i));
      }
  }

  backtrack('', arr);
  return result;
};