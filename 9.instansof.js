function myInstanceof(left, right) {
  let proto = Object.getPrototypeOf(left)
  while(proto) {
    if(proto === right.prototype) return true
    else proto = Object.getPrototypeOf(proto)
  }
  return false
}

let arr = '[]'

console.log(myInstanceof(arr, String))