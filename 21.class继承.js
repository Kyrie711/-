class Father{

}

class Son extends Father {
  constructor(name) {
    super(name)
    this.name = name
  }
}

//综上，主要的区别就是Sub构造器的原型不一样，ES6下指向的就是Super父类，而ES5下就是初始引擎生成的Function.prototype
//ES5 和 ES6 子类 this 生成顺序不同。ES5 的继承先生成了子类实例，再调用父类的构造函数修饰子类
//实例，ES6 的继承先生成父类实例，再调用子类的构造函数修饰父类实例。这个差别使得 ES6 可以继承内置对象。

//constructor里面的是在实例上的数据，外面的方法是在原型上
//要是外面的方法以赋值的形式，相当于在constructor中，然后是在实例上
//为什么是在实例上面，因为是this.  this就是实例
//然后箭头函数中的this是因为，实例调用constructor