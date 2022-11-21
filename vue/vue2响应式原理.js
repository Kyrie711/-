class Dep { // 订阅者Dep, 用来存放Watcher观察者对象  收集依赖  派发更新
  constructor() {
    this.subs = []
  }

  addSub(sub) {
    this.subs.push(sub)
  }

  notify() {
    this.subs.forEach(sub => {
      sub.update()
    })
  }
}

class Watcher {
  constructor() {
    Dep.target = this
  }

  update() {
    console.log("视图更新啦~")
  }
}
// Watcher就是类似中介的角色，比如message就有三个中介，当message变化，就通知这三个中介，他们就去执行各自需要做的变化。

Dep.target = null

function defineReactive(obj, key, val) {
  const dep = new Dep()
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter() {
      dep.addSub(Dep.target)
      return val
    },
    set: function reactiveSetter(newVal) {
      if(newVal === val) return;
      dep.notify()
    }
  })
}
//我们通过Object.defineProperty为对象obj添加属性，
//可以设置对象属性的getter和setter函数。
//之后我们每次通过点语法获取属性都会执行这里的getter函数，在这个函数中我们会把调用此属性的依赖收集到一个集合中；
//而在我们给属性赋值(修改属性)时，会触发这里定义的setter函数，在次函数中会去通知集合中的依赖更新，做到数据变更驱动视图变更。

//依赖收集 和 派发更新

function observer(value) {
  if(!value || (typeof value !== 'object')) return;
  Object.keys(value).forEach(key => {
    defineReactive(value, key, value[key])
  })
}

class Vue {
  constructor(options) {
    this._data = options.data
    observer(this._data)
    new Watcher()
    console.log('render~', this._data.test)
  }
}