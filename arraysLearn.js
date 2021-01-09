var arr = [44, 55, 66, 77];
0, 1, 2, 3;
// arr.forEach((v, i) => {
//   console.log("value is -> ", v, " ind ", i);
//   //   console.log("value index is -> ", i);
// });
// let filteredArr = arr.filter((v, i) => {
//   if (v > 44) {
//     return v;
//   }
// });
// console.log(arr);

// console.log(filteredArr);

let arr1 = arr.map((v, i) => {
  return v * 10;
});
console.log(arr1);
