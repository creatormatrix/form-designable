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
import React, { useEffect, useState, useRef } from 'react'
import { useHover, useSelection, usePrefix } from '../../hooks'
import { IconWidget } from '../IconWidget'
import { NodeTitleWidget } from '../NodeTitleWidget'
import { Button } from 'antd'
import { observer } from '@formily/reactive-react'
let useMouseHover = function (ref, enter, leave) {
  useEffect(function () {
    let timer = null
    let unmounted = false
    let onMouseOver = function (e) {
      let target = e.target
      clearTimeout(timer)
      timer = setTimeout(function () {
        let _a
        if (unmounted) return
        if (
          (_a = ref === null || ref === void 0 ? void 0 : ref.current) ===
            null || _a === void 0
            ? void 0
            : _a.contains(target)
        ) {
          enter && enter()
        } else {
          leave && leave()
        }
      }, 100)
    }
    document.addEventListener('mouseover', onMouseOver)
    return function () {
      unmounted = true
      document.removeEventListener('mouseover', onMouseOver)
    }
  }, [])
}
export var Selector = observer(function (_a) {
  let node = _a.node
  let hover = useHover()
  let _b = __read(useState(false), 2),
    expand = _b[0],
    setExpand = _b[1]
  let ref = useRef(null)
  let selection = useSelection()
  let prefix = usePrefix('aux-selector')
  let renderIcon = function (node) {
    let _a
    let icon = node.designerProps.icon
    if (icon) {
      return React.createElement(IconWidget, { infer: icon })
    }
    if (node === node.root) {
      return React.createElement(IconWidget, { infer: 'Page' })
    } else if (
      (_a = node.designerProps) === null || _a === void 0
        ? void 0
        : _a.droppable
    ) {
      return React.createElement(IconWidget, { infer: 'Container' })
    }
    return React.createElement(IconWidget, { infer: 'Component' })
  }
  let renderMenu = function () {
    let parents = node.getParents()
    return React.createElement(
      'div',
      {
        className: prefix + '-menu',
        style: {
          position: 'absolute',
          top: '100%',
          left: 0,
        },
      },
      parents.slice(0, 4).map(function (parent) {
        return React.createElement(
          Button,
          {
            key: parent.id,
            type: 'primary',
            onClick: function () {
              selection.select(parent.id)
            },
            onMouseEnter: function () {
              hover.setHover(parent)
            },
          },
          renderIcon(parent),
          React.createElement(
            'span',
            { style: { transform: 'scale(0.85)', marginLeft: 2 } },
            React.createElement(NodeTitleWidget, { node: parent })
          )
        )
      })
    )
  }
  useMouseHover(
    ref,
    function () {
      setExpand(true)
    },
    function () {
      setExpand(false)
    }
  )
  return React.createElement(
    'div',
    { ref: ref, className: prefix },
    React.createElement(
      Button,
      {
        className: prefix + '-title',
        type: 'primary',
        onMouseEnter: function () {
          hover.setHover(node)
        },
      },
      renderIcon(node),
      React.createElement(
        'span',
        null,
        React.createElement(NodeTitleWidget, { node: node })
      )
    ),
    expand && renderMenu()
  )
})
Selector.displayName = 'Selector'
