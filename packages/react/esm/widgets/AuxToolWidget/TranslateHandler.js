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
import { IconWidget } from '../IconWidget'
export var TranslateHandler = function (props) {
  let designer = useDesigner()
  let prefix = usePrefix('aux-node-translate-handler')
  let createHandler = function (value) {
    let _a
    return (
      (_a = {}),
      (_a[designer.props.nodeTranslateAttrName] = value),
      (_a.className = cls(prefix, value)),
      _a
    )
  }
  let allowTranslate = props.node.allowTranslate()
  if (!allowTranslate) return null
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      'div',
      __assign({}, createHandler('translate')),
      React.createElement(IconWidget, { infer: 'FreeMove' })
    )
  )
}
