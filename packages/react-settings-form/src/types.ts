import { Form } from '@formily/core'
import { ISchema } from '@formily/react'
import React from 'react'
export interface ISettingFormProps {
  className?: string
  style?: React.CSSProperties
  /**
   * 上传地址
   */
  uploadAction?: string
  /**
   * 通过签名取上传地址和图片地址, 配置后uploadAction失效
   */
  getUploadSignAction?: (file: File) => any
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
