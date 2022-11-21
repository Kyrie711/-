// Array.prototype.myReduce = function(fn, initical) {
//   let res;
//   let arr = [...this]
//   if(initical) {
//     res = initical 
//     for (let i = 0; i < arr.length; i++) {
//       res = fn(res, arr[i], this)
//     }
//   } else {
//     res = arr[0]
//     for (let i = 1; i < arr.length; i++) {
//       res = fn(res, arr[i], this)
//     }
//   }
//   return res
// }

Array.prototype.myReduce = function(fn, initial) {
  let res,startIndex;
  let arr = [...this]
  res = initial ? initial : arr[0]
  startIndex = initial ? 0 : 1
  for (let i = startIndex; i < arr.length; i++) {
    res = fn(res, arr[i], i, this)
  }
  return res
}

let arr = [1,2,3,4,5]

let res = arr.myReduce((pre, cur) => {
  return pre + cur
})

console.log(res)