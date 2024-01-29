export var compose = function () {
  let fns = []
  for (let _i = 0; _i < arguments.length; _i++) {
    fns[_i] = arguments[_i]
  }
  return function (payload) {
    return fns.reduce(function (buf, fn) {
      return fn(buf)
    }, payload)
  }
}
