import { ApartmentOutlined, MenuOutlined } from '@ant-design/icons'
import { IInput, createPolyInput } from '@creatormatrix/react-settings-form'
import { isEmpty } from '@formily/shared'
import { Button } from 'antd'
import React from 'react'
import { DataSourceSetter } from '../DataSourceSetter'
import { ServiceSetter } from '../ServiceSetter'
type IValueInput = Partial<IInput>

export const EnumSetter: React.FC<IValueInput> = createPolyInput([
  {
    type: 'DataSource',
    icon: <MenuOutlined />,
    component: (props: any) => {
      return (
        <DataSourceSetter {...props}>
          <Button block>静态枚举</Button>
        </DataSourceSetter>
      )
    },
    checker: (data) => {
      return data?.type === 'static' && Array.isArray(data?.value)
    },
    toInputValue: (data) => {
      return data?.value
    },
    toChangeValue: (value) => {
      if (isEmpty(value)) {
        return undefined
      }
      return {
        type: 'static',
        value,
      }
    },
  },
  {
    type: 'Service',
    icon: <ApartmentOutlined />,
    component: (props: any) => {
      return (
        <ServiceSetter {...props}>
          <Button block>服务设计</Button>
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
