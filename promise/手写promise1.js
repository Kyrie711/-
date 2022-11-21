// 目标
// 可以创建promise对象实例。
// promise实例传入的异步方法执行成功就执行注册的成功回调函数，失败就执行注册的失败回调函数。
// 使promise支持同步方法

function myPromise(fn) {
  let self = this
  self.value = null
  self.error = null
  self.onFulfilled = null
  self.onRejected = null

  function resolve(value) {
    setTimeout(() => {
      self.value = value
      self.onFulfilled(self.value)
    });
  }

  function reject(error) {
    setTimeout(() => {
      self.error = error
      self.onRejected(self.error)
    });
  }

  fn(resolve, reject) // 执行的真正地方
}

// 实际上是传递参数
myPromise.prototype.then = function(onFulfilled, onRejected) {
  this.onFulfilled = onFulfilled
  this.onRejected = onRejected
}