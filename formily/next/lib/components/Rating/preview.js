'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.Rating = void 0
var next_1 = require('@alifd/next')
var core_1 = require('@designable/core')
var Field_1 = require('../Field')
var schemas_1 = require('../../schemas')
var locales_1 = require('../../locales')
exports.Rating = next_1.Rating
exports.Rating.Behavior = core_1.createBehavior({
  name: 'Rating',
  extends: ['Field'],
  selector: function (node) {
    return node.props['x-component'] === 'Rating'
  },
  designerProps: {
    propsSchema: Field_1.createFieldSchema(schemas_1.AllSchemas.Rating),
  },
  designerLocales: locales_1.AllLocales.Rating,
})
exports.Rating.Resource = core_1.createResource({
  icon: 'RateSource',
  elements: [
    {
      componentName: 'Field',
      props: {
        type: 'number',
        title: 'Rating',
        'x-decorator': 'FormItem',
        'x-component': 'Rating',
      },
    },
  ],
})
