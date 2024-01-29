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
import React, { useRef } from 'react'
import { observer } from '@formily/reactive-react'
import {
  DragStartEvent,
  DragMoveEvent,
  DragStopEvent,
  CursorDragType,
} from '@designable/core'
import {
  calcSpeedFactor,
  createUniformSpeedAnimation,
} from '@designable/shared'
import { useScreen, useDesigner, usePrefix } from '../../hooks'
import { IconWidget } from '../../widgets'
import { ResizeHandle, ResizeHandleType } from './handle'
import cls from 'classnames'
import './styles.less'
let useResizeEffect = function (container, content, engine) {
  let status = null
  let startX = 0
  let startY = 0
  let startWidth = 0
  let startHeight = 0
  let animationX = null
  let animationY = null
  let getStyle = function (status) {
    if (status === ResizeHandleType.Resize) return 'nwse-resize'
    if (status === ResizeHandleType.ResizeHeight) return 'ns-resize'
    if (status === ResizeHandleType.ResizeWidth) return 'ew-resize'
  }
  let updateSize = function (deltaX, deltaY) {
    let _a
    let containerRect =
      (_a = container.current) === null || _a === void 0
        ? void 0
        : _a.getBoundingClientRect()
    if (status === ResizeHandleType.Resize) {
      engine.screen.setSize(startWidth + deltaX, startHeight + deltaY)
      container.current.scrollBy(
        containerRect.width + deltaX,
        containerRect.height + deltaY
      )
    } else if (status === ResizeHandleType.ResizeHeight) {
      engine.screen.setSize(startWidth, startHeight + deltaY)
      container.current.scrollBy(
        container.current.scrollLeft,
        containerRect.height + deltaY
      )
    } else if (status === ResizeHandleType.ResizeWidth) {
      engine.screen.setSize(startWidth + deltaX, startHeight)
      container.current.scrollBy(
        containerRect.width + deltaX,
        container.current.scrollTop
      )
    }
  }
  engine.subscribeTo(DragStartEvent, function (e) {
    let _a, _b
    if (
      !((_a = engine.workbench.currentWorkspace) === null || _a === void 0
        ? void 0
        : _a.viewport)
    )
      return
    let target = e.data.target
    if (
      target === null || target === void 0
        ? void 0
        : target.closest(
            '*['.concat(engine.props.screenResizeHandlerAttrName, ']')
          )
    ) {
      let rect =
        (_b = content.current) === null || _b === void 0
          ? void 0
          : _b.getBoundingClientRect()
      if (!rect) return
      status = target.getAttribute(engine.props.screenResizeHandlerAttrName)
      engine.cursor.setStyle(getStyle(status))
      startX = e.data.topClientX
      startY = e.data.topClientY
      startWidth = rect.width
      startHeight = rect.height
      engine.cursor.setDragType(CursorDragType.Resize)
    }
  })
  engine.subscribeTo(DragMoveEvent, function (e) {
    let _a, _b
    if (
      !((_a = engine.workbench.currentWorkspace) === null || _a === void 0
        ? void 0
        : _a.viewport)
    )
      return
    if (!status) return
    let deltaX = e.data.topClientX - startX
    let deltaY = e.data.topClientY - startY
    let containerRect =
      (_b = container.current) === null || _b === void 0
        ? void 0
        : _b.getBoundingClientRect()
    let distanceX = Math.floor(containerRect.right - e.data.topClientX)
    let distanceY = Math.floor(containerRect.bottom - e.data.topClientY)
    let factorX = calcSpeedFactor(distanceX, 10)
    let factorY = calcSpeedFactor(distanceY, 10)
    updateSize(deltaX, deltaY)
    if (distanceX <= 10) {
      if (!animationX) {
        animationX = createUniformSpeedAnimation(
          1000 * factorX,
          function (delta) {
            updateSize(deltaX + delta, deltaY)
          }
        )
      }
    } else {
      if (animationX) {
        animationX = animationX()
      }
    }
    if (distanceY <= 10) {
      if (!animationY) {
        animationY = createUniformSpeedAnimation(
          300 * factorY,
          function (delta) {
            updateSize(deltaX, deltaY + delta)
          }
        )
      }
    } else {
      if (animationY) {
        animationY = animationY()
      }
    }
  })
  engine.subscribeTo(DragStopEvent, function () {
    if (!status) return
    status = null
    engine.cursor.setStyle('')
    engine.cursor.setDragType(CursorDragType.Move)
    if (animationX) {
      animationX = animationX()
    }
    if (animationY) {
      animationY = animationY()
    }
  })
}
export var ResponsiveSimulator = observer(function (props) {
  let container = useRef()
  let content = useRef()
  let prefix = usePrefix('responsive-simulator')
  let screen = useScreen()
  useDesigner(function (engine) {
    useResizeEffect(container, content, engine)
  })
  return React.createElement(
    'div',
    __assign({}, props, {
      className: cls(prefix, props.className),
      style: __assign(
        { height: '100%', width: '100%', minHeight: 100, position: 'relative' },
        props.style
      ),
    }),
    React.createElement(
      'div',
      {
        ref: container,
        style: {
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
          overflow: 'overlay',
        },
      },
      React.createElement(
        'div',
        {
          ref: content,
          style: {
            width: screen.width,
            height: screen.height,
            paddingRight: 15,
            paddingBottom: 15,
            position: 'relative',
            boxSizing: 'border-box',
            overflow: 'hidden',
          },
        },
        props.children,
        React.createElement(
          ResizeHandle,
          { type: ResizeHandleType.Resize },
          React.createElement(IconWidget, {
            infer: 'DragMove',
            style: { pointerEvents: 'none' },
          })
        ),
        React.createElement(
          ResizeHandle,
          { type: ResizeHandleType.ResizeHeight },
          React.createElement(IconWidget, {
            infer: 'Menu',
            style: { pointerEvents: 'none' },
          })
        ),
        React.createElement(
          ResizeHandle,
          { type: ResizeHandleType.ResizeWidth },
          React.createElement(IconWidget, {
            infer: 'Menu',
            style: { pointerEvents: 'none' },
          })
        )
      )
    )
  )
})
