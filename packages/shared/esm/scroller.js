import { createUniformSpeedAnimation, calcSpeedFactor } from './animation'
import { isFn, isWindow } from './types'
let MAX_SPEED = 80 // px/s
export var calcAutoScrollBasicInfo = function (
  point,
  axis,
  viewport,
  maxSpeed
) {
  if (maxSpeed === void 0) {
    maxSpeed = MAX_SPEED
  }
  let left = viewport.left,
    right = viewport.right,
    top = viewport.top,
    bottom = viewport.bottom
  let x = point.x,
    y = point.y
  let begin
  let end
  let pos
  let speedFactor
  if (axis === 'x') {
    begin = left
    end = right
    pos = x
  } else {
    begin = top
    end = bottom
    pos = y
  }
  let scrollerSize = end - begin
  let moveDistance = scrollerSize > 400 ? 100 : scrollerSize / 3
  if (end - pos < moveDistance) {
    return {
      direction: 'end',
      speedFactor: speedFactor,
      speed: maxSpeed * calcSpeedFactor(end - pos, moveDistance),
    }
  } else if (pos - begin < moveDistance) {
    return {
      direction: 'begin',
      speedFactor: speedFactor,
      speed: maxSpeed * calcSpeedFactor(pos - begin, moveDistance),
    }
  }
  return null
}
export var updateScrollValue = function (element, axis, value, callback) {
  if (element) {
    if (!isWindow(element)) {
      if (axis === 'x') {
        if (element.scrollLeft + value > element.scrollWidth) return
        element.scrollLeft += value
        if (isFn(callback)) {
          callback(element.scrollLeft)
        }
      } else {
        if (element.scrollTop + value > element.scrollHeight) return
        element.scrollTop += value
        if (isFn(callback)) {
          callback(element.scrollTop)
        }
      }
    } else {
      if (axis === 'x') {
        element.scrollBy({
          left: value,
          behavior: 'smooth',
        })
      } else {
        element.scrollBy({
          top: value,
          behavior: 'smooth',
        })
      }
      if (isFn(callback)) {
        callback(value)
      }
    }
  }
}
export var scrollAnimate = function (
  element,
  axis,
  direction,
  speed,
  callback
) {
  return createUniformSpeedAnimation(speed, function (delta) {
    updateScrollValue(
      element,
      axis,
      direction === 'begin' ? 0 - delta : delta,
      callback
    )
  })
}
