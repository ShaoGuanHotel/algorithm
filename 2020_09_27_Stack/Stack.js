/**
 * 堆栈 Stack LIFO (后进先出)
 */
const weakMap = new WeakMap() // 可以通过WeakMap实现 隐藏属性;也kiyomi通过#实现
class Stack {
  #conut = 0 // private属性
  constructor() {
    weakMap.set(this, {})
  }
  isEmpty() {
    return this.#conut === 0
  }
  push(item) {
    const items = weakMap.get(this)
    items[this.#conut++] = item
  }
  pop() {
    if (this.isEmpty()) return undefined
    this.#conut--
    const items = weakMap.get(this)
    const result = items[this.#conut]
    Reflect.deleteProperty(items, this.#conut)
    return result
  }
  size() {
    return this.#conut
  }
  peak() {
    if (this.isEmpty()) return
    return weakMap.get(this)[this.#conut - 1]
  }
  clear() {
    while (!this.isEmpty()) {
      this.pop()
    }
  }
}
