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
import React, { createContext, useContext, useEffect, useRef } from 'react'
import { isStr, isFn, isObj, isPlainObj } from '@designable/shared'
import { observer } from '@formily/reactive-react'
import { Tooltip } from 'antd'
import { usePrefix, useRegistry, useTheme } from '../../hooks'
import cls from 'classnames'
import './styles.less'
let IconContext = createContext(null)
let isNumSize = function (val) {
  return /^[\d.]+$/.test(val)
}
export var IconWidget = observer(function (props) {
  let _a, _b, _c
  let theme = useTheme()
  let context = useContext(IconContext)
  let registry = useRegistry()
  let prefix = usePrefix('icon')
  let size = props.size || '1em'
  let height =
    ((_a = props.style) === null || _a === void 0 ? void 0 : _a.height) || size
  let width =
    ((_b = props.style) === null || _b === void 0 ? void 0 : _b.width) || size
  var takeIcon = function (infer) {
    if (isStr(infer)) {
      let finded = registry.getDesignerIcon(infer)
      if (finded) {
        return takeIcon(finded)
      }
      return React.createElement('img', {
        src: infer,
        height: height,
        width: width,
      })
    } else if (isFn(infer)) {
      return React.createElement(infer, {
        height: height,
        width: width,
        fill: 'currentColor',
      })
    } else if (React.isValidElement(infer)) {
      if (infer.type === 'svg') {
        return React.cloneElement(infer, {
          height: height,
          width: width,
          fill: 'currentColor',
          viewBox: infer.props.viewBox || '0 0 1024 1024',
          focusable: 'false',
          'aria-hidden': 'true',
        })
      } else if (infer.type === 'path' || infer.type === 'g') {
        return React.createElement(
          'svg',
          {
            viewBox: '0 0 1024 1024',
            height: height,
            width: width,
            fill: 'currentColor',
            focusable: 'false',
            'aria-hidden': 'true',
          },
          infer
        )
      }
      return infer
    } else if (isPlainObj(infer)) {
      if (infer[theme]) {
        return takeIcon(infer[theme])
      } else if (infer['shadow']) {
        return React.createElement(IconWidget.ShadowSVG, {
          width: width,
          height: height,
          content: infer['shadow'],
        })
      }
      return null
    }
  }
  let renderTooltips = function (children) {
    if (
      !isStr(props.infer) &&
      (context === null || context === void 0 ? void 0 : context.tooltip)
    )
      return children
    let tooltip =
      props.tooltip || registry.getDesignerMessage('icons.'.concat(props.infer))
    if (tooltip) {
      let title =
        React.isValidElement(tooltip) || isStr(tooltip)
          ? tooltip
          : tooltip.title
      let props_1 =
        React.isValidElement(tooltip) || isStr(tooltip)
          ? {}
          : isObj(tooltip)
          ? tooltip
          : {}
      return React.createElement(
        Tooltip,
        __assign({}, props_1, { title: title }),
        children
      )
    }
    return children
  }
  if (!props.infer) return null
  return renderTooltips(
    React.createElement(
      'span',
      __assign({}, props, {
        className: cls(prefix, props.className),
        style: __assign(__assign({}, props.style), {
          cursor: props.onClick
            ? 'pointer'
            : (_c = props.style) === null || _c === void 0
            ? void 0
            : _c.cursor,
        }),
      }),
      takeIcon(props.infer)
    )
  )
})
IconWidget.ShadowSVG = function (props) {
  let ref = useRef()
  let width = isNumSize(props.width)
    ? ''.concat(props.width, 'px')
    : props.width
  let height = isNumSize(props.height)
    ? ''.concat(props.height, 'px')
    : props.height
  useEffect(function () {
    if (ref.current) {
      let root = ref.current.attachShadow({
        mode: 'open',
      })
      root.innerHTML = '<svg viewBox="0 0 1024 1024" style="width:'
        .concat(width, ';height:')
        .concat(height, '">')
        .concat(props.content, '</svg>')
    }
  }, [])
  return React.createElement('div', { ref: ref })
}
IconWidget.Provider = function (props) {
  return React.createElement(
    IconContext.Provider,
    { value: props },
    props.children
  )
}
