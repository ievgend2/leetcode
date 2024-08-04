// const nums = [2, 7, 11, 15];
// const nums = [3,3];
// const nums = [2,5,5,11]
// const nums = [3, 2, 4];
const nums = [1, 3, 4, 2];
// const target = 9;
// const target = 6;
// const target = 10;
// const target = 6;
const target = 6;

var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let element = nums[i];
    let required = target - element;
    if (map.has(element)) {
      let value = map.get(element);
      return [value, i];
    }
    map.set(required, i);
  }
};

console.log(twoSum(nums, target));

// var twoSum = function (nums, target) {
//   const res = [];
//   for (let i = 0; i < nums.length; i++) {
//     const required = target - nums[i];
//     console.log(nums.lastIndexOf(required));
//     if (nums.lastIndexOf(required) && nums.lastIndexOf(required) !== -1) {
//       res.push(i, nums.lastIndexOf(required));
//       return res;
//     }
//   }
// };

// console.log(twoSum(nums, target));
