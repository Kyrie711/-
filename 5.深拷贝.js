// // 简单的
// let obj = {}
// JSON.parse(JSON.stringify(obj))
// // 循环引用的问题



function deepCopy(obj) {
  if(typeof obj !== 'object') return obj;
  const newObj = Array.isArray(obj) ? [] : {}
  for(let i of Object.keys(obj)) { 
    newObj[i] = typeof obj[i] === 'object' ? deepCopy(obj[i]) : obj[i]
  }
  return newObj
}