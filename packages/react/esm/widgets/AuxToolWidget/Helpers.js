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
import React, { useRef, useState, useLayoutEffect } from 'react'
import { reaction } from '@formily/reactive'
import { usePrefix, useViewport } from '../../hooks'
import { Selector } from './Selector'
import { Copy } from './Copy'
import { Delete } from './Delete'
import { DragHandler } from './DragHandler'
import cls from 'classnames'
let HELPER_DEBOUNCE_TIMEOUT = 100
export var Helpers = function (_a) {
  let _b
  let node = _a.node,
    nodeRect = _a.nodeRect
  let prefix = usePrefix('aux-helpers')
  let viewport = useViewport()
  let unmountRef = useRef(false)
  let ref = useRef()
  let _c = __read(useState('top-right'), 2),
    position = _c[0],
    setPosition = _c[1]
  useLayoutEffect(
    function () {
      let request = null
      let getYInViewport = function (nodeRect, helpersRect) {
        if (nodeRect.top - viewport.scrollY > helpersRect.height) {
          return 'top'
        } else if (
          viewport.isScrollTop &&
          nodeRect.height + helpersRect.height > viewport.height
        ) {
          return 'inner-top'
        } else if (
          nodeRect.bottom >= viewport.scrollY + viewport.height &&
          nodeRect.height + helpersRect.height > viewport.height
        ) {
          return 'inner-bottom'
        }
        return 'bottom'
      }
      let getXInViewport = function (nodeRect, helpersRect) {
        let widthDelta = helpersRect.width - nodeRect.width
        if (widthDelta >= 0) {
          if (nodeRect.x < widthDelta) {
            return 'left'
          } else if (nodeRect.right + widthDelta > viewport.width) {
            return 'right'
          } else {
            return 'center'
          }
        }
        return 'right'
      }
      let update = function () {
        let _a
        let helpersRect =
          (_a = ref.current) === null || _a === void 0
            ? void 0
            : _a.getBoundingClientRect()
        if (!helpersRect || !nodeRect) return
        if (unmountRef.current) return
        setPosition(
          getYInViewport(nodeRect, helpersRect) +
            '-' +
            getXInViewport(nodeRect, helpersRect)
        )
      }
      update()
      return reaction(
        function () {
          return [
            viewport.width,
            viewport.height,
            viewport.scrollX,
            viewport.scrollY,
            viewport.isScrollBottom,
            viewport.isScrollTop,
          ]
        },
        function () {
          clearTimeout(request)
          request = setTimeout(update, HELPER_DEBOUNCE_TIMEOUT)
        }
      )
    },
    [viewport, nodeRect]
  )
  if (!nodeRect || !node) return null
  return React.createElement(
    'div',
    {
      className: cls(prefix, ((_b = {}), (_b[position] = true), _b)),
      ref: ref,
    },
    React.createElement(
      'div',
      { className: cls(prefix + '-content') },
      React.createElement(Selector, { node: node }),
      (node === null || node === void 0 ? void 0 : node.allowClone()) === false
        ? null
        : React.createElement(Copy, { node: node }),
      (node === null || node === void 0 ? void 0 : node.allowDrag()) === false
        ? null
        : React.createElement(DragHandler, { node: node }),
      (node === null || node === void 0 ? void 0 : node.allowDelete()) === false
        ? null
        : React.createElement(Delete, { node: node })
    )
  )
}
Helpers.displayName = 'Helpers'