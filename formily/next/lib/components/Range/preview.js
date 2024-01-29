'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.Range = void 0
var next_1 = require('@alifd/next')
var core_1 = require('@designable/core')
var Field_1 = require('../Field')
var schemas_1 = require('../../schemas')
var locales_1 = require('../../locales')
exports.Range = next_1.Range
exports.Range.Behavior = core_1.createBehavior({
  name: 'Range',
  extends: ['Field'],
  selector: function (node) {
    return node.props['x-component'] === 'Range'
  },
  designerProps: {
    propsSchema: Field_1.createFieldSchema(schemas_1.AllSchemas.Range),
  },
  designerLocales: locales_1.AllLocales.Range,
})
exports.Range.Resource = core_1.createResource({
  icon: 'SliderSource',
  elements: [
    {
      componentName: 'Field',
      props: {
        type: 'number',
        title: 'Range',
        'x-decorator': 'FormItem',
        'x-component': 'Range',
      },
    },
  ],
})
