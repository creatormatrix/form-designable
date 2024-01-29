'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.TimePicker = void 0
var core_1 = require('@designable/core')
var DatePicker_1 = require('./DatePicker')
exports.TimePicker = core_1.createLocales(DatePicker_1.DatePicker, {
  'zh-CN': {
    title: '时间选择',
    settings: {
      'x-component-props': {
        format: {
          title: '格式化',
          placeholder: '如 HH:mm:ss',
        },
        hourStep: '小时步长',
        minuteStep: '分钟步长',
        secondStep: '秒钟步长',
      },
    },
  },
  'en-US': {
    title: 'Time Picker',
    settings: {
      'x-component-props': {
        format: {
          title: 'Format',
          placeholder: 'e.g. HH:mm:ss',
        },
        hourStep: 'Hour Step',
        minuteStep: 'Minute Step',
        secondStep: 'Second Step',
      },
    },
  },
})
