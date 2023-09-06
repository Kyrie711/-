//乐色
// Promise.prototype.myAll = function(args) {
//   const arr = []
//   args.forEach(item => {
//     item.then(res => {
//       arr.push(res)
//     }).catch(err => {
//       new Error(err)
//     })
//   })
// }

Promise.prototype.myAll = function(promises) {
  if(typeof promises[Symbol.iterator] !== 'function') return new Promise.reject(new Error('错误'))
  return new Promise((resolve, reject) => {
    let count = 0
    const result = []
    let n = promises.length
    for(let i = 0; i < n; i++) {
      Promise.resolve(promises[i]).then(res => {
        // result.push(res)  不用push 顺序不一致了
        result[i] = res 
        if(++count === n) resolve(result)
      }).catch(err => {
        reject(err)
      })
    }
  })
}