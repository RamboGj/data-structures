const Stack = () => {
  let data = []

  
  const push = (element) => {
    data.push(element)
  }
  
  const remove = () => {
    data.pop()
  }
  
  const peek = () => {
    return data[data.length-1]
  }
  
  const isEmpty = () => {
    return data.length === 0
  }

  const list = () => {
    return data
  }

  return {
    data,
    push,
    remove,
    peek,
    list,
    isEmpty,
  }
}

const stack = Stack()

stack.push(1)
stack.push(2)
stack.push(3)

stack.remove()
stack.remove()
stack.remove()

const peek = stack.peek()
const isEmpty = stack.isEmpty()

console.log("Stack data:", stack.data)
console.log("Peek:", peek)
console.log("isEmpty:", isEmpty)