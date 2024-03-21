// Methods
/*
1 - Add
2 - Remove
3 - isEmpty
4 - Verify Top Element
*/

// Stack => LIFO ( Last in, First out )
// Class implementation

class Stack {
  data = []

  constructor() {
    this.data = []
  }

  push(element) {
    this.data.push(element)
  }

  remove() {
    this.data.pop()
  }

  peek() {
    return this.data[this.data.length-1]
  }

  isEmpty() {
    return this.data.length === 0
  }

  clear() {
    this.data = []
  }

  list() {
    return this.data
  }
}

const stack = new Stack()

stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)

stack.remove()
stack.remove()

const isEmpty = stack.isEmpty()

const peek = stack.peek()

console.log("Stack data:", stack.data)
console.log("Peek:", peek)
console.log("isEmpty:", isEmpty)
