function insert(arr) {
  let len = arr.length
  for(let i = 1; i < len; i++) {
    let temp = arr[i]
    let j = i-1
    for(; j >= 0; j--) {
      if(temp >= arr[j]) break
      if(temp < arr[j]) arr[j+1] = arr[j]
    }
    arr[j+1] = temp
  }
}

let arr = [2,4,6,3,8,6,4,2,5,6,4,3,1]

insert(arr)

console.log(arr)