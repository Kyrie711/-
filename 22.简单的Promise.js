class MyPromise {
  static PENDING = 'pending'
  static FULFILLED = 'fulfilled'
  static REJECTED = 'rejected'
  constructor(fn) {
      this.PromiseState = MyPromise.PENDING
      this.PromiseResult = null
      this.onFulfilledCallBacks = []
      this.onRejectedPromises = []
      fn(this.resolve.bind(this), this.reject.bind(this))
  }

  resolve(result) {
      if(this.PromiseState === MyPromise.PENDING) {
          this.PromiseState = MyPromise.FULFILLED
          this.PromiseResult = result
          this.onFulfilledCallBacks.forEach(callBack => {
              callBack()
          })
      }
  }

  reject(result) {
      if(this.PromiseState === MyPromise.PENDING) {
          this.PromiseState = MyPromise.REJECTED
          this.PromiseResult = result
          this.onRejectedPromises.forEach(callBack => {
              callBack()
          })
      }
  }

  then(onFulfilled, onRejected) {
      onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value
      onRejected = typeof onRejected === 'function' ? onRejected : reason => {
          throw reason
      }
      if(this.PromiseState === MyPromise.PENDING) {
          this.onFulfilledCallBacks.push(
              () => {
                  setTimeout(() => {
                      onFulfilled(this.PromiseResult)   
                  })
              }
          )
          this.onRejectedPromises.push(
              () => {
                  setTimeout(() => {
                      onRejected(this.PromiseResult)   
                  })
              }
          )
      }
      if(this.PromiseState === MyPromise.FULFILLED) {
          setTimeout(() => {
              onFulfilled(this.PromiseResult)   
          })
      }
      if(this.PromiseState === MyPromise.REJECTED) {
          setTimeout(() => {
              onRejected(this.PromiseResult)   
          })
      }
  }
}

const APromise = new MyPromise((resolve, reject) => {
  console.log('promise start')
  setTimeout(() => {
      resolve('hhh')
  }, 1000);
}).then(res => {
  console.log(res)
})