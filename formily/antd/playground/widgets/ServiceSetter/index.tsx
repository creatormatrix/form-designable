import { Form, FormItem } from '@formily/antd'
import { createForm } from '@formily/core'
import { createSchemaField } from '@formily/react'
import { clone } from '@formily/shared'
import { Input, Modal } from 'antd'
import React, { Fragment, useEffect, useMemo, useState } from 'react'

export interface IServiceSetterProps {
  className?: string
  style?: React.CSSProperties
  onChange?: (v: any) => void
  value?: any
  children?: React.ReactNode
}
const SchemaField = createSchemaField({
  components: {
    Input,
    FormItem,
  },
})

const serviceExample = `
{
  "name": "getOperator",
  "title": "获取操作员列表",
  "returns": {
    "name": "backUser",
    "dataType": "enum",
    "title": "操作员"
  }
}
`
export const ServiceSetter: React.FC<any> = () => {
  const [value, setValue] = useState()
  const [modalVisible, setModalVisible] = useState(false)
  const form = useMemo(() => {
    return createForm({
      values: { textarea: clone(value) },
    })
  }, [modalVisible, value])
  const closeModal = (value) => {
    window.postMessage(
      { name: 'ServiceSetter', open: false, value, type: 'component' },
      '*'
    )
    setModalVisible(false)
  }
  useEffect(() => {
    const listenerMessage = (event) => {
      if (event.data?.name === 'ServiceSetter' && event.data.type === 'proxy') {
        if (event.data?.open) {
          setValue(event.data.value)
          setModalVisible(true)
        }
      }
    }
    window.addEventListener('message', listenerMessage)
    return () => {
      window.removeEventListener('message', listenerMessage)
    }
  }, [])
  return (
    <Fragment>
      <Modal
        title={'服务编排'}
        width="600px"
        bodyStyle={{ padding: 10 }}
        visible={modalVisible}
        onCancel={() => closeModal(undefined)}
        onOk={() => {
          form.submit((values) => {
            let v = undefined
            if (values.textarea) {
              try {
                v = JSON.parse(values.textarea)
              } catch (e) {}
            }
            closeModal(v)
          })
        }}
      >
        <Form form={form}>
          <SchemaField>
            <SchemaField.String
              name="textarea"
              title="协议"
              x-decorator="FormItem"
              required
              x-component="Input.TextArea"
              description={
                <pre>
                  例子:
                  {serviceExample}
                </pre>
              }
              x-component-props={{
                style: {
                  width: '100%',
                },
                rows: 6,
              }}
            />
          </SchemaField>
        </Form>
      </Modal>
    </Fragment>
  )
}
