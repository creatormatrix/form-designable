'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.Upload = void 0
exports.Upload = {
  type: 'object',
  properties: {
    textContent: {
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    accept: {
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    action: {
      'x-decorator': 'FormItem',
      'x-component': 'ValueInput',
      'x-component-props': {
        include: ['TEXT', 'EXPRESSION'],
      },
    },
    name: {
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
      'x-component-props': {
        defaultValue: 'file',
      },
    },
    maxCount: {
      type: 'number',
      'x-decorator': 'FormItem',
      'x-component': 'NumberPicker',
    },
    method: {
      enum: ['POST', 'PUT', 'GET'],
      'x-decorator': 'FormItem',
      'x-component': 'Radio.Group',
      'x-component-props': {
        defaultValue: 'POST',
        optionType: 'button',
      },
    },
    data: {
      'x-decorator': 'FormItem',
      'x-component': 'ValueInput',
      'x-component-props': {
        include: ['EXPRESSION'],
      },
    },
    headers: {
      'x-decorator': 'FormItem',
      'x-component': 'ValueInput',
      'x-component-props': {
        include: ['EXPRESSION'],
      },
    },
    listType: {
      enum: ['text', 'picture', 'picture-card'],
      'x-decorator': 'FormItem',
      'x-component': 'Radio.Group',
      'x-component-props': {
        defaultValue: 'text',
        optionType: 'button',
      },
    },
    directory: {
      type: 'boolean',
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
    },
    multiple: {
      type: 'boolean',
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
    },
    openFileDialogOnClick: {
      type: 'boolean',
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
      'x-component-props': {
        defaultChecked: true,
      },
    },
    showUploadList: {
      type: 'boolean',
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
      'x-component-props': {
        defaultChecked: true,
      },
    },
    withCredentials: {
      type: 'boolean',
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
    },
  },
}
exports.Upload.Dragger = exports.Upload