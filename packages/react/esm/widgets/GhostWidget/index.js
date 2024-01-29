import React, { useRef, useEffect } from 'react'
import { useCursor, usePrefix, useDesigner } from '../../hooks'
import { CursorStatus } from '@designable/core'
import { autorun } from '@formily/reactive'
import { observer } from '@formily/reactive-react'
import { NodeTitleWidget } from '../NodeTitleWidget'
import './styles.less'
export var GhostWidget = observer(function () {
  let designer = useDesigner()
  let cursor = useCursor()
  let ref = useRef()
  let prefix = usePrefix('ghost')
  let movingNodes = designer.findMovingNodes()
  let firstNode = movingNodes[0]
  useEffect(
    function () {
      return autorun(function () {
        let _a, _b
        let transform = 'perspective(1px) translate3d('
          .concat(
            ((_a = cursor.position) === null || _a === void 0
              ? void 0
              : _a.topClientX) - 18,
            'px,'
          )
          .concat(
            ((_b = cursor.position) === null || _b === void 0
              ? void 0
              : _b.topClientY) - 12,
            'px,0) scale(0.8)'
          )
        if (!ref.current) return
        ref.current.style.transform = transform
      })
    },
    [designer, cursor]
  )
  let renderNodes = function () {
    return React.createElement(
      'span',
      {
        style: {
          whiteSpace: 'nowrap',
        },
      },
      React.createElement(NodeTitleWidget, { node: firstNode }),
      movingNodes.length > 1 ? '...' : ''
    )
  }
  if (!firstNode) return null
  return cursor.status === CursorStatus.Dragging
    ? React.createElement('div', { ref: ref, className: prefix }, renderNodes())
    : null
})
GhostWidget.displayName = 'GhostWidget'
