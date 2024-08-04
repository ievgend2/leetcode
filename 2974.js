// const nums = [5, 4, 2, 3];
// const nums = [2, 7, 9, 6, 4, 6];
const nums = [17, 2, 4, 11, 14, 18];

const numberGame = function (nums) {
  const arr = [];
  const length = nums.length;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < length / 2; i++) {
    const alice = nums.shift();
    const bob = nums.shift();
    arr.push(bob);
    arr.push(alice);
  }
  return arr;
};

console.log(numberGame(nums));
