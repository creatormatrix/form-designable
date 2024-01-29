import { useDesigner } from './useDesigner'
export var useCursor = function () {
  let designer = useDesigner()
  return designer.cursor
}
