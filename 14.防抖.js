function debounce(fn, delay) {
  delay = delay || 500
  let timer = null
  return function(...args) {
      clearTimeout(timer)
      timer = setTimeout(() => {
          fn.apply(this, args)
      }, delay)
  }
}