import { ISchema } from '@formily/react'

export const CSSStyle: ISchema = {
  type: 'void',
  properties: {
    'style.width': {
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'SizeInput',
    },
    'style.height': {
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'SizeInput',
    },
    'style.display': {
      'x-component': 'DisplayStyleSetter',
    },
    'style.background': {
      'x-component': 'BackgroundStyleSetter',
    },
    'style.boxShadow': {
      'x-component': 'BoxShadowStyleSetter',
    },
    'style.font': {
      'x-component': 'FontStyleSetter',
    },
    'style.margin': {
      'x-component': 'BoxStyleSetter',
      'x-component-props': {
        exclude: ['unset'],
        theme: 'margin',
      },
    },
    'style.padding': {
      'x-component': 'BoxStyleSetter',
      'x-component-props': {
        exclude: ['unset', 'auto'],
        theme: 'padding',
      },
    },
    'style.borderRadius': {
      'x-component': 'BorderRadiusStyleSetter',
      'x-component-props': {
        theme: 'borderRadius',
      },
    },
    'style.border': {
      'x-component': 'BorderStyleSetter',
      'x-component-props': {
        theme: 'borderColor',
      },
    },
    'style.opacity': {
      'x-decorator': 'FormItem',
      'x-component': 'Slider',
      'x-component-props': {
        defaultValue: 1,
        min: 0,
        max: 1,
        step: 0.01,
      },
    },
  },
}
