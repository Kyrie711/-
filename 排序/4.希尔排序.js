function shell(arr) {
  let gap = 1,len = arr.length
  while(gap < len/3) {
    gap = 3 * gap + 1
  }
  for(;gap > 0; gap = Math.floor(gap/3)) {
    let temp;
    for(let i = gap; i < len; i++) {
      temp = arr[i]
      for(var j = i - gap; j >= 0 && arr[j] > temp; j -= gap) {
        arr[j+gap] = arr[j]
      }
      arr[j+gap] = temp
    }
  }
}

let arr = [2,4,6,3,8,6,4,2,5,6,4,3,1]

shell(arr)

console.log(arr)