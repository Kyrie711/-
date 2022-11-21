function observe_proxy(data) {
  const res = new Proxy(data, {
    get(target, key, receiver) {
      if(typeof target[key] === "object" && target[key] !== null) {
        return observe_proxy(target[key])
      }
      const res = Reflect.get(target, key, receiver)
      fnList.add(activeEffect)
      return res
    },
    set(target, key, value, receiver) {
      const res = Reflect.set(target, key, value, receiver)
      fnList.forEach(fn => fn())
      return res
    }
  })
  return res
}

const fnList = new Set()
let activeEffect
function effect(effectFn) {
  activeEffect = effectFn
  effectFn()
}

const data = {
  name: 'kkkyrie',
  tel: 158,
  address: {
    firstAdd: '湖北',
    second: '武汉'
  }
}

const dataProxy = observe_proxy(data)

const effectFn = () => console.log('tel is: ',dataProxy.tel)

effect(effectFn)

dataProxy.tel = 166
dataProxy.name = 'asd'

console.log(data.tel)