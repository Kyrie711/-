Array.prototype.myMap = function(fn, context) {
  let arr = [...this]
  let res = []
  for(let i = 0; i < arr.length; i++) {
    res.push(fn.call(context, arr[i], i, this))
  }
  return res
}