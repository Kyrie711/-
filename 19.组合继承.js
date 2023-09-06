function Father() {
  this.age = 30
}

function Son(...args) {
  Father.apply(this, args)
  this.name = 'jack'
}

Son.prototype = new Father()

// 父类构造函数调用两次,生成两份实例
// 子类的constructor指向问题