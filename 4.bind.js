Function.prototype.myBind = function(context, ...args) {
  if(typeof this !== 'function') throw new Error('错误')
  let self  = this
  function fb(...args2) {
    return self.apply(this instanceof fb ? this : context, [...args, ...args2])
  }
  fb.prototype = Object.create(self.prototype)
  return fb
}

// 闭包的应用