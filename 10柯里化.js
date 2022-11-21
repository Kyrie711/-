function curry(fn) {
  return function curried (...args) {
    // if(args.length >= fn.length) return fn(...args)
    if(args.length >= fn.length) return fn.call(this,...args)
    else return function(...args2) {
      // return curried(...args,...args2) 最好带上this
      return curried.apply(this,[...args,...args2])
    }
  }
}

function fn(a,b,c) {
  return a + b + c
}

let curriedFn = curry(fn)

let res = curriedFn(1)(2)(3)

console.log(res)