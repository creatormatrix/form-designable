'use strict'
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
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
var _a, _b
Object.defineProperty(exports, '__esModule', { value: true })
exports.ValidatorSetter = void 0
var react_1 = __importDefault(require('react'))
var react_2 = require('@formily/react')
var core_1 = require('@designable/core')
var antd_1 = require('@formily/antd')
var react_settings_form_1 = require('@designable/react-settings-form')
var antd_2 = require('antd')
var react_3 = require('@designable/react')
require('../../locales')
var zh_CN_1 = __importDefault(require('../../locales/zh-CN'))
var shared_1 = require('@designable/shared')
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
var ValidatorSchemaIndependence = (0, shared_1.clone)(ValidatorSchema)
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
  var field = (0, react_2.useField)()
  return react_1.default.createElement(
    react_settings_form_1.FoldItem,
    { label: field.title },
    react_1.default.createElement(
      react_settings_form_1.FoldItem.Base,
      null,
      react_1.default.createElement(antd_2.Select, {
        value: Array.isArray(props.value) ? undefined : props.value,
        onChange: props.onChange,
        allowClear: true,
        placeholder: core_1.GlobalRegistry.getDesignerMessage(
          'SettingComponents.ValidatorSetter.pleaseSelect'
        ),
        options: core_1.GlobalRegistry.getDesignerMessage(
          'SettingComponents.ValidatorSetter.formats'
        ),
      })
    ),
    react_1.default.createElement(
      react_settings_form_1.FoldItem.Extra,
      null,
      react_1.default.createElement(
        react_2.SchemaContext.Provider,
        {
          value: new react_2.Schema(
            props.independence ? ValidatorSchemaIndependence : ValidatorSchema
          ),
        },
        react_1.default.createElement(antd_1.ArrayItems, null)
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
exports.ValidatorSetter = (0, react_2.observer)(function (props) {
  if (props.independence) {
    return react_1.default.createElement(
      antd_1.FormDialog.Portal,
      null,
      react_1.default.createElement(
        antd_2.Button,
        {
          onClick: function () {
            var dialog = (0, antd_1.FormDialog)(
              '弹窗表单',
              'formValidator',
              function (form) {
                form.addEffects('Locales', function () {
                  ;(0, react_settings_form_1.useLocales)({
                    getMessage: function (token) {
                      return (
                        core_1.GlobalRegistry.getDesignerMessage(
                          token,
                          zh_CN_1.default['zh-CN']
                        ) ||
                        core_1.GlobalRegistry.getDesignerMessage(
                          ''.concat(token, '.title'),
                          zh_CN_1.default['zh-CN']
                        )
                      )
                      // return token
                    },
                  })
                })
                return react_1.default.createElement(
                  'div',
                  { className: 'dn-validator-setter-dialog' },
                  react_1.default.createElement(
                    react_3.DesignerLayoutContext.Provider,
                    {
                      value: {
                        theme: 'light',
                        prefixCls: 'dn-',
                        position: 'fixed',
                      },
                    },
                    react_1.default.createElement(
                      antd_1.FormLayout,
                      {
                        labelWidth: 120,
                        labelAlign: 'left',
                        wrapperAlign: 'right',
                        feedbackLayout: 'none',
                        tooltipLayout: 'text',
                      },
                      react_1.default.createElement(
                        react_settings_form_1.SchemaField,
                        {
                          components: {
                            DrawerSetter: react_settings_form_1.DrawerSetter,
                            FormItem: antd_1.FormItem,
                            Input: antd_1.Input,
                            ValueInput: react_settings_form_1.ValueInput,
                            NumberPicker: antd_1.NumberPicker,
                            Select: antd_2.Select,
                            ArrayItems: antd_1.ArrayItems,
                            FormLayout: antd_1.FormLayout,
                          },
                        },
                        react_1.default.createElement(
                          react_settings_form_1.SchemaField.Array,
                          {
                            name: 'x-validator',
                            title: 'x-validator',
                            'x-component': ValidatorSetterItem,
                            'x-component-props': { independence: true },
                          }
                        )
                      ),
                      react_1.default.createElement(
                        antd_1.FormDialog.Footer,
                        null,
                        react_1.default.createElement(
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
    return react_1.default.createElement(
      ValidatorSetterItem,
      __assign({}, props)
    )
  }
})
