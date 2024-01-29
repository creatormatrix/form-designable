import { CursorStatus } from '../models'
import { MouseClickEvent } from '../events'
import { KeyCode, Point } from '@designable/shared'
export var useSelectionEffect = function (engine) {
  engine.subscribeTo(MouseClickEvent, function (event) {
    let _a, _b, _c, _d
    if (engine.cursor.status !== CursorStatus.Normal) return
    let target = event.data.target
    let el =
      (_a = target === null || target === void 0 ? void 0 : target.closest) ===
        null || _a === void 0
        ? void 0
        : _a.call(
            target,
            '\n      *['
              .concat(engine.props.nodeIdAttrName, '],\n      *[')
              .concat(engine.props.outlineNodeIdAttrName, ']\n    ')
          )
    let isHelpers =
      (_b = target === null || target === void 0 ? void 0 : target.closest) ===
        null || _b === void 0
        ? void 0
        : _b.call(
            target,
            '*['.concat(engine.props.nodeSelectionIdAttrName, ']')
          )
    let currentWorkspace =
      (_d =
        (_c = event.context) === null || _c === void 0
          ? void 0
          : _c.workspace) !== null && _d !== void 0
        ? _d
        : engine.workbench.activeWorkspace
    if (!currentWorkspace) return
    if (!(el === null || el === void 0 ? void 0 : el.getAttribute)) {
      let point = new Point(event.data.topClientX, event.data.topClientY)
      let operation_1 = currentWorkspace.operation
      let viewport = currentWorkspace.viewport
      let outline = currentWorkspace.outline
      let isInViewport = viewport.isPointInViewport(point, false)
      let isInOutline = outline.isPointInViewport(point, false)
      if (isHelpers) return
      if (isInViewport || isInOutline) {
        let selection_1 = operation_1.selection
        let tree_1 = operation_1.tree
        selection_1.select(tree_1)
      }
      return
    }
    let nodeId = el.getAttribute(engine.props.nodeIdAttrName)
    let structNodeId = el.getAttribute(engine.props.outlineNodeIdAttrName)
    let operation = currentWorkspace.operation
    let selection = operation.selection
    let tree = operation.tree
    let node = tree.findById(nodeId || structNodeId)
    if (node) {
      engine.keyboard.requestClean()
      if (
        engine.keyboard.isKeyDown(KeyCode.Meta) ||
        engine.keyboard.isKeyDown(KeyCode.Control)
      ) {
        if (selection.has(node)) {
          if (selection.selected.length > 1) {
            selection.remove(node)
          }
        } else {
          selection.add(node)
        }
      } else if (engine.keyboard.isKeyDown(KeyCode.Shift)) {
        if (selection.has(node)) {
          if (selection.selected.length > 1) {
            selection.remove(node)
          }
        } else {
          selection.crossAddTo(node)
        }
      } else {
        selection.select(node)
      }
    } else {
      selection.select(tree)
    }
  })
}
