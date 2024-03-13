/*
 * 支持文本、数字、布尔、表达式
 * Todo: JSON、富文本，公式
 */
import React from 'react'
import { Input, Button, Popover, InputNumber, Select } from 'antd'
import {
  IInput,
  MonacoInput,
  createPolyInput,
} from '@creatormatrix/react-settings-form'
import { ApartmentOutlined } from '@ant-design/icons'
import { ServiceSetter } from '../ServiceSetter'
import { isEmpty } from '@formily/shared'

type Source<T = any> =
  | {
      type: 'static'
      value: T
    }
  | {
      type: 'expression'
      value: T
    }
  | {
      type: 'service'
      value: T
    }

const STARTTAG_REX =
  /<([-A-Za-z0-9_]+)((?:\s+[a-zA-Z_:][-a-zA-Z0-9_:.]*(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/

const EXPRESSION_REX = /^\{\{([\s\S]*)\}\}$/

const isNumber = (data: Source) =>
  data?.type === 'static' && typeof data.value === 'number'

const isBoolean = (data: Source) =>
  data?.type === 'static' && typeof data.value === 'boolean'

const isExpression = (data: Source<string>) => {
  return data?.type === 'expression' && typeof data.value === 'string'
}

const isRichText = (data: Source) => {
  return (
    data?.type === 'static' &&
    typeof data.value === 'string' &&
    STARTTAG_REX.test(data.value)
  )
}

const isNormalText = (data: Source) => {
  return (
    data?.type === 'static' &&
    typeof data.value === 'string' &&
    !isExpression(data) &&
    !isRichText(data)
  )
}

const takeNumber = (value: any) => {
  const num = String(value).replace(/[^\d\.]+/, '')
  if (num === '') return
  return Number(num)
}
type IValueInput = Partial<IInput>
export const ValueSetter: React.FC<IValueInput> = createPolyInput([
  {
    type: 'Text',
    icon: 'Text',
    component: Input,
    checker: isNormalText,
    toInputValue: (data) => {
      return data?.value
    },
    toChangeValue: (value) => {
      return {
        type: 'static',
        value,
      }
    },
  },
  {
    type: 'Expression',
    icon: 'Expression',
    component: (props: any) => {
      return (
        <Popover
          content={
            <div
              style={{
                width: 400,
                height: 200,
                marginLeft: -16,
                marginRight: -16,
                marginBottom: -12,
              }}
            >
              <MonacoInput {...props} language="javascript.expression" />
            </div>
          }
          trigger="click"
        >
          <Button block>{'表达式'}</Button>
        </Popover>
      )
    },
    checker: isExpression,
    toInputValue: (data) => {
      if (!data?.value || data?.value === '{{}}') return
      const matched = String(data?.value).match(EXPRESSION_REX)
      return matched?.[1] || data?.value || ''
    },
    toChangeValue: (value) => {
      if (!value || value === '{{}}') return
      const matched = String(value).match(EXPRESSION_REX)
      return {
        type: 'expression',
        value: `{{${matched?.[1] || value || ''}}}`,
      }
    },
  },
  {
    type: 'Boolean',
    icon: 'Boolean',
    component: (props: any) => (
      <Select
        {...props}
        options={[
          { label: 'True', value: true },
          { label: 'False', value: false },
        ]}
      />
    ),
    checker: isBoolean,
    toInputValue: (data) => {
      return !!data?.value
    },
    toChangeValue: (value) => {
      return {
        type: 'static',
        value: !!value,
      }
    },
  },
  {
    type: 'Number',
    icon: 'Number',
    component: InputNumber,
    checker: isNumber,
    toInputValue: (data) => takeNumber(data?.value),
    toChangeValue: (value) => ({ type: 'static', value: takeNumber(value) }),
  },
  {
    type: 'Service',
    icon: <ApartmentOutlined />,
    component: (props: any) => {
      return (
        <ServiceSetter {...props}>
          <Button block>服务编排</Button>
        </ServiceSetter>
      )
    },
    checker: (data) => {
      return data?.type === 'service'
    },
    toInputValue: (data) => {
      return JSON.stringify(data?.value, null, '  ')
    },
    toChangeValue: (value) => {
      if (isEmpty(value)) {
        return undefined
      }
      return {
        type: 'service',
        value,
      }
    },
  },
]) as any
