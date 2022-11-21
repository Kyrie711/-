// 第一次没写出来
// function myNew(fn) {
//   if(typeof fn !== 'function') {
//     throw new Error('错误')
//   }
//   const obj = Object.create(fn.prototype)
//   return obj
// }


function myNew(fn, ...args) {
  if(typeof fn !== 'function') {
    throw new Error('错误')
  }
  const obj = Object.create(fn.prototype)
  const ret = fn.apply(obj, args)
  return typeof ret === 'object' ? ret : obj 
}
