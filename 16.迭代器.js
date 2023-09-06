class RangeIterator {
  constructor(start, end) {
    this.start = start
    this.end = end
  }

  [Symbol.iterator] () { return this }

  next() {
    var value = this.start
    if (value <= this.end) {
      this.start ++
      return { done: false, value }
    }
    return { done: true, value: undefined }
  }
}

const iterator = new RangeIterator(1, 3)

for(let i of iterator) {
  console.log(i)
}