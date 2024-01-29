import { useWorkspace } from './useWorkspace'
export var useViewport = function (workspaceId) {
  let workspace = useWorkspace(workspaceId)
  return workspace === null || workspace === void 0
    ? void 0
    : workspace.viewport
}
