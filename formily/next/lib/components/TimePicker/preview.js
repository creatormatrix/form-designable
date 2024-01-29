'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.TimePicker = void 0
var next_1 = require('@formily/next')
var core_1 = require('@designable/core')
var Field_1 = require('../Field')
var schemas_1 = require('../../schemas')
var locales_1 = require('../../locales')
exports.TimePicker = next_1.TimePicker
exports.TimePicker.Behavior = core_1.createBehavior({
  name: 'TimePicker',
  extends: ['Field'],
  selector: function (node) {
    return node.props['x-component'] === 'TimePicker'
  },
  designerProps: {
    propsSchema: Field_1.createFieldSchema(schemas_1.AllSchemas.TimePicker),
  },
  designerLocales: locales_1.AllLocales.TimePicker,
})
exports.TimePicker.Resource = core_1.createResource({
  icon: 'TimePickerSource',
  elements: [
    {
      componentName: 'Field',
      props: {
        type: 'string',
        title: 'TimePicker',
        'x-decorator': 'FormItem',
        'x-component': 'TimePicker',
      },
    },
  ],
})
