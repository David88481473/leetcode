/**
 * @param {number} shorter
 * @param {number} longer
 * @param {number} k
 * @return {number[]}
 * 你正在使用一堆木板建造跳水板。有两种类型的木板，其中长度较短的木板长度为shorter，长度较长的木板长度为longer。
 * 你必须正好使用k块木板。编写一个方法，生成跳水板所有可能的长度。
 * 返回的长度需要从小到大排列。
 */
var divingBoard = function(shorter, longer, k) {
  if (!k) return [];
  if (shorter === longer) return [k * shorter];
  let result = [];
  for (let i = 0; i <= k; i++) {
      result.push(longer * i + shorter * (k - i));
  }
  return result;
};