import { CursorType, KeyCode, Shortcut } from '../models'
export var CursorSwitchSelection = new Shortcut({
  codes: [KeyCode.Shift, KeyCode.S],
  handler: function (context) {
    let engine =
      context === null || context === void 0 ? void 0 : context.engine
    if (engine) {
      engine.cursor.setType(CursorType.Selection)
    }
  },
})
