var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];

// arr = arr.flat(Infinity)
// console.log(arr)

// function myFlat(arr, depth = 1) {
//   // 若depth<=0，则直接返回
//   if (depth <= 0) {
//       return arr
//   }
//   let res = [];
//   for (const item of arr) {
//     if (Array.isArray(item)) {
//       // 每次递归调用，将depth-1
//       res = res.concat(myFlat(item, depth - 1));
//     } else {
//       res.push(item);
//     }
//   }
//   return res;
// }





function myFlat(arr, depth = 1) {
  return depth > 0
    ? arr.reduce(
        (pre, cur) =>
          pre.concat(Array.isArray(cur) ? myFlat(cur, depth - 1) : cur),
        []
      )
    : arr.filter((item) => item !== undefined);
}

console.log(myFlat([1,2,3,4,[23,4,34,[2,32,4,2,[2,3,4]]]], 2))

// let flattenArr = []
// function flatten(arr) {
//   for(let i of arr) {
//     if(i instanceof Array) flatten(i)
//     else flattenArr.push(i)
//   } 
// }
// flatten(arr)
// console.log(flattenArr)


// function flatten(arr) {
//   return arr.reduce((pre, cur) => {
//     return pre.concat(Array.isArray(cur) ? flatten(cur) : cur)
//   }, []) 
// }
// console.log(flatten(arr))



// while(arr.some(Array.isArray)) {
//   arr = [].concat(...arr)
// }
// console.log(arr)