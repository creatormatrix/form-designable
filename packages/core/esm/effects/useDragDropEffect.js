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
let __spreadArray =
  (this && this.__spreadArray) ||
  function (to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i)
          ar[i] = from[i]
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from))
  }
import {
  ClosestPosition,
  CursorType,
  CursorDragType,
  TreeNode,
} from '../models'
import {
  DragStartEvent,
  DragMoveEvent,
  DragStopEvent,
  ViewportScrollEvent,
} from '../events'
import { Point } from '@designable/shared'
export var useDragDropEffect = function (engine) {
  engine.subscribeTo(DragStartEvent, function (event) {
    if (engine.cursor.type !== CursorType.Normal) return
    let target = event.data.target
    let el =
      target === null || target === void 0
        ? void 0
        : target.closest(
            '\n       *['
              .concat(engine.props.nodeIdAttrName, '],\n       *[')
              .concat(engine.props.sourceIdAttrName, '],\n       *[')
              .concat(engine.props.outlineNodeIdAttrName, ']\n      ')
          )
    let handler =
      target === null || target === void 0
        ? void 0
        : target.closest('*['.concat(engine.props.nodeDragHandlerAttrName, ']'))
    let helper =
      handler === null || handler === void 0
        ? void 0
        : handler.closest(
            '*['.concat(engine.props.nodeSelectionIdAttrName, ']')
          )
    if (!(el === null || el === void 0 ? void 0 : el.getAttribute) && !handler)
      return
    let sourceId =
      el === null || el === void 0
        ? void 0
        : el.getAttribute(engine.props.sourceIdAttrName)
    let outlineId =
      el === null || el === void 0
        ? void 0
        : el.getAttribute(engine.props.outlineNodeIdAttrName)
    let handlerId =
      helper === null || helper === void 0
        ? void 0
        : helper.getAttribute(engine.props.nodeSelectionIdAttrName)
    let nodeId =
      el === null || el === void 0
        ? void 0
        : el.getAttribute(engine.props.nodeIdAttrName)
    engine.workbench.eachWorkspace(function (currentWorkspace) {
      let operation = currentWorkspace.operation
      let moveHelper = operation.moveHelper
      if (nodeId || outlineId || handlerId) {
        let node_1 = engine.findNodeById(outlineId || nodeId || handlerId)
        if (node_1) {
          if (!node_1.allowDrag()) return
          if (node_1 === node_1.root) return
          let validSelected = engine
            .getAllSelectedNodes()
            .filter(function (node) {
              return node.allowDrag()
            })
          if (
            validSelected.some(function (selectNode) {
              return selectNode === node_1
            })
          ) {
            moveHelper.dragStart({ dragNodes: TreeNode.sort(validSelected) })
          } else {
            moveHelper.dragStart({ dragNodes: [node_1] })
          }
        }
      } else if (sourceId) {
        let sourceNode = engine.findNodeById(sourceId)
        if (sourceNode) {
          moveHelper.dragStart({ dragNodes: [sourceNode] })
        }
      }
    })
    engine.cursor.setStyle('move')
  })
  engine.subscribeTo(DragMoveEvent, function (event) {
    if (engine.cursor.type !== CursorType.Normal) return
    if (engine.cursor.dragType !== CursorDragType.Move) return
    let target = event.data.target
    let el =
      target === null || target === void 0
        ? void 0
        : target.closest(
            '\n      *['
              .concat(engine.props.nodeIdAttrName, '],\n      *[')
              .concat(engine.props.outlineNodeIdAttrName, ']\n    ')
          )
    let point = new Point(event.data.topClientX, event.data.topClientY)
    let nodeId =
      el === null || el === void 0
        ? void 0
        : el.getAttribute(engine.props.nodeIdAttrName)
    let outlineId =
      el === null || el === void 0
        ? void 0
        : el.getAttribute(engine.props.outlineNodeIdAttrName)
    engine.workbench.eachWorkspace(function (currentWorkspace) {
      let operation = currentWorkspace.operation
      let moveHelper = operation.moveHelper
      let dragNodes = moveHelper.dragNodes
      let tree = operation.tree
      if (!dragNodes.length) return
      let touchNode = tree.findById(outlineId || nodeId)
      moveHelper.dragMove({
        point: point,
        touchNode: touchNode,
      })
    })
  })
  engine.subscribeTo(ViewportScrollEvent, function (event) {
    let _a, _b
    if (engine.cursor.type !== CursorType.Normal) return
    if (engine.cursor.dragType !== CursorDragType.Move) return
    let point = new Point(
      engine.cursor.position.topClientX,
      engine.cursor.position.topClientY
    )
    let currentWorkspace =
      (_b =
        (_a = event === null || event === void 0 ? void 0 : event.context) ===
          null || _a === void 0
          ? void 0
          : _a.workspace) !== null && _b !== void 0
        ? _b
        : engine.workbench.activeWorkspace
    if (!currentWorkspace) return
    let operation = currentWorkspace.operation
    let moveHelper = operation.moveHelper
    if (!moveHelper.dragNodes.length) return
    let tree = operation.tree
    let viewport = currentWorkspace.viewport
    let outline = currentWorkspace.outline
    let viewportTarget = viewport.elementFromPoint(point)
    let outlineTarget = outline.elementFromPoint(point)
    let viewportNodeElement =
      viewportTarget === null || viewportTarget === void 0
        ? void 0
        : viewportTarget.closest(
            '\n      *['
              .concat(engine.props.nodeIdAttrName, '],\n      *[')
              .concat(engine.props.outlineNodeIdAttrName, ']\n    ')
          )
    let outlineNodeElement =
      outlineTarget === null || outlineTarget === void 0
        ? void 0
        : outlineTarget.closest(
            '\n    *['
              .concat(engine.props.nodeIdAttrName, '],\n    *[')
              .concat(engine.props.outlineNodeIdAttrName, ']\n  ')
          )
    let nodeId =
      viewportNodeElement === null || viewportNodeElement === void 0
        ? void 0
        : viewportNodeElement.getAttribute(engine.props.nodeIdAttrName)
    let outlineNodeId =
      outlineNodeElement === null || outlineNodeElement === void 0
        ? void 0
        : outlineNodeElement.getAttribute(engine.props.outlineNodeIdAttrName)
    let touchNode = tree.findById(outlineNodeId || nodeId)
    moveHelper.dragMove({ point: point, touchNode: touchNode })
  })
  engine.subscribeTo(DragStopEvent, function () {
    if (engine.cursor.type !== CursorType.Normal) return
    if (engine.cursor.dragType !== CursorDragType.Move) return
    engine.workbench.eachWorkspace(function (currentWorkspace) {
      let operation = currentWorkspace.operation
      let moveHelper = operation.moveHelper
      let dragNodes = moveHelper.dragNodes
      let closestNode = moveHelper.closestNode
      let closestDirection = moveHelper.closestDirection
      let selection = operation.selection
      if (!dragNodes.length) return
      if (dragNodes.length && closestNode && closestDirection) {
        if (
          closestDirection === ClosestPosition.After ||
          closestDirection === ClosestPosition.Under
        ) {
          if (closestNode.allowSibling(dragNodes)) {
            selection.batchSafeSelect(
              closestNode.insertAfter.apply(
                closestNode,
                __spreadArray(
                  [],
                  __read(
                    TreeNode.filterDroppable(dragNodes, closestNode.parent)
                  ),
                  false
                )
              )
            )
          }
        } else if (
          closestDirection === ClosestPosition.Before ||
          closestDirection === ClosestPosition.Upper
        ) {
          if (closestNode.allowSibling(dragNodes)) {
            selection.batchSafeSelect(
              closestNode.insertBefore.apply(
                closestNode,
                __spreadArray(
                  [],
                  __read(
                    TreeNode.filterDroppable(dragNodes, closestNode.parent)
                  ),
                  false
                )
              )
            )
          }
        } else if (
          closestDirection === ClosestPosition.Inner ||
          closestDirection === ClosestPosition.InnerAfter
        ) {
          if (closestNode.allowAppend(dragNodes)) {
            selection.batchSafeSelect(
              closestNode.append.apply(
                closestNode,
                __spreadArray(
                  [],
                  __read(TreeNode.filterDroppable(dragNodes, closestNode)),
                  false
                )
              )
            )
            moveHelper.dragDrop({ dropNode: closestNode })
          }
        } else if (closestDirection === ClosestPosition.InnerBefore) {
          if (closestNode.allowAppend(dragNodes)) {
            selection.batchSafeSelect(
              closestNode.prepend.apply(
                closestNode,
                __spreadArray(
                  [],
                  __read(TreeNode.filterDroppable(dragNodes, closestNode)),
                  false
                )
              )
            )
            moveHelper.dragDrop({ dropNode: closestNode })
          }
        }
      }
      moveHelper.dragEnd()
    })
    engine.cursor.setStyle('')
  })
}
