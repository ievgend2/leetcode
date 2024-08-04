Input: (nums1 = [1, 2, 3, 0, 0, 0]), (m = 3), (nums2 = [2, 5, 6]), (n = 3);

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  console.log(nums1);
  nums1.splice(m);
  console.log(nums1);
  nums1.splice(n, 1, ...nums2);
//   console.log(spliced);
  console.log(nums1);
  nums1.sort()
//   nums1.sort((a, b) => a - b);
  console.log(nums1);
//   console.log(...nums2)
  // console.log(nums2.slice(n))
};

console.log(merge(nums1, m, nums2, n));
