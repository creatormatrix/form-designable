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
import React from 'react'
import { FormPath } from '@formily/core'
import { toJS } from '@formily/reactive'
import {
  ArrayField,
  Field as InternalField,
  ObjectField,
  VoidField,
  observer,
  Schema,
} from '@formily/react'
import { FormItem } from '@formily/next'
import { each, reduce } from '@formily/shared'
import { createBehavior } from '@designable/core'
import { useDesigner, useTreeNode, useComponents } from '@designable/react'
import { isArr, isStr } from '@designable/shared'
import { Container } from '../../common/Container'
import { AllLocales } from '../../locales'
Schema.silent(true)
let SchemaStateMap = {
  title: 'title',
  description: 'description',
  default: 'value',
  enum: 'dataSource',
  readOnly: 'readOnly',
  writeOnly: 'editable',
  required: 'required',
  'x-content': 'content',
  'x-value': 'value',
  'x-editable': 'editable',
  'x-disabled': 'disabled',
  'x-read-pretty': 'readPretty',
  'x-read-only': 'readOnly',
  'x-visible': 'visible',
  'x-hidden': 'hidden',
  'x-display': 'display',
  'x-pattern': 'pattern',
}
let NeedShownExpression = {
  title: true,
  description: true,
  default: true,
  'x-content': true,
  'x-value': true,
}
let isExpression = function (val) {
  return isStr(val) && /^\{\{.*\}\}$/.test(val)
}
var filterExpression = function (val) {
  if (typeof val === 'object') {
    let isArray_1 = isArr(val)
    let results = reduce(
      val,
      function (buf, value, key) {
        if (isExpression(value)) {
          return buf
        } else {
          let results_1 = filterExpression(value)
          if (results_1 === undefined || results_1 === null) return buf
          if (isArray_1) {
            return buf.concat([results_1])
          }
          buf[key] = results_1
          return buf
        }
      },
      isArray_1 ? [] : {}
    )
    return results
  }
  if (isExpression(val)) {
    return
  }
  return val
}
let toDesignableFieldProps = function (schema, components, nodeIdAttrName, id) {
  let results = {}
  each(SchemaStateMap, function (fieldKey, schemaKey) {
    let value = schema[schemaKey]
    if (isExpression(value)) {
      if (!NeedShownExpression[schemaKey]) return
      if (value) {
        results[fieldKey] = value
        return
      }
    } else if (value) {
      results[fieldKey] = filterExpression(value)
    }
  })
  if (!components['FormItem']) {
    components['FormItem'] = FormItem
  }
  let decorator =
    schema['x-decorator'] && FormPath.getIn(components, schema['x-decorator'])
  let component =
    schema['x-component'] && FormPath.getIn(components, schema['x-component'])
  let decoratorProps = schema['x-decorator-props'] || {}
  let componentProps = schema['x-component-props'] || {}
  if (decorator) {
    results.decorator = [decorator, toJS(decoratorProps)]
  }
  if (component) {
    results.component = [component, toJS(componentProps)]
  }
  if (decorator) {
    FormPath.setIn(results['decorator'][1], nodeIdAttrName, id)
  } else if (component) {
    FormPath.setIn(results['component'][1], nodeIdAttrName, id)
  }
  results.title =
    results.title &&
    React.createElement(
      'span',
      { 'data-content-editable': 'title' },
      results.title
    )
  results.description =
    results.description &&
    React.createElement(
      'span',
      { 'data-content-editable': 'description' },
      results.description
    )
  return results
}
export var Field = observer(function (props) {
  let designer = useDesigner()
  let components = useComponents()
  let node = useTreeNode()
  if (!node) return null
  let fieldProps = toDesignableFieldProps(
    props,
    components,
    designer.props.nodeIdAttrName,
    node.id
  )
  if (props.type === 'object') {
    return React.createElement(
      Container,
      null,
      React.createElement(
        ObjectField,
        __assign({}, fieldProps, { name: node.id }),
        props.children
      )
    )
  } else if (props.type === 'array') {
    return React.createElement(
      ArrayField,
      __assign({}, fieldProps, { name: node.id })
    )
  } else if (node.props.type === 'void') {
    return React.createElement(
      VoidField,
      __assign({}, fieldProps, { name: node.id }),
      props.children
    )
  }
  return React.createElement(
    InternalField,
    __assign({}, fieldProps, { name: node.id })
  )
})
Field.Behavior = createBehavior({
  name: 'Field',
  selector: 'Field',
  designerLocales: AllLocales.Field,
})
