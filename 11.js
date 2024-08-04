// const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
// const height = [1, 1];
// const height = [4, 3, 2, 1, 4];
const height = [1, 2, 1];

var maxArea = function (height) {
  if (height.length === 1) return 0;
  if (height.length === 2) return height[0] * height[1];
  const arr = [];
  let right_index = height.length
  for (let i = 0; i < height.length; i++) {
    const left_value = height[i];
    const right_value = height[right_index];
    console.log(left_value)
    console.log(right_value)
    right_index = right_index-1
  }
  //   if (left_value === right_value) {
  //     arr.push(
  //       left_value *
  //         height[right] *
  //         (height.indexOf(height[right]) - height.indexOf(left_value))
  //     );
  //   } else arr.push(singleHeight * height[right] - height[right]);
  // }
  // console.log(arr);
  return Math.max(...arr);
};

console.log(maxArea(height));

// var maxArea = function (height) {
//   if (height.length === 1) return 0;
//   if (height.length === 2) return height[0] * height[1];
//   const arr = [];
//   // console.log("###########");
//   // console.log(height.length -1)
//   // console.log("###########");
//   for (let i = 0; i < height.length; i++) {
//     const left_value = height[i];
//     console.log(left_value, " left value");
//     // const right = i === 0 ? height.length - 1 : height.length - i;
//     console.log(right, "right index");
//     const right_value = height[right];
//     console.log(right_value, "right value");
//     console.log("loop #", i);
//     // console.log(left_value === right_value)
//     if (left_value === right_value) {
//       arr.push(
//         left_value *
//           height[right] *
//           (height.indexOf(height[right]) - height.indexOf(left_value))
//       );
//     } else arr.push(singleHeight * height[right] - height[right]);
//   }
//   console.log(arr);
//   return Math.max(...arr);
// };



