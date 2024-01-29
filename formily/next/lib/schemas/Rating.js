'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.Rating = void 0
exports.Rating = {
  type: 'object',
  properties: {
    size: {
      type: 'string',
      enum: ['small', 'medium', 'large', null],
      'x-decorator': 'FormItem',
      'x-component': 'Select',
      'x-component-props': {
        defaultValue: 'medium',
      },
    },
    count: {
      type: 'number',
      'x-decorator': 'FormItem',
      'x-component': 'NumberPicker',
    },
    showGrade: {
      type: 'boolean',
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
    },
    allowHalf: {
      type: 'boolean',
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
    },
    allowClear: {
      type: 'boolean',
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
    },
  },
}
