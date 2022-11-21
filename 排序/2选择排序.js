// function choose(arr) {
//   for(let i = 0; i < arr.length - 1; i++) {
//     let minIndex = i,min = arr[i]
//     for(let j = i; j < arr.length; j++) {
//       if(arr[j] < min) {
//         minIndex = j
//         min = arr[j]
//       }
//     }
//     [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
//   }
// }
function choose(arr) {
  for(let i = 0; i < arr.length - 1; i++) {
    let minIndex = i
    for(let j = i + 1; j < arr.length; j++) {
      if(arr[j] < arr[minIndex]) minIndex = j
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
  }
}

let arr = [2,4,6,3,8,6,4,2,5,6,4,3,1]

choose(arr)

console.log(arr)