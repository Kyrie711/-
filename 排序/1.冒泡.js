// function bubble(arr) {
//   for(let i = 0; i < arr.length - 1; i++) {
//     for(let j = 0; j < arr.length - i - 1; j++) {
//       if(arr[j] > arr[j+1]) [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
//     }
//   }
//   return arr
// }

let arr = [2,4,6,3,8,6,4,2,5,6,4,3,1]
// bubble(arr)
// console.log(arr)

function bubble2(arr) {
  for(let i = 0; i < arr.length - 1; i++) {
    let done = true
    for(let j = 0; j < arr.length - i - 1; j++) {
      if(arr[j] > arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
        done = false
      }
    }
    if(done) return arr
  }
}
bubble2(arr)
console.log(arr)