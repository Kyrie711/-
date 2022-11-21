const fnList = new WeakMap()

// 收集副作用函数
function track(target, key) {
  if(!activeEffect) return

  let dataMap = fnList.get(target) // map
  if(!dataMap) {
    dataMap = new Map()
    fnList.set(target, dataMap)
  }
  let fnSet = dataMap.get(key)
  if(!fnSet) {
    fnSet = new Set()
    dataMap.set(key, fnSet)
  }
  fnSet.add(activeEffect)
}

// 执行副作用函数
function trigger(target, key) {
  const dataMap = fnList.get(target)
  if(!dataMap) return
  const effectFns = dataMap.get(key)
  effectFns && effectFns.forEach(effectFn => effectFn())
}

function observe_proxy(data) {
  const res = new Proxy(data, {
    get(target, key, receiver) {
      if(typeof target[key] === "object" && target[key] !== null) {
        return observe_proxy(target[key])
      }
      const res = Reflect.get(target, key, receiver)
      track(data, key)
      return res
    },
    set(target, key, value, receiver) {
      const res = Reflect.set(target, key, value, receiver)
      trigger(target, key)
      return res
    }
  })
  return res
}

// 存放到fnList中的函数
let activeEffect = null

function effect(effectFn) {
  activeEffect = effectFn
  effectFn()
  activeEffect = null
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

const effectFn = () => {
  console.log('tel is: ', dataProxy.tel)
}
effect(effectFn)
dataProxy.tel = 123
dataProxy.name = 'kd'