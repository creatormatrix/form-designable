import React from 'react'
import {
  CollapseProps,
  PanelProps as CollapsePanelProps,
} from '@alifd/next/types/collapse'
import { DnFC } from '@designable/react'
export declare const FormCollapse: DnFC<CollapseProps> & {
  CollapsePanel?: React.FC<CollapsePanelProps>
}
