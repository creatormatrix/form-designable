import { useSelected } from './useSelected'
import { useTree } from './useTree'
export var useSelectedNode = function (workspaceId) {
  let _a
  let selected = useSelected(workspaceId)
  let tree = useTree(workspaceId)
  return (_a = tree === null || tree === void 0 ? void 0 : tree.findById) ===
    null || _a === void 0
    ? void 0
    : _a.call(tree, selected[0])
}
/**
 * @deprecated
 * please use useSelectedNode
 */
export var useCurrentNode = useSelectedNode
