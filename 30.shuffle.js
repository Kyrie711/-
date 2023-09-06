function shuffle(arr) {
  const res = []
  let random
  while (arr.length > 0) {
    random = Math.floor(Math.random()*arr.length)
    res.push(arr.splice(random, 1)[0])
  }
  return res
}

let arr = [1,2,3,4,5,6,7,8]
console.log(shuffle(arr))