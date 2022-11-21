// 目标

// 实现promise的三种状态。
// 实现promise对象的状态改变，改变只有两种可能：从pending变为fulfilled和从pending变为rejected。
// 实现一旦promise状态改变，再对promise对象添加回调函数，也会立即得到这个结果。

const PENDING = "pending"
const FULFILLED = "fulfilled"
const REJECTED = "rejected"

function myPromise(fn) {
  let self = this
  self.value = null
  self.error = null
  self.status = PENDING
  self.onFulfilled = null
  self.onRejected = null

  function resolve(value) {
    if(self.status === PENDING) {
      setTimeout(() => {
        self.status = FULFILLED
        self.value = value
        self.onFulfilled(self.value)
      })
    }
  }

  function reject(error) {
    if(self.status === PENDING) {
      setTimeout(() => {
        self.status = REJECTED
        self.error = error
        self.onRejected(self.error) 
      });
    }
  }

  fn(resolve, reject)
}

myPromise.prototype.then = function(onFulfilled, onRejected) {
  if (this.status === PENDING) {
    this.onFulfilled = onFulfilled
    this.onRejected = onRejected
  } else if (this.status === FULFILLED) {
    onFulfilled(this.value)
  } else {
    onRejected(this.error)
  }
  return this
}