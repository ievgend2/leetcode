// const x = 2;
// let y = 4;
// console.log(y);
// function update(arg) {
//   return Math.random() + y * arg;
// }
// y = 2;
// y = y + 1;
// // y=2+2;
// const result = update(x);
// console.log(result);

const arr = [0, 4, 3, 1, 2, 3, 4, 0];

function maxPair(arr) {
  let maxSum = 0;
  let maxIndices = [];

  for (let i = 0; i < arr.length - 1; i++) {
    const sum = arr[i] + arr[i + 1];
    if (sum > maxSum) {
      maxSum = sum;
      maxIndices = [i, i + 1];
    }
  }
  return maxIndices;
}

console.log(maxPair(arr));
