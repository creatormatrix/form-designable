'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.FormCollapse = void 0
exports.FormCollapse = {
  type: 'object',
  properties: {
    accordion: {
      type: 'boolean',
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
    },
  },
}
exports.FormCollapse.CollapsePanel = {
  type: 'object',
  properties: {
    title: {
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
  },
}
