// Queue => FIFO (First in, First out)
// Class implementation

class Queue {
  data = []

  add(element) {
    return this.data.unshift(element)
  }

  remove() {
    return this.data.pop()
  }

  constructor() {
    this.data = []
  }
}

const queue = new Queue()

queue.add(1)
queue.add(2)
queue.add(3)
queue.add(4)

queue.remove()
queue.remove()

console.log("queue:", queue.data)