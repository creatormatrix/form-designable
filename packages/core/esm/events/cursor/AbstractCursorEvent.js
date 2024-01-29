import { globalThisPolyfill } from '@designable/shared'
let AbstractCursorEvent = /** @class */ (function () {
  function AbstractCursorEvent(data) {
    this.data = data || {
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      target: null,
      view: globalThisPolyfill,
    }
    this.transformCoordinates()
  }
  AbstractCursorEvent.prototype.transformCoordinates = function () {
    let _a
    let frameElement = (
      ((_a = this.data) === null || _a === void 0 ? void 0 : _a.view) || {}
    ).frameElement
    if (frameElement && this.data.view !== globalThisPolyfill) {
      let frameRect = frameElement.getBoundingClientRect()
      let scale = frameRect.width / frameElement['offsetWidth']
      this.data.topClientX = this.data.clientX * scale + frameRect.x
      this.data.topClientY = this.data.clientY * scale + frameRect.y
      this.data.topPageX =
        this.data.pageX + frameRect.x - this.data.view.scrollX
      this.data.topPageY =
        this.data.pageY + frameRect.y - this.data.view.scrollY
      let topElement = document.elementFromPoint(
        this.data.topPageX,
        this.data.topClientY
      )
      if (topElement !== frameElement) {
        this.data.target = topElement
      }
    } else {
      this.data.topClientX = this.data.clientX
      this.data.topClientY = this.data.clientY
      this.data.topPageX = this.data.pageX
      this.data.topPageY = this.data.pageY
    }
  }
  return AbstractCursorEvent
})()
export { AbstractCursorEvent }
