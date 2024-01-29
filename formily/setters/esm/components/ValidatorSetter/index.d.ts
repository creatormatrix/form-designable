import React from 'react'
import '../../locales'
export interface IValidatorSetterProps {
  value?: any
  onChange?: (value: any) => void
  independence?: boolean
}
export declare const ValidatorSetter: React.FC<IValidatorSetterProps>
