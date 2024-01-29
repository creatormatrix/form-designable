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
import { DragStopEvent } from '../events'
import { CursorType, CursorDragType } from '../models'
import {
  calcRectByStartEndPoint,
  isCrossRectInRect,
  isRectInRect,
  Point,
} from '@designable/shared'
export var useFreeSelectionEffect = function (engine) {
  engine.subscribeTo(DragStopEvent, function (event) {
    if (engine.cursor.dragType !== CursorDragType.Move) {
      return
    }
    engine.workbench.eachWorkspace(function (workspace) {
      let viewport = workspace.viewport
      let dragEndPoint = new Point(event.data.topClientX, event.data.topClientY)
      let dragStartOffsetPoint = viewport.getOffsetPoint(
        new Point(
          engine.cursor.dragStartPosition.topClientX,
          engine.cursor.dragStartPosition.topClientY
        )
      )
      let dragEndOffsetPoint = viewport.getOffsetPoint(
        new Point(
          engine.cursor.position.topClientX,
          engine.cursor.position.topClientY
        )
      )
      if (!viewport.isPointInViewport(dragEndPoint, false)) return
      let tree = workspace.operation.tree
      let selectionRect = calcRectByStartEndPoint(
        dragStartOffsetPoint,
        dragEndOffsetPoint,
        viewport.dragScrollXDelta,
        viewport.dragScrollYDelta
      )
      let selected = []
      tree.eachChildren(function (node) {
        let nodeRect = viewport.getValidNodeOffsetRect(node)
        if (nodeRect && isCrossRectInRect(selectionRect, nodeRect)) {
          selected.push([node, nodeRect])
        }
      })
      let selectedNodes = selected.reduce(function (buf, _a) {
        let _b = __read(_a, 2),
          node = _b[0],
          nodeRect = _b[1]
        if (isRectInRect(nodeRect, selectionRect)) {
          if (
            selected.some(function (_a) {
              let _b = __read(_a, 1),
                selectNode = _b[0]
              return selectNode.isMyParents(node)
            })
          ) {
            return buf
          }
        }
        return buf.concat(node)
      }, [])
      workspace.operation.selection.batchSafeSelect(selectedNodes)
    })
    if (engine.cursor.type === CursorType.Selection) {
      engine.cursor.setType(CursorType.Normal)
    }
  })
}
