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
          return new MyPromise((resolve, reject) => {
            this.onFulfilledCallBacks.push(
                () => {
                    setTimeout(() => {
                        const res = onFulfilled(this.PromiseResult)   
                        resolve(res)
                    })
                }
            )
            this.onRejectedPromises.push(
                () => {
                    setTimeout(() => {
                      const res = onRejected(this.PromiseResult)  
                      reject(res)   
                    })
                }
            )
          })
      }
      if(this.PromiseState === MyPromise.FULFILLED) {
          return new MyPromise((resolve, reject) => {
            setTimeout(() => {
              const res = onFulfilled(this.PromiseResult)   
              resolve(res)   
            })
          })
      }
      if(this.PromiseState === MyPromise.REJECTED) {
          return new MyPromise((resolve, reject) => {
            setTimeout(() => {
                const res = onRejected(this.PromiseResult)  
                reject(res) 
            })
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
  return 2
}).then(res => {
  console.log(res)
  return 3
}).then(res => {
  console.log(res)
})