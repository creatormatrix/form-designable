let __extends =
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
          for (let p in b)
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
import { EventDriver, globalThisPolyfill } from '@designable/shared'
import { ViewportScrollEvent } from '../events'
let ViewportScrollDriver = /** @class */ (function (_super) {
  __extends(ViewportScrollDriver, _super)
  function ViewportScrollDriver() {
    let _this = (_super !== null && _super.apply(this, arguments)) || this
    _this.request = null
    _this.onScroll = function (e) {
      e.preventDefault()
      _this.request = globalThisPolyfill.requestAnimationFrame(function () {
        _this.dispatch(
          new ViewportScrollEvent({
            scrollX: _this.contentWindow.scrollX,
            scrollY: _this.contentWindow.scrollY,
            width: _this.contentWindow.document.body.clientWidth,
            height: _this.contentWindow.document.body.clientHeight,
            innerHeight: _this.contentWindow.innerHeight,
            innerWidth: _this.contentWindow.innerWidth,
            view: _this.contentWindow,
            target: e.target,
          })
        )
        cancelAnimationFrame(_this.request)
      })
    }
    return _this
  }
  ViewportScrollDriver.prototype.attach = function () {
    this.addEventListener('scroll', this.onScroll)
  }
  ViewportScrollDriver.prototype.detach = function () {
    this.removeEventListener('scroll', this.onScroll)
  }
  return ViewportScrollDriver
})(EventDriver)
export { ViewportScrollDriver }