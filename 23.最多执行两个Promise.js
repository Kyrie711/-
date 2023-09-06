// 实现一个Scheduler类完成对Promise的并发处最多同时执行2个任务
class Scheduler {
  constructor() {
      this.running_task = []
      this.wait_task = []
  }

  add(p) {
      return new Promise((resolve, reject) => {
          p.resolve = resolve

          if(this.running_task.length < 2) {
              this.run(p)
          } else {
              this.wait_task.push(p)
          }
      })
  }

  run(p) {
      this.running_task.push(p)
      p().then(() => {
          p.resolve()
          this.remove(p)
          if(this.wait_task.length) {
              this.run(this.wait_task.shift())
          }
      })
  }

  remove(p) {
      let index = this.running_task.indexOf(p)
      this.running_task.splice(index, 1)
  }
}

const sleep = (timeout) => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve()
      }, timeout);
  })
} 

const sch = new Scheduler()
console.log('start', new Date())
sch.add(() => sleep(1000)).then(() => console.log(1, new Date())) // 1:00 
sch.add(() => sleep(2000)).then(() => console.log(2, new Date())) // 2:00
sch.add(() => sleep(3000)).then(() => console.log(3, new Date())) // 4:00
sch.add(() => sleep(2000)).then(() => console.log(4, new Date())) // 4:00
sch.add(() => sleep(1000)).then(() => console.log(5, new Date())) // 5:00
sch.add(() => sleep(3000)).then(() => console.log(6, new Date())) // 7:00
sch.add(() => sleep(4000)).then(() => console.log(7, new Date())) // 9:00