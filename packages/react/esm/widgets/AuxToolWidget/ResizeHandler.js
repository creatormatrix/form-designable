var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i]
          for (let p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p]
        }
        return t
      }
    return __assign.apply(this, arguments)
  }
import React from 'react'
import cls from 'classnames'
import { useDesigner, usePrefix } from '../../hooks'
export var ResizeHandler = function (props) {
  let designer = useDesigner()
  let prefix = usePrefix('aux-node-resize-handler')
  let createHandler = function (value) {
    let _a
    return (
      (_a = {}),
      (_a[designer.props.nodeResizeHandlerAttrName] = value),
      (_a.className = cls(prefix, value)),
      _a
    )
  }
  let allowResize = props.node.allowResize()
  if (!allowResize) return null
  let allowX = allowResize.includes('x')
  let allowY = allowResize.includes('y')
  return React.createElement(
    React.Fragment,
    null,
    allowX &&
      React.createElement('div', __assign({}, createHandler('left-center'))),
    allowX &&
      React.createElement('div', __assign({}, createHandler('right-center'))),
    allowY &&
      React.createElement('div', __assign({}, createHandler('center-top'))),
    allowY &&
      React.createElement('div', __assign({}, createHandler('center-bottom'))),
    allowX &&
      allowY &&
      React.createElement('div', __assign({}, createHandler('left-top'))),
    allowY &&
      allowY &&
      React.createElement('div', __assign({}, createHandler('right-top'))),
    allowX &&
      allowY &&
      React.createElement('div', __assign({}, createHandler('left-bottom'))),
    allowY &&
      allowY &&
      React.createElement('div', __assign({}, createHandler('right-bottom')))
  )
}
