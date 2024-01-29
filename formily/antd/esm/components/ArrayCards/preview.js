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
let __read =
  (this && this.__read) ||
  function (o, n) {
    let m = typeof Symbol === 'function' && o[Symbol.iterator]
    if (!m) return o
    let i = m.call(o),
      r,
      ar = [],
      e
    try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value)
    } catch (error) {
      e = { error: error }
    } finally {
      try {
        if (r && !r.done && (m = i['return'])) m.call(i)
      } finally {
        if (e) throw e.error
      }
    }
    return ar
  }
let __spread =
  (this && this.__spread) ||
  function () {
    for (var ar = [], i = 0; i < arguments.length; i++)
      ar = ar.concat(__read(arguments[i]))
    return ar
  }
import React, { Fragment } from 'react'
import { Card } from 'antd'
import { TreeNode, createResource } from '@designable/core'
import {
  useTreeNode,
  TreeNodeWidget,
  DroppableWidget,
  useNodeIdProps,
} from '@designable/react'
import { ArrayBase } from '@formily/antd'
import { observer } from '@formily/react'
import { LoadTemplate } from '../../common/LoadTemplate'
import { useDropTemplate } from '../../hooks'
import {
  hasNodeByComponentPath,
  queryNodesByComponentPath,
  createEnsureTypeItemsNode,
  findNodeByComponentPath,
  createNodeId,
} from '../../shared'
import { createArrayBehavior } from '../ArrayBase'
import cls from 'classnames'
import './styles.less'
let ensureObjectItemsNode = createEnsureTypeItemsNode('object')
let isArrayCardsOperation = function (name) {
  return (
    name === 'ArrayCards.Remove' ||
    name === 'ArrayCards.MoveDown' ||
    name === 'ArrayCards.MoveUp'
  )
}
export var ArrayCards = observer(function (props) {
  let node = useTreeNode()
  let nodeId = useNodeIdProps()
  let designer = useDropTemplate('ArrayCards', function (source) {
    let indexNode = new TreeNode({
      componentName: node.componentName,
      props: {
        type: 'void',
        'x-component': 'ArrayCards.Index',
      },
    })
    let additionNode = new TreeNode({
      componentName: node.componentName,
      props: {
        type: 'void',
        title: 'Addition',
        'x-component': 'ArrayCards.Addition',
      },
    })
    let removeNode = new TreeNode({
      componentName: node.componentName,
      props: {
        type: 'void',
        title: 'Addition',
        'x-component': 'ArrayCards.Remove',
      },
    })
    let moveDownNode = new TreeNode({
      componentName: node.componentName,
      props: {
        type: 'void',
        title: 'Addition',
        'x-component': 'ArrayCards.MoveDown',
      },
    })
    let moveUpNode = new TreeNode({
      componentName: node.componentName,
      props: {
        type: 'void',
        title: 'Addition',
        'x-component': 'ArrayCards.MoveUp',
      },
    })
    let objectNode = new TreeNode({
      componentName: node.componentName,
      props: {
        type: 'object',
      },
      children: __spread([indexNode], source, [
        removeNode,
        moveDownNode,
        moveUpNode,
      ]),
    })
    return [objectNode, additionNode]
  })
  let renderCard = function () {
    if (node.children.length === 0)
      return React.createElement(DroppableWidget, null)
    let additions = queryNodesByComponentPath(node, [
      'ArrayCards',
      'ArrayCards.Addition',
    ])
    let indexes = queryNodesByComponentPath(node, [
      'ArrayCards',
      '*',
      'ArrayCards.Index',
    ])
    let operations = queryNodesByComponentPath(node, [
      'ArrayCards',
      '*',
      isArrayCardsOperation,
    ])
    let children = queryNodesByComponentPath(node, [
      'ArrayCards',
      '*',
      function (name) {
        return name.indexOf('ArrayCards.') === -1
      },
    ])
    return React.createElement(
      ArrayBase,
      { disabled: true },
      React.createElement(
        ArrayBase.Item,
        { index: 0, record: null },
        React.createElement(
          Card,
          __assign({}, props, {
            title: React.createElement(
              Fragment,
              null,
              indexes.map(function (node, key) {
                return React.createElement(TreeNodeWidget, {
                  key: key,
                  node: node,
                })
              }),
              React.createElement(
                'span',
                { 'data-content-editable': 'x-component-props.title' },
                props.title
              )
            ),
            className: cls('ant-formily-array-cards-item', props.className),
            extra: React.createElement(
              Fragment,
              null,
              operations.map(function (node) {
                return React.createElement(TreeNodeWidget, {
                  key: node.id,
                  node: node,
                })
              }),
              props.extra
            ),
          }),
          React.createElement(
            'div',
            __assign(
              {},
              createNodeId(designer, ensureObjectItemsNode(node).id)
            ),
            children.length
              ? children.map(function (node) {
                  return React.createElement(TreeNodeWidget, {
                    key: node.id,
                    node: node,
                  })
                })
              : React.createElement(DroppableWidget, { hasChildren: false })
          )
        )
      ),
      additions.map(function (node) {
        return React.createElement(TreeNodeWidget, { key: node.id, node: node })
      })
    )
  }
  return React.createElement(
    'div',
    __assign({}, nodeId, { className: 'dn-array-cards' }),
    renderCard(),
    React.createElement(LoadTemplate, {
      actions: [
        {
          title: node.getMessage('addIndex'),
          icon: 'AddIndex',
          onClick: function () {
            if (
              hasNodeByComponentPath(node, [
                'ArrayCards',
                '*',
                'ArrayCards.Index',
              ])
            )
              return
            let indexNode = new TreeNode({
              componentName: node.componentName,
              props: {
                type: 'void',
                'x-component': 'ArrayCards.Index',
              },
            })
            ensureObjectItemsNode(node).append(indexNode)
          },
        },
        {
          title: node.getMessage('addOperation'),
          icon: 'AddOperation',
          onClick: function () {
            let oldAdditionNode = findNodeByComponentPath(node, [
              'ArrayCards',
              'ArrayCards.Addition',
            ])
            if (!oldAdditionNode) {
              let additionNode = new TreeNode({
                componentName: node.componentName,
                props: {
                  type: 'void',
                  title: 'Addition',
                  'x-component': 'ArrayCards.Addition',
                },
              })
              ensureObjectItemsNode(node).insertAfter(additionNode)
            }
            let oldRemoveNode = findNodeByComponentPath(node, [
              'ArrayCards',
              '*',
              'ArrayCards.Remove',
            ])
            let oldMoveDownNode = findNodeByComponentPath(node, [
              'ArrayCards',
              '*',
              'ArrayCards.MoveDown',
            ])
            let oldMoveUpNode = findNodeByComponentPath(node, [
              'ArrayCards',
              '*',
              'ArrayCards.MoveUp',
            ])
            if (!oldRemoveNode) {
              ensureObjectItemsNode(node).append(
                new TreeNode({
                  componentName: node.componentName,
                  props: {
                    type: 'void',
                    'x-component': 'ArrayCards.Remove',
                  },
                })
              )
            }
            if (!oldMoveDownNode) {
              ensureObjectItemsNode(node).append(
                new TreeNode({
                  componentName: node.componentName,
                  props: {
                    type: 'void',
                    'x-component': 'ArrayCards.MoveDown',
                  },
                })
              )
            }
            if (!oldMoveUpNode) {
              ensureObjectItemsNode(node).append(
                new TreeNode({
                  componentName: node.componentName,
                  props: {
                    type: 'void',
                    'x-component': 'ArrayCards.MoveUp',
                  },
                })
              )
            }
          },
        },
      ],
    })
  )
})
ArrayBase.mixin(ArrayCards)
ArrayCards.Behavior = createArrayBehavior('ArrayCards')
ArrayCards.Resource = createResource({
  icon: 'ArrayCardsSource',
  elements: [
    {
      componentName: 'Field',
      props: {
        type: 'array',
        'x-decorator': 'FormItem',
        'x-component': 'ArrayCards',
        'x-component-props': {
          title: 'Title',
        },
      },
    },
  ],
})
