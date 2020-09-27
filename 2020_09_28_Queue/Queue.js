/**
 * 队列 Queue FIFO(first in first out 先进先出)
 */
class Queue {
  #head = 0
  #tail = 0
  #queue = {}
  constructor(data) {
    if (data[Symbol.iterator] == null) {
      throw new Error('data not a iterator')
    }
    ;[...data].forEach((item) => this.enqueue(item))
  }
  // 队列尾部添加
  enqueue(item) {
    this.#queue[this.#tail++] = item
  }
  // 移除头部第一项并返回
  dequeue() {
    if (this.isEmpty()) return undefined
    const result = this.#queue[this.#head]
    Reflect.deleteProperty(this.#queue, this.#head)
    this.#head++
    return result
  }
  // 返回第一项,不移除
  peek() {
    if (this.isEmpty()) return undefined
    return this.#queue[this.#head]
  }
  isEmpty() {
    return this.#head === this.#tail
  }
  size() {
    return this.#tail - this.#head
  }
  clear() {
    this.#head = 0
    this.#tail = 0
    this.#queue = {}
  }
}

const data = ['a', 'b', 'c']
const queue = new Queue(data)
console.log(queue.dequeue())
console.log(queue.enqueue('d'))
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
