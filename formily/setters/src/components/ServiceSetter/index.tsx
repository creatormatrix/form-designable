import { Button } from 'antd'
import React, { Fragment } from 'react'

export interface IServiceSetterProps {
  className?: string
  style?: React.CSSProperties
  onChange?: (v: any) => void
  value?: any
  children?: React.ReactNode
}

export const ServiceSetter: React.FC<IServiceSetterProps> = (props) => {
  const { value, onChange } = props
  const listenerMessage = (event: MessageEvent) => {
    const data = event.data || {}
    if (data?.name === 'ServiceSetter' && data.type === 'component') {
      if (!data?.open && data.value !== undefined) {
        onChange(data.value)
      }
      // 只要关闭就删除监听
      if (!data?.open) {
        window.removeEventListener('message', listenerMessage)
      }
    }
  }
  const openModal = () => {
    window.postMessage({
      name: 'ServiceSetter',
      open: true,
      value,
      type: 'proxy',
    })
    window.addEventListener('message', listenerMessage)
  }
  return (
    <Fragment>
      {props.children &&
        React.Children.map(props.children as any, (child: React.ReactElement) =>
          React.cloneElement(child, { onClick: openModal })
        )}
      {!props.children && (
        <Button block onClick={openModal}>
          服务编排
        </Button>
      )}
    </Fragment>
  )
}
