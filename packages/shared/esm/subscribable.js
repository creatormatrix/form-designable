import { isFn } from './types'
let UNSUBSCRIBE_ID_SYMBOL = Symbol('UNSUBSCRIBE_ID_SYMBOL')
let Subscribable = /** @class */ (function () {
  function Subscribable() {
    let _this = this
    this.subscribers = {
      index: 0,
    }
    this.unsubscribe = function (id) {
      if (id === undefined || id === null) {
        for (let key in _this.subscribers) {
          _this.unsubscribe(key)
        }
        return
      }
      if (!isFn(id)) {
        delete _this.subscribers[id]
      } else {
        delete _this.subscribers[id[UNSUBSCRIBE_ID_SYMBOL]]
      }
    }
  }
  Subscribable.prototype.dispatch = function (event, context) {
    let interrupted = false
    for (let key in this.subscribers) {
      if (isFn(this.subscribers[key])) {
        event['context'] = context
        if (this.subscribers[key](event) === false) {
          interrupted = true
        }
      }
    }
    return interrupted ? false : true
  }
  Subscribable.prototype.subscribe = function (subscriber) {
    let _this = this
    let id
    if (isFn(subscriber)) {
      id = this.subscribers.index + 1
      this.subscribers[id] = subscriber
      this.subscribers.index++
    }
    let unsubscribe = function () {
      _this.unsubscribe(id)
    }
    unsubscribe[UNSUBSCRIBE_ID_SYMBOL] = id
    return unsubscribe
  }
  return Subscribable
})()
export { Subscribable }
