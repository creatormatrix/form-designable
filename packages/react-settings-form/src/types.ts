import React from 'react'
import { Form } from '@formily/core'
import { ISchema } from '@formily/react'
export interface ISettingFormProps {
  className?: string
  style?: React.CSSProperties
  uploadAction?: string
  theme?: {
    [key: string]: {
      [key: string]: any
    }
  }
  presetColors?: string[]
  buildSchema?: (v: ISchema) => ISchema
  components?: Record<string, React.FC<any>>
  effects?: (form: Form) => void
  scope?: any
  expressions?: () => any
}
