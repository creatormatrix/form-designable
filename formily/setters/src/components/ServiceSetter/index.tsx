import { Form, FormItem } from '@formily/antd'
import { createForm } from '@formily/core'
import { createSchemaField } from '@formily/react'
import { clone } from '@formily/shared'
import { Button, Input, Modal } from 'antd'
import React, { Fragment, useMemo, useState } from 'react'

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
export const ServiceSetter: React.FC<IServiceSetterProps> = (props) => {
  const { value, onChange } = props
  const [modalVisible, setModalVisible] = useState(false)
  const form = useMemo(() => {
    return createForm({
      values: { textarea: clone(value) },
    })
  }, [modalVisible, value])
  const openModal = () => setModalVisible(true)
  const closeModal = () => setModalVisible(false)
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
      <Modal
        title={'服务编排'}
        width="600px"
        bodyStyle={{ padding: 10 }}
        visible={modalVisible}
        onCancel={closeModal}
        onOk={() => {
          onChange?.(
            form.submit((values) => {
              let v = undefined
              if (values.textarea) {
                try {
                  v = JSON.parse(values.textarea)
                } catch (e) {}
              }
              props.onChange?.(v)
            })
          )
          closeModal()
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
