function Father() {
  this.age = 30
}

function Son() {
  this.name = 'jack'
}

Son.prototype = new Father()

const s = new Son()
console.log(s.name)
console.log(s.age)

// 简单，易于实现
// 父类新增原型方法、原型属性，子类都能访问到

// 无法实现多继承
// 来自原型对象的所有属性被所有实例共享
// 创建子类实例时，无法向父类构造函数传参