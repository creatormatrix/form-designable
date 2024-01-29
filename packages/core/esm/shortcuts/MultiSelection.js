import { KeyCode, Shortcut } from '../models'
export var SelectNodes = new Shortcut({
  codes: [[KeyCode.Meta], [KeyCode.Control]],
})
export var SelectSameTypeNodes = new Shortcut({
  codes: [KeyCode.Shift],
})
export var PreventCommandX = new Shortcut({
  codes: [
    [KeyCode.Meta, KeyCode.X],
    [KeyCode.Control, KeyCode.X],
  ],
})
export var SelectAllNodes = new Shortcut({
  codes: [
    [KeyCode.Meta, KeyCode.A],
    [KeyCode.Control, KeyCode.A],
  ],
  handler: function (context) {
    let operation =
      context === null || context === void 0
        ? void 0
        : context.workspace.operation
    if (operation) {
      let tree = operation.tree
      let selection = operation.selection
      selection.batchSelect(tree.descendants)
    }
  },
})
