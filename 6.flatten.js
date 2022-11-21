var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];

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