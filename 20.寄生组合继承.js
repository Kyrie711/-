function Father() {
  this.age = 30
}

function Son(...args) {
  Father.apply(this, args)
  this.name = 'jack'
}

Son.prototype = Object.create(Father.prototype)

Son.prototype.constructor = Son

(function() {
  let NoneFun = function() {}
  NoneFun.prototype = Father.prototype
  Son.prototype = new NoneFun()
  Son.prototype.constructor = Son
})()