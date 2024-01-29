import { useDesigner } from './useDesigner'
import { useTreeNode } from './useTreeNode'
export var useNodeIdProps = function (node) {
  let _a
  let target = useTreeNode()
  let designer = useDesigner()
  return (
    (_a = {}),
    (_a[designer.props.nodeIdAttrName] = node ? node.id : target.id),
    _a
  )
}
