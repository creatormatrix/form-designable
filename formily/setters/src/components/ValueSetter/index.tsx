/*
 * 支持文本、数字、布尔、表达式
 * Todo: JSON、富文本，公式
 */
import { ApartmentOutlined } from '@ant-design/icons'
import { TreeNode } from '@creatormatrix/core'
import { useSelectedNode } from '@creatormatrix/react'
import {
  createPolyInput,
  IInput,
  MonacoInput,
  SettingsFormContext,
} from '@creatormatrix/react-settings-form'
import { dataSourceToExpressions } from '@creatormatrix/shared'
import { isEmpty } from '@formily/shared'
import { Button, Input, InputNumber, Popover, Select } from 'antd'
import React, { useContext, useState } from 'react'
import { ServiceSetter } from '../ServiceSetter'

type Source<T = any> =
  | {
      type: 'static'
      value: T
    }
  | {
      type: 'expression'
      value: T
    }
  | {
      type: 'service'
      value: T
    }

const STARTTAG_REX =
  /<([-A-Za-z0-9_]+)((?:\s+[a-zA-Z_:][-a-zA-Z0-9_:.]*(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/

const EXPRESSION_REX = /^\{\{([\s\S]*)\}\}$/

const isNumber = (data: Source) =>
  data?.type === 'static' && typeof data.value === 'number'

const isBoolean = (data: Source) =>
  data?.type === 'static' && typeof data.value === 'boolean'

const isJSON = (data: Source) =>
  data?.type === 'static' && typeof data.value === 'object'

const isExpression = (data: Source<string>) => {
  return data?.type === 'expression' && typeof data.value === 'string'
}

const isRichText = (data: Source) => {
  return (
    data?.type === 'static' &&
    typeof data.value === 'string' &&
    STARTTAG_REX.test(data.value)
  )
}

const isNormalText = (data: Source) => {
  return (
    data?.type === 'static' &&
    typeof data.value === 'string' &&
    !isExpression(data) &&
    !isRichText(data)
  )
}

const takeNumber = (value: any) => {
  const num = String(value).replace(/[^\d\.]+/, '')
  if (num === '') return
  return Number(num)
}

const transformDataSource = (node: TreeNode) => {
  const currentNode = node
  const dots = (count: number) => {
    let dots = ''
    for (let i = 0; i < count; i++) {
      dots += '.'
    }
    return dots
  }
  const targetPath = (parentNode: TreeNode, targetNode: TreeNode) => {
    const path = []
    const transform = (node: TreeNode) => {
      if (node && node !== parentNode) {
        path.push(node.props.name || node.id)
      } else {
        transform(node.parent)
      }
    }
    transform(targetNode)
    return path.reverse().join('.')
  }
  const hasNoVoidChildren = (node: TreeNode) => {
    return node.children?.some((node) => {
      if (node.props.type !== 'void' && node !== currentNode) return true
      return hasNoVoidChildren(node)
    })
  }
  const findRoot = (node: TreeNode): TreeNode => {
    if (!node?.parent) return node
    if (node?.parent?.componentName !== node.componentName) return node.parent
    return findRoot(node.parent)
  }
  const findArrayParent = (node: TreeNode) => {
    if (!node?.parent) return
    if (node.parent.props.type === 'array') return node.parent
    if (node.parent === root) return
    return findArrayParent(node.parent)
  }
  const transformRelativePath = (arrayNode: TreeNode, targetNode: TreeNode) => {
    if (targetNode.depth === currentNode.depth)
      return `.${targetNode.props.name || targetNode.id}`
    return `${dots(currentNode.depth - arrayNode.depth)}[].${targetPath(
      arrayNode,
      targetNode
    )}`
  }
  const transformChildren = (children: TreeNode[], path = []) => {
    return children.reduce((buf, node) => {
      if (node === currentNode) return buf
      if (node.props.type === 'array' && !node.contains(currentNode)) return buf
      if (node.props.type === 'void' && !hasNoVoidChildren(node)) return buf
      const currentPath = path.concat(node.props.name || node.id)
      const arrayNode = findArrayParent(node)
      const label =
        node.props.title ||
        node.props['x-component-props']?.title ||
        node.props.name ||
        node.designerProps.title
      const value = arrayNode
        ? transformRelativePath(arrayNode, node)
        : currentPath[currentPath.length - 1]
      return buf.concat({
        label,
        value,
        node,
        children: transformChildren(node.children, currentPath),
      })
    }, [])
  }
  const root = findRoot(node)
  if (root) {
    return transformChildren(root.children)
  }
  return []
}
type DataSourceItem = { label: string; value: any; children?: DataSourceItem[] }
const flattenDataSource = (dataSource: DataSourceItem[]) => {
  let data = []
  dataSource?.forEach((i) => {
    if (i.label) {
      data.push({ label: i.label, value: i.value })
    }
    if (Array.isArray(i.children) && i.children.length > 0) {
      data = data.concat(flattenDataSource(i.children))
    }
  })
  return data
}

type IValueInput = Partial<IInput>
export const ValueSetter: React.FC<IValueInput> = createPolyInput([
  {
    type: 'Text',
    icon: 'Text',
    component: Input,
    checker: isNormalText,
    toInputValue: (data) => {
      return data?.value
    },
    toChangeValue: (value) => {
      return {
        type: 'static',
        value,
      }
    },
  },
  {
    type: 'Expression',
    icon: 'Expression',
    component: (props: any) => {
      let dataSource = []
      if (props?.outSource) {
        dataSource = props.outSource
      } else {
        const baseNode = useSelectedNode()
        dataSource = flattenDataSource(transformDataSource(baseNode))
      }
      const declareExtra = dataSourceToExpressions(
        flattenDataSource(dataSource)
      )

      const context = useContext(SettingsFormContext)
      const expressions = context?.expressions
      return (
        <Popover
          content={
            <div
              style={{
                width: 400,
                height: 200,
                marginLeft: -16,
                marginRight: -16,
                marginBottom: -12,
              }}
            >
              <MonacoInput
                {...props}
                language="javascript.expression"
                extraLib={`
                ${declareExtra}
                ${expressions && expressions?.()}
                `}
              />
            </div>
          }
          trigger="click"
        >
          <Button block>{'表达式'}</Button>
        </Popover>
      )
    },
    checker: isExpression,
    toInputValue: (data) => {
      if (!data?.value || data?.value === '{{}}') return
      const matched = String(data?.value).match(EXPRESSION_REX)
      return matched?.[1] || data?.value || ''
    },
    toChangeValue: (value) => {
      if (!value || value === '{{}}') return
      const matched = String(value).match(EXPRESSION_REX)
      return {
        type: 'expression',
        value: `{{${matched?.[1] || value || ''}}}`,
      }
    },
  },
  {
    type: 'Boolean',
    icon: 'Boolean',
    component: (props: any) => (
      <Select
        {...props}
        options={[
          { label: 'True', value: true },
          { label: 'False', value: false },
        ]}
      />
    ),
    checker: isBoolean,
    toInputValue: (data) => {
      return !!data?.value
    },
    toChangeValue: (value) => {
      return {
        type: 'static',
        value: !!value,
      }
    },
  },
  {
    type: 'Number',
    icon: 'Number',
    component: InputNumber,
    checker: isNumber,
    toInputValue: (data) => takeNumber(data?.value),
    toChangeValue: (value) => ({ type: 'static', value: takeNumber(value) }),
  },

  {
    type: 'JSON',
    icon: 'JSON',
    component: (props: any) => {
      const [value, setValue] = useState(props.value)
      return (
        <Popover
          destroyTooltipOnHide
          onOpenChange={(bool) => {
            if (!bool) {
              let json = undefined
              try {
                json = JSON.parse(value)
              } catch (e) {}
              props.onChange(json)
            }
          }}
          content={
            <div
              style={{
                width: 400,
                height: 200,
                marginLeft: -16,
                // marginRight: -16,
                // marginBottom: -12,
              }}
            >
              <MonacoInput
                {...props}
                value={
                  typeof value === 'string' ? value : JSON.stringify(value)
                }
                onChange={(v) => {
                  setValue(v)
                }}
                options={{
                  minimap: {
                    enabled: false,
                  },
                  lineNumbers: 'off',
                  roundedSelection: false,
                  scrollBeyondLastLine: false,
                  readOnly: false,
                }}
                language="json"
              />
            </div>
          }
          trigger="click"
        >
          <Button block>{'JSON'}</Button>
        </Popover>
      )
    },
    checker: isJSON,
    toInputValue: (data) => {
      return data?.value
    },
    toChangeValue: (value) => {
      return {
        type: 'static',
        value: value,
      }
    },
  },
  {
    type: 'Service',
    icon: <ApartmentOutlined />,
    component: (props: any) => {
      return (
        <ServiceSetter {...props}>
          <Button block>服务设计</Button>
        </ServiceSetter>
      )
    },
    checker: (data) => {
      return data?.type === 'service'
    },
    // toInputValue: (data) => {
    //   return JSON.stringify(data?.value, null, '  ')
    // },
    toChangeValue: (value) => {
      if (isEmpty(value)) {
        return undefined
      }
      return {
        type: 'service',
        value,
      }
    },
  },
]) as any
