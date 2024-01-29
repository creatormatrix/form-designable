import { useDesigner } from './useDesigner'
export var useWorkbench = function () {
  let designer = useDesigner()
  return designer.workbench
}
