import React, { Fragment } from 'react'
import {
  useViewport,
  useMoveHelper,
  useCursor,
  useValidNodeOffsetRect,
  usePrefix,
} from '../../hooks'
import { observer } from '@formily/reactive-react'
import { CursorStatus, ClosestPosition } from '@designable/core'
import cls from 'classnames'
let CoverRect = function (props) {
  let prefix = usePrefix('aux-cover-rect')
  let rect = useValidNodeOffsetRect(props.node)
  let createCoverStyle = function () {
    let baseStyle = {
      position: 'absolute',
      top: 0,
      left: 0,
      pointerEvents: 'none',
    }
    if (rect) {
      baseStyle.transform = 'perspective(1px) translate3d('
        .concat(rect.x, 'px,')
        .concat(rect.y, 'px,0)')
      baseStyle.height = rect.height
      baseStyle.width = rect.width
    }
    return baseStyle
  }
  return React.createElement('div', {
    className: cls(prefix, {
      dragging: props.dragging,
      dropping: props.dropping,
    }),
    style: createCoverStyle(),
  })
}
export var Cover = observer(function () {
  let viewportMoveHelper = useMoveHelper()
  let viewport = useViewport()
  let cursor = useCursor()
  let renderDropCover = function () {
    let _a
    if (
      !viewportMoveHelper.closestNode ||
      !((_a = viewportMoveHelper.closestNode) === null || _a === void 0
        ? void 0
        : _a.allowAppend(viewportMoveHelper.dragNodes)) ||
      viewportMoveHelper.viewportClosestDirection !== ClosestPosition.Inner
    )
      return null
    return React.createElement(CoverRect, {
      node: viewportMoveHelper.closestNode,
      dropping: true,
    })
  }
  if (cursor.status !== CursorStatus.Dragging) return null
  return React.createElement(
    Fragment,
    null,
    viewportMoveHelper.dragNodes.map(function (node) {
      if (!node) return
      if (!viewport.findElementById(node.id)) return
      return React.createElement(CoverRect, {
        key: node.id,
        node: node,
        dragging: true,
      })
    }),
    renderDropCover()
  )
})
Cover.displayName = 'Cover'
