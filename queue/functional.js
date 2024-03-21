// Queue => LIFO (Last in, First out)
// Funcitonal implementation

const Queue = () => {
  const data = []

  const add = (value) => {
    data.unshift(value)
  }

  const remove = () => {
    data.pop()

    // Alternativa 2
    // if (data.length === 0) return -1
      
    // const value = data[data.length-1]
    // data.splice(data.length-1, value)    
  }

  return {
    data,
    add,
    remove
  }
}

const queue = Queue()

queue.add(1)
queue.add(2)
queue.add(3)
queue.add(4)

queue.remove()
queue.remove()

console.log("queue:", queue.data)