import { DatePicker as FormilyDatePicker } from '@formily/antd'
import { createBehavior, createResource } from '@designable/core'
import { createFieldSchema } from '../Field'
import { AllSchemas } from '../../schemas'
import { AllLocales } from '../../locales'
export var DatePicker = FormilyDatePicker
DatePicker.Behavior = createBehavior(
  {
    name: 'DatePicker',
    extends: ['Field'],
    selector: function (node) {
      return node.props['x-component'] === 'DatePicker'
    },
    designerProps: {
      propsSchema: createFieldSchema(AllSchemas.DatePicker),
    },
    designerLocales: AllLocales.DatePicker,
  },
  {
    name: 'DatePicker.RangePicker',
    extends: ['Field'],
    selector: function (node) {
      return node.props['x-component'] === 'DatePicker.RangePicker'
    },
    designerProps: {
      propsSchema: createFieldSchema(AllSchemas.DatePicker.RangePicker),
    },
    designerLocales: AllLocales.DateRangePicker,
  }
)
DatePicker.Resource = createResource(
  {
    icon: 'DatePickerSource',
    elements: [
      {
        componentName: 'Field',
        props: {
          type: 'string',
          title: 'DatePicker',
          'x-decorator': 'FormItem',
          'x-component': 'DatePicker',
        },
      },
    ],
  },
  {
    icon: 'DateRangePickerSource',
    elements: [
      {
        componentName: 'Field',
        props: {
          type: 'string[]',
          title: 'DateRangePicker',
          'x-decorator': 'FormItem',
          'x-component': 'DatePicker.RangePicker',
        },
      },
    ],
  }
)