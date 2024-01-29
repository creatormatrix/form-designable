import { CursorDragType } from '../models'
import { DragStartEvent, DragMoveEvent, DragStopEvent } from '../events'
export var useTranslateEffect = function (engine) {
  engine.subscribeTo(DragStartEvent, function (event) {
    let _a, _b
    let target = event.data.target
    let currentWorkspace =
      (_b =
        (_a = event.context) === null || _a === void 0
          ? void 0
          : _a.workspace) !== null && _b !== void 0
        ? _b
        : engine.workbench.activeWorkspace
    let handler =
      target === null || target === void 0
        ? void 0
        : target.closest('*['.concat(engine.props.nodeTranslateAttrName, ']'))
    if (!currentWorkspace) return
    let helper = currentWorkspace.operation.transformHelper
    if (handler) {
      let type = handler.getAttribute(engine.props.nodeTranslateAttrName)
      if (type) {
        let selectionElement = handler.closest(
          '*['.concat(engine.props.nodeSelectionIdAttrName, ']')
        )
        if (selectionElement) {
          let nodeId = selectionElement.getAttribute(
            engine.props.nodeSelectionIdAttrName
          )
          if (nodeId) {
            let node = engine.findNodeById(nodeId)
            if (node) {
              helper.dragStart({ dragNodes: [node], type: 'translate' })
            }
          }
        }
      }
    }
  })
  engine.subscribeTo(DragMoveEvent, function (event) {
    let _a, _b
    if (engine.cursor.dragType !== CursorDragType.Translate) return
    let currentWorkspace =
      (_b =
        (_a = event.context) === null || _a === void 0
          ? void 0
          : _a.workspace) !== null && _b !== void 0
        ? _b
        : engine.workbench.activeWorkspace
    let helper =
      currentWorkspace === null || currentWorkspace === void 0
        ? void 0
        : currentWorkspace.operation.transformHelper
    let dragNodes = helper.dragNodes
    if (!dragNodes.length) return
    helper.dragMove()
    dragNodes.forEach(function (node) {
      let element = node.getElement()
      helper.translate(node, function (translate) {
        element.style.position = 'absolute'
        element.style.left = '0px'
        element.style.top = '0px'
        element.style.transform = 'translate3d('
          .concat(translate.x, 'px,')
          .concat(translate.y, 'px,0)')
      })
    })
  })
  engine.subscribeTo(DragStopEvent, function (event) {
    let _a, _b
    if (engine.cursor.dragType !== CursorDragType.Translate) return
    let currentWorkspace =
      (_b =
        (_a = event.context) === null || _a === void 0
          ? void 0
          : _a.workspace) !== null && _b !== void 0
        ? _b
        : engine.workbench.activeWorkspace
    let helper =
      currentWorkspace === null || currentWorkspace === void 0
        ? void 0
        : currentWorkspace.operation.transformHelper
    if (helper) {
      helper.dragEnd()
    }
  })
}
