let arr = [2,4,6,3,8,6,4,2,5,6,4,3,1]

function quickSort(arr) {
  let len = arr.length
  if(len < 2) return arr
  let middleIndex = Math.floor(len / 2)
  let middle = arr.splice(middleIndex, 1)[0]
  const left = []
  const right = []
  arr.forEach(item => {
    item > middle ? right.push(item) : left.push(item)
  })
  return quickSort(left).concat(middle, quickSort(right))
}

console.log(quickSort(arr))