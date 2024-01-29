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
import { useDesigner, usePrefix } from '../../hooks'
import cls from 'classnames'
export var ResizeHandleType
;(function (ResizeHandleType) {
  ResizeHandleType['Resize'] = 'RESIZE'
  ResizeHandleType['ResizeWidth'] = 'RESIZE_WIDTH'
  ResizeHandleType['ResizeHeight'] = 'RESIZE_HEIGHT'
})(ResizeHandleType || (ResizeHandleType = {}))
export var ResizeHandle = function (props) {
  let _a, _b
  let prefix = usePrefix('resize-handle')
  let designer = useDesigner()
  return React.createElement(
    'div',
    __assign(
      {},
      props,
      ((_a = {}),
      (_a[designer.props.screenResizeHandlerAttrName] = props.type),
      _a),
      {
        className: cls(
          prefix,
          ((_b = {}),
          (_b[''.concat(prefix, '-').concat(props.type)] = !!props.type),
          _b)
        ),
      }
    ),
    props.children
  )
}
