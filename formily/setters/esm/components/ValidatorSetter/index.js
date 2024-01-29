var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i]
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p]
        }
        return t
      }
    return __assign.apply(this, arguments)
  }
var _a, _b
import React from 'react'
import { observer, useField, SchemaContext, Schema } from '@formily/react'
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
var ValidatorSchema = {
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
var ValidatorSchemaIndependence = clone(ValidatorSchema)
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
;(_b =
  (_a =
    ValidatorSchemaIndependence === null ||
    ValidatorSchemaIndependence === void 0
      ? void 0
      : ValidatorSchemaIndependence.items) === null || _a === void 0
    ? void 0
    : _a.properties) === null || _b === void 0
  ? void 0
  : (_b.drawer['x-component-props'] = {
      wrapperClassName: 'validator-setter-dialog',
    })
var ValidatorSetterItem = function (props) {
  var field = useField()
  return React.createElement(
    FoldItem,
    { label: field.title },
    React.createElement(
      FoldItem.Base,
      null,
      React.createElement(Select, {
        value: Array.isArray(props.value) ? undefined : props.value,
        onChange: props.onChange,
        allowClear: true,
        placeholder: GlobalRegistry.getDesignerMessage(
          'SettingComponents.ValidatorSetter.pleaseSelect'
        ),
        options: GlobalRegistry.getDesignerMessage(
          'SettingComponents.ValidatorSetter.formats'
        ),
      })
    ),
    React.createElement(
      FoldItem.Extra,
      null,
      React.createElement(
        SchemaContext.Provider,
        {
          value: new Schema(
            props.independence ? ValidatorSchemaIndependence : ValidatorSchema
          ),
        },
        React.createElement(ArrayItems, null)
      )
    )
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
export var ValidatorSetter = observer(function (props) {
  if (props.independence) {
    return React.createElement(
      FormDialog.Portal,
      null,
      React.createElement(
        Button,
        {
          onClick: function () {
            var dialog = FormDialog(
              '弹窗表单',
              'formValidator',
              function (form) {
                form.addEffects('Locales', function () {
                  useLocales({
                    getMessage: function (token) {
                      return (
                        GlobalRegistry.getDesignerMessage(
                          token,
                          locale['zh-CN']
                        ) ||
                        GlobalRegistry.getDesignerMessage(
                          ''.concat(token, '.title'),
                          locale['zh-CN']
                        )
                      )
                      // return token
                    },
                  })
                })
                return React.createElement(
                  'div',
                  { className: 'dn-validator-setter-dialog' },
                  React.createElement(
                    DesignerLayoutContext.Provider,
                    {
                      value: {
                        theme: 'light',
                        prefixCls: 'dn-',
                        position: 'fixed',
                      },
                    },
                    React.createElement(
                      FormLayout,
                      {
                        labelWidth: 120,
                        labelAlign: 'left',
                        wrapperAlign: 'right',
                        feedbackLayout: 'none',
                        tooltipLayout: 'text',
                      },
                      React.createElement(
                        SchemaField,
                        {
                          components: {
                            DrawerSetter: DrawerSetter,
                            FormItem: FormItem,
                            Input: Input,
                            ValueInput: ValueInput,
                            NumberPicker: NumberPicker,
                            Select: Select,
                            ArrayItems: ArrayItems,
                            FormLayout: FormLayout,
                          },
                        },
                        React.createElement(SchemaField.Array, {
                          name: 'x-validator',
                          title: 'x-validator',
                          'x-component': ValidatorSetterItem,
                          'x-component-props': { independence: true },
                        })
                      ),
                      React.createElement(
                        FormDialog.Footer,
                        null,
                        React.createElement(
                          'span',
                          {
                            style: { marginLeft: 4 },
                            onClick: function () {
                              dialog.close()
                            },
                          },
                          '\u6269\u5C55\u6587\u6848\uFF1A',
                          form.values.aaa,
                          '(\u70B9\u51FB\u5173\u95ED\u5F39\u7A97)'
                        )
                      )
                    )
                  )
                )
              }
            )
            dialog
              .forOpen(function (payload, next) {
                setTimeout(function () {
                  next({
                    initialValues: {
                      aaa: '123',
                    },
                  })
                }, 0)
              })
              .forConfirm(function (payload, next) {
                setTimeout(function () {
                  console.log(payload)
                  next(payload)
                }, 10)
              })
              .forCancel(function (payload, next) {
                setTimeout(function () {
                  console.log(payload)
                  next(payload)
                }, 10)
              })
              .open()
              .then(console.log)
              .catch(console.error)
          },
        },
        '\u70B9\u6211\u6253\u5F00\u8868\u5355'
      )
    )
  } else {
    return React.createElement(ValidatorSetterItem, __assign({}, props))
  }
})
