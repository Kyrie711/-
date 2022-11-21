Function.prototype.myApply = function(context, args) {
  if(typeof this !== 'function') throw new Error('错误')
  let context = context || window
  let fn = Symbol('fn')
  context[fn] = this
  const res = context[fn](...args)
  delete context.fn
  return res
}