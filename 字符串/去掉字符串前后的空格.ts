let str = '   ab  cd   '
function del(str : string) {
  const arr = str.split('')
  let n = arr.length
  for (let i = 0; i < n; i++) {
    while(arr[0] === ' ') {
      arr.shift()
      n--
    }
  }
  while(arr[n-1] === ' ') {
    arr.pop()
    n--
  }
  return arr.join('')
}

console.log(del(str))