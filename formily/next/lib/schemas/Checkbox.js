'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.Checkbox = void 0
exports.Checkbox = {
  type: 'object',
  properties: {},
}
exports.Checkbox.Group = {
  type: 'object',
  properties: {
    direction: {
      type: 'string',
      enum: ['hoz', 'ver'],
      'x-decorator': 'FormItem',
      'x-component': 'Radio.Group',
      'x-component-props': {
        defaultValue: 'hoz',
        optionType: 'button',
      },
    },
  },
}
