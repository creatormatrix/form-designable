var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i]
          for (let p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p]
        }
        return t
      }
    return __assign.apply(this, arguments)
  }
import {
  calcExtendsLineSegmentOfRect,
  calcDistanceOfSnapLineToEdges,
  LineSegment,
  Rect,
} from '@designable/shared'
import { SnapLine } from './SnapLine'
import { TransformHelper } from './TransformHelper'
let SpaceBlock = /** @class */ (function () {
  function SpaceBlock(helper, box) {
    this.helper = helper
    this.distance = box.distance
    this.refer = box.refer
    this.rect = box.rect
    this.type = box.type
  }
  Object.defineProperty(SpaceBlock.prototype, 'referRect', {
    get: function () {
      if (!this.refer) return
      return this.helper.getNodeRect(this.refer)
    },
    enumerable: false,
    configurable: true,
  })
  Object.defineProperty(SpaceBlock.prototype, 'id', {
    get: function () {
      let _a
      return (_a = this._id) !== null && _a !== void 0
        ? _a
        : ''
            .concat(this.rect.x, '-')
            .concat(this.rect.y, '-')
            .concat(this.rect.width, '-')
            .concat(this.rect.height)
    },
    enumerable: false,
    configurable: true,
  })
  Object.defineProperty(SpaceBlock.prototype, 'next', {
    get: function () {
      let spaceBlock = this.helper.calcAroundSpaceBlocks(this.referRect)
      return spaceBlock[this.type]
    },
    enumerable: false,
    configurable: true,
  })
  Object.defineProperty(SpaceBlock.prototype, 'extendsLine', {
    get: function () {
      if (!this.needExtendsLine) return
      let dragNodesRect = this.helper.dragNodesRect
      return calcExtendsLineSegmentOfRect(dragNodesRect, this.referRect)
    },
    enumerable: false,
    configurable: true,
  })
  Object.defineProperty(SpaceBlock.prototype, 'needExtendsLine', {
    get: function () {
      let targetRect = this.crossDragNodesRect
      let referRect = this.crossReferRect
      if (this.type === 'top' || this.type === 'bottom') {
        let rightDelta = referRect.right - targetRect.left
        let leftDelta = targetRect.right - referRect.left
        return (
          rightDelta < targetRect.width / 2 || leftDelta < targetRect.width / 2
        )
      } else {
        let topDelta = targetRect.bottom - referRect.top
        let bottomDelta = referRect.bottom - targetRect.top
        return (
          topDelta < targetRect.height / 2 ||
          bottomDelta < targetRect.height / 2
        )
      }
      return true
    },
    enumerable: false,
    configurable: true,
  })
  Object.defineProperty(SpaceBlock.prototype, 'crossReferRect', {
    get: function () {
      let referRect = this.referRect
      if (this.type === 'top' || this.type === 'bottom') {
        return new Rect(
          referRect.x,
          this.rect.y,
          referRect.width,
          this.rect.height
        )
      } else {
        return new Rect(
          this.rect.x,
          referRect.y,
          this.rect.width,
          referRect.height
        )
      }
    },
    enumerable: false,
    configurable: true,
  })
  Object.defineProperty(SpaceBlock.prototype, 'crossDragNodesRect', {
    get: function () {
      let dragNodesRect = this.helper.dragNodesRect
      if (this.type === 'top' || this.type === 'bottom') {
        return new Rect(
          dragNodesRect.x,
          this.rect.y,
          dragNodesRect.width,
          this.rect.height
        )
      } else {
        return new Rect(
          this.rect.x,
          dragNodesRect.y,
          this.rect.width,
          dragNodesRect.height
        )
      }
    },
    enumerable: false,
    configurable: true,
  })
  Object.defineProperty(SpaceBlock.prototype, 'isometrics', {
    get: function () {
      let results = []
      let spaceBlock = this
      while ((spaceBlock = spaceBlock.next)) {
        if (
          Math.abs(spaceBlock.distance - this.distance) <
          TransformHelper.threshold
        ) {
          if (
            results.some(function (box) {
              return box.distance !== spaceBlock.distance
            })
          )
            continue
          results.push(spaceBlock)
        }
      }
      return results
    },
    enumerable: false,
    configurable: true,
  })
  Object.defineProperty(SpaceBlock.prototype, 'snapLine', {
    get: function () {
      if (!this.isometrics.length) return
      let nextRect = this.next.rect
      let referRect = this.referRect
      let line
      if (this.type === 'top') {
        line = new LineSegment(
          {
            x: nextRect.left,
            y: referRect.bottom + nextRect.height,
          },
          {
            x: nextRect.right,
            y: referRect.bottom + nextRect.height,
          }
        )
      } else if (this.type === 'bottom') {
        line = new LineSegment(
          {
            x: nextRect.left,
            y: referRect.top - nextRect.height,
          },
          {
            x: nextRect.right,
            y: referRect.top - nextRect.height,
          }
        )
      } else if (this.type === 'left') {
        line = new LineSegment(
          {
            x: referRect.right + nextRect.width,
            y: nextRect.top,
          },
          {
            x: referRect.right + nextRect.width,
            y: nextRect.bottom,
          }
        )
      } else {
        line = new LineSegment(
          {
            x: referRect.left - nextRect.width,
            y: nextRect.top,
          },
          {
            x: referRect.left - nextRect.width,
            y: nextRect.bottom,
          }
        )
      }
      let distance = calcDistanceOfSnapLineToEdges(
        line,
        this.helper.dragNodesEdgeLines
      )
      return new SnapLine(
        this.helper,
        __assign(__assign({}, line), {
          distance: distance,
          type: 'space-block',
        })
      )
    },
    enumerable: false,
    configurable: true,
  })
  return SpaceBlock
})()
export { SpaceBlock }
