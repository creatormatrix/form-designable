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
let __read =
  (this && this.__read) ||
  function (o, n) {
    let m = typeof Symbol === 'function' && o[Symbol.iterator]
    if (!m) return o
    let i = m.call(o),
      r,
      ar = [],
      e
    try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value)
    } catch (error) {
      e = { error: error }
    } finally {
      try {
        if (r && !r.done && (m = i['return'])) m.call(i)
      } finally {
        if (e) throw e.error
      }
    }
    return ar
  }
import React, { Fragment, useState, useLayoutEffect } from 'react'
import { createPortal } from 'react-dom'
import { observer, useField } from '@formily/react'
import { FormLayout } from '@formily/antd'
import { IconWidget, usePrefix, useTreeNode } from '@designable/react'
import { Button } from 'antd'
import cls from 'classnames'
import './styles.less'
export var DrawerSetter = observer(function (props) {
  let node = useTreeNode()
  let field = useField()
  let _a = __read(useState(false), 2),
    visible = _a[0],
    setVisible = _a[1]
  let _b = __read(useState(false), 2),
    remove = _b[0],
    setRemove = _b[1]
  let _c = __read(useState(), 2),
    root = _c[0],
    setRoot = _c[1]
  let prefix = usePrefix('drawer-setter')
  let formWrapperCls = usePrefix(
    props.wrapperClassName || 'settings-form-wrapper'
  )
  useLayoutEffect(
    function () {
      let wrapper = document.querySelector('.' + formWrapperCls)
      if (wrapper) {
        setRoot(wrapper)
      }
    },
    [node]
  )
  let renderDrawer = function () {
    if (root && visible) {
      return createPortal(
        React.createElement(
          'div',
          {
            className: cls(prefix, 'animate__animated animate__slideInRight', {
              animate__slideOutRight: remove,
            }),
          },
          React.createElement(
            'div',
            { className: prefix + '-header', onClick: handleClose },
            React.createElement(IconWidget, { infer: 'Return', size: 18 }),
            React.createElement(
              'span',
              { className: prefix + '-header-text' },
              props.text || field.title
            )
          ),
          React.createElement(
            'div',
            { className: prefix + '-body' },
            React.createElement(
              FormLayout,
              {
                colon: false,
                labelWidth: 120,
                labelAlign: 'left',
                wrapperAlign: 'right',
                feedbackLayout: 'none',
                tooltipLayout: 'text',
              },
              props.children
            )
          )
        ),
        root
      )
    }
    return null
  }
  let handleOpen = function () {
    setVisible(true)
  }
  var handleClose = function () {
    setRemove(true)
    setTimeout(function () {
      setVisible(false)
      setRemove(false)
    }, 150)
  }
  return React.createElement(
    Fragment,
    null,
    React.createElement(
      Button,
      __assign({ block: true, onClick: handleOpen }, props.triggerProps),
      props.text || field.title
    ),
    renderDrawer()
  )
})
