var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i]
          for (let p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p]
        }
        return t
      }
    return __assign.apply(this, arguments)
  }
let CommonDatePickerAPI = {
  size: {
    type: 'string',
    enum: ['small', 'medium', 'large', null],
    'x-decorator': 'FormItem',
    'x-component': 'Select',
    'x-component-props': {
      defaultValue: 'medium',
    },
  },
  placeholder: {
    type: 'string',
    'x-decorator': 'FormItem',
    'x-component': 'Input',
  },
  format: {
    type: 'string',
    'x-decorator': 'FormItem',
    'x-component': 'Input',
  },
  showTime: {
    type: 'boolean',
    'x-decorator': 'FormItem',
    'x-component': 'Switch',
  },
  resetTime: {
    type: 'boolean',
    'x-decorator': 'FormItem',
    'x-component': 'Switch',
  },
  hasClear: {
    type: 'boolean',
    'x-decorator': 'FormItem',
    'x-component': 'Switch',
    'x-component-props': {
      defaultChecked: true,
    },
  },
  popupTriggerType: {
    type: 'string',
    enum: ['click', 'hover'],
    'x-decorator': 'FormItem',
    'x-component': 'Radio.Group',
    'x-component-props': {
      defaultValue: 'click',
      optionType: 'button',
    },
  },
  popupAlign: {
    type: 'string',
    'x-decorator': 'FormItem',
    'x-component': 'Input',
  },
  followTrigger: {
    type: 'boolean',
    'x-decorator': 'FormItem',
    'x-component': 'Switch',
  },
}
export var DatePicker = {
  type: 'object',
  properties: __assign({}, CommonDatePickerAPI),
}
DatePicker.RangePicker = {
  type: 'object',
  properties: __assign(__assign({}, CommonDatePickerAPI), {
    type: {
      type: 'string',
      enum: ['date', 'month', 'year'],
      'x-decorator': 'FormItem',
      'x-component': 'Select',
      'x-component-props': {
        defaultValue: 'date',
      },
    },
  }),
}
