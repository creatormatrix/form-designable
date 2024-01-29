import { GlobalRegistry, IDesignerRegistry } from '@creatormatrix/core'
import { globalThisPolyfill } from '@creatormatrix/shared'

export const useRegistry = (): IDesignerRegistry => {
  return globalThisPolyfill['__DESIGNER_REGISTRY__'] || GlobalRegistry
}
