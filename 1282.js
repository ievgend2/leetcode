const groupSizes = [3, 3, 3, 3, 3, 1, 3];
// const groupSizes = [2,2,1,1,1,1,1,1];
// // const groupSizes = [2,1,3,3,3,2]
// const groupSizes = [116,156,156,156,156,86,116,5,7,116,116,86,156,156,86,93,156,93,86,156,116,116,156,116,116,17,116,156,156,86,116,156,156,156,156,156,156,86,86,86,116,116,86,116,93,116,116,93,93,86,156,93,86,86,93,156,156,93,156,116,156,156,7,93,156,116,86,86,116,93,86,156,156,156,156,17,93,86,116,93,156,156,93,116,116,116,86,86,86,156,156,93,156,116,93,86,156,86,156,156,86,86,156,86,116,156,93,156,86,116,156,93,86,156,17,10,116,116,86,17,156,5,156,156,93,156,116,116,156,156,156,7,93,86,93,93,93,156,116,156,116,116,116,86,116,93,86,156,116,116,93,156,156,156,86,116,10,116,156,116,116,93,93,93,86,86,17,156,93,93,93,86,93,93,93,116,86,93,116,116,86,93,156,93,10,93,86,156,93,86,116,156,156,116,116,10,116,93,156,17,86,156,156,116,93,156,3,10,116,156,86,156,156,156,93,116,156,93,156,156,93,86,156,86,156,17,17,156,116,156,93,156,93,86,86,93,10,93,86,156,116,86,156,116,156,6,93,93,156,6,86,86,116,156,116,156,116,86,156,156,116,116,86,17,156,6,156,86,17,86,86,116,86,1,93,156,86,93,156,156,86,116,116,156,17,156,93,116,116,116,156,116,116,93,156,10,116,156,3,156,93,156,156,93,156,93,156,116,156,93,86,116,17,93,86,156,156,93,156,116,93,116,93,86,156,156,86,93,116,116,17,116,6,116,93,86,10,7,93,17,6,156,156,156,116,156,93,93,93,116,86,86,10,116,86,156,116,86,93,116,6,156,156,116,116,156,116,156,156,156,7,116,116,7,116,156,86,93,86,156,10,93,86,156,5,86,156,156,156,116,156,156,93,156,86,5,156,116,86,156,93,116,93,116,116,156,156,93,93,116,93,86,156,156,116,116,86,156,156,93,17,156,116,156,116,156,116,93,156,93,93,5,116,86,116,156,156,156,86,116,156,116,3,7,86,93,156,93,86,93,156,86,93,156,116,156,156,156,156,17,93,93,93,86,93,86,156,156,116,156,116,116,93,86,156,116,116,116,156,116,93,86,86,116,93,116,17,86,116,116,86,156,93,156,86,116,93,156,116,116]

const groupThePeople = function (groupSizes) {
  const arr = [];
  const map = new Map();
  for (let i = 0; i < groupSizes.length; i++) {
    let element = groupSizes[i];
    if (map.has(element)) {
      map.get(element).push(i);
    } else {
      map.set(element, [i]);
    }
  }
  map.forEach((values, keys) => {
    if (values.length > keys) {
      sub_array = [];
      const times = values.length / keys;
      for (let i = 1; i < times; i++) {
        sub_array = values.splice(0, keys);
        arr.push(sub_array);
      }
    }
    if (values.length <= keys) {
      arr.push(values);
    }
  });
  return arr;
};

console.log(groupThePeople(groupSizes));

// const groupThePeople = function (groupSizes) {
//   let arr = [];
//   let arr_2 = [];
//   let counter = 1;
//   for (let i = 0; i < groupSizes.length; i++) {
//     // let arr_2 = new Array (counter)
//     const element = groupSizes[i];
//     if (element === 1) {
//         // console.log(element, counter);
//       arr_2.push([i]);
//     }
//     if (element === 3) {

//         // console.log(element, counter);
//       arr_2.push([i]);
//     }
//     // counter++;
//     arr.push(arr_2);
//     // console.log(`${i} - " group of size ${element}"`)
//     // if (element === 1) arr.push([i])
//     // for (let j = 1; j <= i; j++) {
//     //   const element_2 = groupSizes[j];
//     //   if (element === j) arr_2.push([j]);
//     // }
//   }
//   return arr;
// };

// console.log(groupThePeople(groupSizes));

// // groupSizes = [3,3,3,3,3,1,3] => [[5],[0,1,2],[3,4,6]]
// // groupSizes = [2,1,3,3,3,2] => [[1],[0,5],[2,3,4]]

// const groupThePeople = function (groupSizes) {
//   let arr = [];
//   let arr_2 = [];
//   for (let i = 0; i < groupSizes.length; i++) {
//     const element = groupSizes[i];
//     console.log(i, "i")
//     for (let j = 1; j <= i-1; j++) {
//       if (element === j) {
//         console.log(j, "j")
//         let arr_2 = new Array(j);
//         arr_2.push([i]);
//       }
//       arr.push(arr_2);
//     }
//   }
//   return arr;
// };

// console.log(groupThePeople(groupSizes));

// groupSizes = [3,3,3,3,3,1,3] => [[5],[0,1,2],[3,4,6]]
// groupSizes = [2,1,3,3,3,2] => [[1],[0,5],[2,3,4]]

// const groupThePeople = function (groupSizes) {
//     const arr = [];
//   let counter = 1;
//   for (let i = 0; i < groupSizes.length; i++) {
//     let element = groupSizes[i];
//     for (let j = 0; j < i-1; j++) {
//       if (element === j) {
//         console.log(i);
//       }
//     }
//     //   return arr2
//   }
//   counter = 1;
//   let arr = [];
//   let arr2 = [];
//   while (counter < 10) {
//     for (let i = 0; i < groupSizes.length; i++) {
//       const element = groupSizes[i];

//       if (element === counter) {
//         arr.push([i]);
//       }
//     //   arr.push(arr2)
//     }
//     // groupSizes.map( x => {if (x = counter) {console.log(x)}})
//     counter++;
// }
// return(arr);

//   const groupSizes = [3, 3, 3, 3, 3, 1, 3];

// return arr
//   };
