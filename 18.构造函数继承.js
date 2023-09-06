function Father() {
  this.age = 30
}

function Son(...args) {
  Father.apply(this, args)
  this.name = 'jack'
}

// 子类可以向父类构造函数传参
// 每个子类实例都会生成一份属性
// 可以多继承

// 无法继承到父类原型链上的属性
// 无法共享方法
// 不是父类的实例，只是子类的实例 java Father s = new Son()
