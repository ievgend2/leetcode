const nums1 = [2, 3, 2];
const nums2 = [1, 2];

const findIntersectionValues = function (nums1, nums2) {
    // for loops
  let count1 = 0;
  let count2 = 0;
  for (let i = 0; i < nums1.length; i++) {
    const element = nums1[i];
    if (nums2.indexOf(element) > -1) count1++;
  }
  for (let i = 0; i < nums2.length; i++) {
    const element = nums2[i];
    if (nums1.indexOf(element) > -1) count2++;
  }
  return [count1, count2];
    // const map = new Map();
    // // const map2 = new Map();

    // for (let i = 0; i < nums1.length; i++) {
    //   let element = nums1[i];

    //   if (map.has(element)) {
    //     let value = map.get(element);
    //     value = value + 1;
    //     map.set(element, value);
    //   } else map.set(element, 0);
    // }
    // for (let i = 0; i < nums2.length; i++) {
    //   const element = nums2[i];
    //   if (map.has(element)) {
    //     let value = map.get(element);
    //     value = value + 1;
    //     map.set(element, value);
    //   } else map.set(element, 0);

    // }
    // console.log("map1:",map)


};

console.log(findIntersectionValues(nums1, nums2));
