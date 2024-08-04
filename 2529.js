let nums = [-3, -2, -1, 0, 0, 1, 2];

var maximumCount = function (nums) {
  // let pos = 0
  // let neg = 0

  // for (let i = 0; i < nums.length; i++) {
  //     if (nums[i] < 0) neg++
  //     if (nums[i] > 0) pos++
  // }

  // return pos > neg ? pos : neg

  let min = 0;
  let max = nums.length - 1;
  let mid;
  while (max >= min) {
    mid = min + Math.floor((max - min) / 2);

    // If the element is present at the middle
    // itself
    if (nums[mid] < 0) {
      console.log(mid);
      return mid;
    }

    // If element is smaller than mid, then
    // it can only be present in left subarray
    if (nums[mid] > 0) {
      console.log(mid);
      max = mid - 1;
    }

    // Else the element can only be present
    // in right subarray
    else min = mid + 1;
  }

  // We reach here when element is not
  // present in array
  return -1;
};

console.log(maximumCount(nums));
