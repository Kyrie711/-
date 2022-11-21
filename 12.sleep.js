function sleep(time) {
  return new Promise(resolve => {
    setTimeout(resolve, time)
  }) 
}
// console.log(2)
// sleep(1000).then(() => console.log(1))


// (async function(){
//   console.log(1)
//   await sleep(1000)
//   console.log(2)
// })()

function* g(time) {
  yield new Promise(resolve => {
    setTimeout(resolve, time)
  })
}

g(1000).next().value.then(() => console.log(1))