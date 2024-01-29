import { TimePicker as FormilyTimePicker } from '@formily/next'
import { createBehavior, createResource } from '@designable/core'
import { createFieldSchema } from '../Field'
import { AllSchemas } from '../../schemas'
import { AllLocales } from '../../locales'
export var TimePicker = FormilyTimePicker
TimePicker.Behavior = createBehavior({
  name: 'TimePicker',
  extends: ['Field'],
  selector: function (node) {
    return node.props['x-component'] === 'TimePicker'
  },
  designerProps: {
    propsSchema: createFieldSchema(AllSchemas.TimePicker),
  },
  designerLocales: AllLocales.TimePicker,
})
TimePicker.Resource = createResource({
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
