import React from 'react'
import { ArrayField } from '@formily/core'
import {
  observer,
  useField,
  SchemaContext,
  Schema,
  ISchema,
} from '@formily/react'
import { GlobalRegistry } from '@designable/core'
import {
  ArrayItems,
  FormDialog,
  FormItem,
  FormLayout,
  Input,
  NumberPicker,
} from '@formily/antd'
import {
  DrawerSetter,
  FoldItem,
  SchemaField,
  ValueInput,
  useLocales,
} from '@designable/react-settings-form'
import { Button, Select } from 'antd'
import { DesignerLayoutContext } from '@designable/react'
import '../../locales'
import locale from '../../locales/zh-CN'
import { clone } from '@designable/shared'

export interface IValidatorSetterProps {
  value?: any
  onChange?: (value: any) => void
  independence?: boolean
}

const ValidatorSchema: ISchema = {
  type: 'array',
  items: {
    type: 'object',
    'x-decorator': 'ArrayItems.Item',
    'x-decorator-props': {
      style: {
        alignItems: 'center',
        borderRadius: 3,
        paddingTop: 6,
        paddingBottom: 6,
      },
    },
    properties: {
      sortable: {
        type: 'void',
        'x-component': 'ArrayItems.SortHandle',
        'x-component-props': { style: { marginRight: 10 } },
      },
      drawer: {
        type: 'void',
        'x-component': 'DrawerSetter',

        properties: {
          triggerType: {
            type: 'string',
            enum: ['onInput', 'onFocus', 'onBlur'],
            'x-decorator': 'FormItem',
            'x-component': 'Select',
          },
          validator: {
            type: 'string',
            'x-decorator': 'FormItem',
            'x-component': 'ValueInput',
            'x-component-props': {
              include: ['EXPRESSION'],
            },
          },
          message: {
            type: 'string',
            'x-decorator': 'FormItem',
            'x-component': 'Input.TextArea',
          },
          format: {
            type: 'string',
            'x-decorator': 'FormItem',
            'x-component': 'Select',
            'x-component-props': {
              allowClear: true,
            },
          },
          pattern: {
            type: 'string',
            'x-decorator': 'FormItem',
            'x-component': 'Input',
            'x-component-props': {
              prefix: '/',
              suffix: '/',
            },
          },
          len: {
            type: 'string',
            'x-decorator': 'FormItem',
            'x-component': 'NumberPicker',
          },
          max: {
            type: 'string',
            'x-decorator': 'FormItem',
            'x-component': 'NumberPicker',
          },
          min: {
            type: 'string',
            'x-decorator': 'FormItem',
            'x-component': 'NumberPicker',
          },
          exclusiveMaximum: {
            type: 'string',
            'x-decorator': 'FormItem',
            'x-component': 'NumberPicker',
          },
          exclusiveMinimum: {
            type: 'string',
            'x-decorator': 'FormItem',
            'x-component': 'NumberPicker',
          },
          whitespace: {
            type: 'string',
            'x-decorator': 'FormItem',
            'x-component': 'Switch',
          },
          required: {
            type: 'string',
            'x-decorator': 'FormItem',
            'x-component': 'Switch',
          },
        },
      },
      moveDown: {
        type: 'void',
        'x-component': 'ArrayItems.MoveDown',
        'x-component-props': { style: { marginLeft: 10 } },
      },
      moveUp: {
        type: 'void',
        'x-component': 'ArrayItems.MoveUp',
        'x-component-props': { style: { marginLeft: 5 } },
      },
      remove: {
        type: 'void',
        'x-component': 'ArrayItems.Remove',
        'x-component-props': { style: { marginLeft: 5 } },
      },
    },
  },
  properties: {
    addValidatorRules: {
      type: 'void',
      'x-component': 'ArrayItems.Addition',
      'x-component-props': {
        style: {
          marginBottom: 10,
        },
      },
    },
  },
}
const ValidatorSchemaIndependence: any = clone(ValidatorSchema)
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
ValidatorSchemaIndependence?.items?.properties?.drawer['x-component-props'] = {
  wrapperClassName: 'validator-setter-dialog',
}
const ValidatorSetterItem: React.FC<IValidatorSetterProps> = (props) => {
  const field = useField<ArrayField>()
  return (
    <FoldItem label={field.title}>
      <FoldItem.Base>
        <Select
          value={Array.isArray(props.value) ? undefined : props.value}
          onChange={props.onChange}
          allowClear
          placeholder={GlobalRegistry.getDesignerMessage(
            'SettingComponents.ValidatorSetter.pleaseSelect'
          )}
          options={GlobalRegistry.getDesignerMessage(
            'SettingComponents.ValidatorSetter.formats'
          )}
        />
      </FoldItem.Base>
      <FoldItem.Extra>
        <SchemaContext.Provider
          value={
            new Schema(
              props.independence ? ValidatorSchemaIndependence : ValidatorSchema
            )
          }
        >
          <ArrayItems />
        </SchemaContext.Provider>
      </FoldItem.Extra>
    </FoldItem>
  )
}
// effects={
//   (form) => {
//     useLocales({
//       getMessage: (token: string) => {
//         return GlobalRegistry.getDesignerMessage(token, Schema.Input.Behavior[0].designerLocales);
//       },
//     } as any);
//   }
// }
export const ValidatorSetter: React.FC<IValidatorSetterProps> = observer(
  (props) => {
    if (props.independence) {
      return (
        <FormDialog.Portal>
          <Button
            onClick={() => {
              const dialog = FormDialog('弹窗表单', 'formValidator', (form) => {
                form.addEffects('Locales', () => {
                  useLocales({
                    getMessage: (token: string) => {
                      return (
                        GlobalRegistry.getDesignerMessage(
                          token,
                          locale['zh-CN']
                        ) ||
                        GlobalRegistry.getDesignerMessage(
                          `${token}.title`,
                          locale['zh-CN']
                        )
                      )
                      // return token
                    },
                  } as any)
                })
                return (
                  <div className="dn-validator-setter-dialog">
                    <DesignerLayoutContext.Provider
                      value={{
                        theme: 'light',
                        prefixCls: 'dn-',
                        position: 'fixed',
                      }}
                    >
                      <FormLayout
                        labelWidth={120}
                        labelAlign="left"
                        wrapperAlign="right"
                        feedbackLayout="none"
                        tooltipLayout="text"
                      >
                        <SchemaField
                          components={{
                            DrawerSetter,
                            FormItem,
                            Input,
                            ValueInput,
                            NumberPicker,
                            Select,
                            ArrayItems,
                            FormLayout,
                          }}
                        >
                          <SchemaField.Array
                            name="x-validator"
                            title="x-validator"
                            x-component={ValidatorSetterItem}
                            x-component-props={{ independence: true }}
                          />
                        </SchemaField>
                        <FormDialog.Footer>
                          <span
                            style={{ marginLeft: 4 }}
                            onClick={() => {
                              dialog.close()
                            }}
                          >
                            扩展文案：{form.values.aaa}(点击关闭弹窗)
                          </span>
                        </FormDialog.Footer>
                      </FormLayout>
                    </DesignerLayoutContext.Provider>
                  </div>
                )
              })
              dialog
                .forOpen((payload, next) => {
                  setTimeout(() => {
                    next({
                      initialValues: {
                        aaa: '123',
                      },
                    })
                  }, 0)
                })
                .forConfirm((payload, next) => {
                  setTimeout(() => {
                    console.log(payload)
                    next(payload)
                  }, 10)
                })
                .forCancel((payload, next) => {
                  setTimeout(() => {
                    console.log(payload)
                    next(payload)
                  }, 10)
                })
                .open()
                .then(console.log)
                .catch(console.error)
            }}
          >
            点我打开表单
          </Button>
        </FormDialog.Portal>
      )
    } else {
      return <ValidatorSetterItem {...props} />
    }
  }
)
