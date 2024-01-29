import React from 'react'
import { IReaction } from './types'
import './declarations'
import './styles.less'
import type { DefaultOptionType } from 'antd/lib/select'
export interface IReactionsSetterProps {
  value?: IReaction
  onChange?: (value: IReaction) => void
  independence?: boolean
  outSource?: DefaultOptionType[]
}
export declare const ReactionsSetter: React.FC<IReactionsSetterProps>
