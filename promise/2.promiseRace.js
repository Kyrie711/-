Promise.prototype.myRace = function(promises) {
  if(typeof promises[Symbol.iterator] !== 'function') return new Promise.reject(new Error('错误'))
  return new Promise((resolve, reject) => {
    promises.forEach(item => {
      // item.then(res => resolve(res)).catch(err => reject(err))
      item.then(resolve, reject)
    })
  })
}