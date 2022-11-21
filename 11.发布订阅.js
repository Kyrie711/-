class EventsEmitter {
  constructor() {
    this.events = {}
  }

  on(type, callback) {
    if(!this.events) this.events = Object.create(null)
    if(!this.events[type]) this.events[type] = [callback]
    else this.events[type].push(callback)
  }

  off(type, callback) {
    if(!this.events[type]) return;
    this.events[type] = this.events[type].filter(item => {
      return item !== callback
    })
  }

  once(type, callback) {
    function fn() {
      callback()
      this.off(type, fn)
    }
    this.on(type, fn)
  }

  emit(type, ...args) {
    this.events[type] &&
      this.events[type].forEach(fn => fn.call(this,...args))
  }
}