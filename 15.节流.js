function throttle(fn, delay) {
  delay = delay || 500
  let canRun = true
  return function(...args) {
    if(!canRun) return
    canRun = false
    setTimeout(() => {
      fn.apply(this, args)
      canRun = true
    }, delay);
  }
}