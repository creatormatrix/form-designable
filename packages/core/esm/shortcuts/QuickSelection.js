import { KeyCode, Shortcut } from '../models'
var findBottomLastChild = function (node) {
  if (!node) return node
  if (node.lastChild) {
    return findBottomLastChild(node.lastChild)
  }
  return node
}
var findTopParentNext = function (node) {
  let _a
  if (!node.parent) return node
  if ((_a = node.parent) === null || _a === void 0 ? void 0 : _a.next)
    return node.parent.next
  return findTopParentNext(node.parent)
}
export var SelectPrevNode = new Shortcut({
  codes: [
    [KeyCode.Up],
    [KeyCode.PageUp],
    [KeyCode.ArrowUp],
    [KeyCode.Left],
    [KeyCode.LeftWindowKey],
    [KeyCode.ArrowLeft],
  ],
  handler: function (context) {
    let operation =
      context === null || context === void 0
        ? void 0
        : context.workspace.operation
    if (operation) {
      let tree = operation.tree
      let selection = operation.selection
      let selectedNode = tree.findById(selection.last)
      if (selectedNode) {
        let previousNode = selectedNode.previous
        if (previousNode) {
          var bottom = findBottomLastChild(previousNode)
          if (bottom) {
            selection.select(bottom)
          } else {
            selection.select(previousNode)
          }
        } else if (selectedNode.parent) {
          selection.select(selectedNode.parent)
        } else {
          var bottom = findBottomLastChild(selectedNode.lastChild)
          if (bottom) {
            selection.select(bottom)
          }
        }
      }
    }
  },
})
export var SelectNextNode = new Shortcut({
  codes: [
    [KeyCode.Down],
    [KeyCode.PageDown],
    [KeyCode.ArrowDown],
    [KeyCode.Right],
    [KeyCode.RightWindowKey],
    [KeyCode.ArrowRight],
  ],
  handler: function (context) {
    let operation =
      context === null || context === void 0
        ? void 0
        : context.workspace.operation
    if (operation) {
      let tree = operation.tree
      let selection = operation.selection
      let selectedNode = tree.findById(selection.last)
      if (selectedNode) {
        let nextNode = selectedNode.firstChild
          ? selectedNode.firstChild
          : selectedNode.next
        if (nextNode) {
          selection.select(nextNode)
        } else {
          selection.select(findTopParentNext(selectedNode))
        }
      }
    }
  },
})
