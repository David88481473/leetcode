/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 * 倒序，减少空间利用
 */
var merge = function(nums1, m, nums2, n) {
  let p1 = m - 1;
  let p2 = n - 1;
  let p = nums1.length - 1;
  while (p >= 0) {
      if (p1 >= 0 && p2 >= 0) {
          if (nums1[p1] > nums2[p2])  {
              nums1[p--] = nums1[p1--];
          }  else {
              nums1[p--] = nums2[p2--];
          }
      } else if (p1 < 0) {
          nums1[p--] = nums2[p2--];
      } else if (p2 < 0) {
          nums1[p--] = nums1[p1--];
      }
  }
};