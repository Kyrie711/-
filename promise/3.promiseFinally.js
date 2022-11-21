Promise.prototype.myFinally = function(callback) {
  return this.then(
    value => Promise.resolve(callback()).then(() => value),
    err => Promise.resolve(callback()).then(() => {throw err})
  )
}