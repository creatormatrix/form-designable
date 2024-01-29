'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.Switch = void 0
exports.Switch = {
  type: 'object',
  properties: {
    size: {
      type: 'string',
      enum: ['small', 'medium', null],
      'x-decorator': 'FormItem',
      'x-component': 'Select',
      'x-component-props': {
        defaultValue: 'medium',
      },
    },
    checkedChildren: {
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    unCheckedChildren: {
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    autoWidth: {
      type: 'boolean',
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
    },
  },
}
