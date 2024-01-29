import { useLayout } from './useLayout'
export var usePrefix = function (after) {
  let _a
  if (after === void 0) {
    after = ''
  }
  return (
    ((_a = useLayout()) === null || _a === void 0 ? void 0 : _a.prefixCls) +
    after
  )
}
