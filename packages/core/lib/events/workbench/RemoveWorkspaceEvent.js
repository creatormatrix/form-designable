'use strict'
var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b
          }) ||
        function (d, b) {
          for (var p in b)
            if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]
        }
      return extendStatics(d, b)
    }
    return function (d, b) {
      if (typeof b !== 'function' && b !== null)
        throw new TypeError(
          'Class extends value ' + String(b) + ' is not a constructor or null'
        )
      extendStatics(d, b)
      function __() {
        this.constructor = d
      }
      d.prototype =
        b === null ? Object.create(b) : ((__.prototype = b.prototype), new __())
    }
  })()
Object.defineProperty(exports, '__esModule', { value: true })
exports.RemoveWorkspaceEvent = void 0
var AbstractWorkspaceEvent_1 = require('./AbstractWorkspaceEvent')
var RemoveWorkspaceEvent = /** @class */ (function (_super) {
  __extends(RemoveWorkspaceEvent, _super)
  function RemoveWorkspaceEvent() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this
    _this.type = 'remove:workspace'
    return _this
  }
  return RemoveWorkspaceEvent
})(AbstractWorkspaceEvent_1.AbstractWorkspaceEvent)
exports.RemoveWorkspaceEvent = RemoveWorkspaceEvent