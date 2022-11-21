function mergeSort(arr) {
  let len = arr.length
  if(len < 2) return arr
  let middle = Math.floor(len / 2)
  let left = arr.slice(0, middle)
  let right = arr.slice(middle)
  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  let res = []
  while(left.length && right.length) {
    left[0] <= right[0] ? res.push(left.shift()) : res.push(right.shift())
  }
  if(left.length && !right.length) res = res.concat(left)
  if(!left.length && right.length) res = res.concat(right)
  return res
}

let arr = [2,4,6,3,8,6,4,2,5,6,4,3,1]

console.log(mergeSort(arr))