// 目标

// 使promise支持链式操作

const PENDING = "pending"
const FULFILLED = "fulfilled"
const REJECTED = "rejected"

function myPromise(fn) {
  let self = this
  self.value = null
  self.error = null
  self.status = PENDING
  self.onFulfilledCallbacks = []
  self.onRejectedCallbacks = []

  function resolve(value) {
    if(self.status === PENDING) {
      setTimeout(() => {
        self.status = FULFILLED
        self.value = value
        self.onFulfilledCallbacks.forEach(callback => callback(self.value))
      })
    }
  }

  function reject(error) {
    if(self.status === PENDING) {
      setTimeout(() => {
        self.status = REJECTED
        self.error = error
        self.onRejectedCallbacks.forEach(callback => callback(self.error)) 
      });
    }
  }

  fn(resolve, reject)
}

myPromise.prototype.then = function(onFulfilled, onRejected) {
  if (this.status === PENDING) {
    this.onFulfilledCallbacks.push(onFulfilled)
    this.onRejectedCallbacks.push(onRejected)
  } else if (this.status === FULFILLED) {
    onFulfilled(this.value)
  } else {
    onRejected(this.error)
  }
  return this
}