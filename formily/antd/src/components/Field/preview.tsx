import React from 'react'
import { FormPath } from '@formily/core'
import { toJS } from '@formily/reactive'
import {
  ArrayField,
  Field as InternalField,
  ObjectField,
  VoidField,
  observer,
  ISchema,
  Schema,
} from '@formily/react'
import { FormItem } from '@formily/antd'
import { each, reduce } from '@formily/shared'
import { createBehavior } from '@creatormatrix/core'
import {
  useDesigner,
  useTreeNode,
  useComponents,
  DnFC,
} from '@creatormatrix/react'
import { isArr, isStr } from '@creatormatrix/shared'
import { Container } from '../../common/Container'
import { AllLocales } from '../../locales'

Schema.silent(true)

const SchemaStateMap = {
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

const NeedShownExpression = {
  title: true,
  description: true,
  default: true,
  'x-content': true,
  'x-value': true,
}

const isExpression = (val: any) => isStr(val) && /^\{\{.*\}\}$/.test(val)

const filterExpression = (val: any) => {
  if (typeof val === 'object') {
    const isArray = isArr(val)
    const results = reduce(
      val,
      (buf: any, value, key) => {
        if (isExpression(value)) {
          return buf
        } else {
          const results = filterExpression(value)
          if (results === undefined || results === null) return buf
          if (isArray) {
            return buf.concat([results])
          }
          buf[key] = results
          return buf
        }
      },
      isArray ? [] : {}
    )
    return results
  }
  if (isExpression(val)) {
    return
  }
  return val
}

const toDesignableFieldProps = (
  schema: ISchema,
  components: any,
  nodeIdAttrName: string,
  id: string
) => {
  const results: any = {}
  each(SchemaStateMap, (fieldKey, schemaKey) => {
    const v = schema[schemaKey]
    if (
      v &&
      Object.prototype.hasOwnProperty.call(v, 'type') &&
      Object.prototype.hasOwnProperty.call(v, 'value')
    ) {
      if (['static'].includes(v.type)) {
        results[fieldKey] = v.value
      } else if (fieldKey === 'value') {
        if (v.type === 'expression') {
          results[fieldKey] = v.value
        } else if (v.type === 'service') {
          results[fieldKey] = v.value ? `#${v.value.name}` : undefined
        }
      }
      return
    }
    if (isExpression(v)) {
      if (!NeedShownExpression[schemaKey]) return
      if (v) {
        results[fieldKey] = v
        return
      }
    } else if (v) {
      results[fieldKey] = filterExpression(v)
    }
  })
  if (!components['FormItem']) {
    components['FormItem'] = FormItem
  }
  const decorator =
    schema['x-decorator'] && FormPath.getIn(components, schema['x-decorator'])
  const component =
    schema['x-component'] && FormPath.getIn(components, schema['x-component'])
  const decoratorProps = schema['x-decorator-props'] || {}
  const componentProps = schema['x-component-props'] || {}

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
  results.title = results.title && (
    <span data-content-editable="title">{results.title}</span>
  )
  results.description = results.description && (
    <span data-content-editable="description">{results.description}</span>
  )
  return results
}

export const Field: DnFC<ISchema> = observer((props) => {
  const designer = useDesigner()
  const components = useComponents()
  const node = useTreeNode()
  if (!node) return null
  const fieldProps = toDesignableFieldProps(
    props,
    components,
    designer.props.nodeIdAttrName,
    node.id
  )
  if (props.type === 'object') {
    return (
      <Container>
        <ObjectField {...fieldProps} name={node.id}>
          {props.children}
        </ObjectField>
      </Container>
    )
  } else if (props.type === 'array') {
    return <ArrayField {...fieldProps} name={node.id} />
  } else if (node.props.type === 'void') {
    return (
      <VoidField {...fieldProps} name={node.id}>
        {props.children}
      </VoidField>
    )
  }
  return <InternalField {...fieldProps} name={node.id} />
})

Field.Behavior = createBehavior({
  name: 'Field',
  selector: 'Field',
  designerLocales: AllLocales.Field,
})
