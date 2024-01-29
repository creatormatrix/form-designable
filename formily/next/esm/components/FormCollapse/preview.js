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
import React, { Fragment, useState } from 'react'
import { observer } from '@formily/react'
import { Collapse } from '@alifd/next'
import { TreeNode, createBehavior, createResource } from '@designable/core'
import {
  useTreeNode,
  useNodeIdProps,
  TreeNodeWidget,
  DroppableWidget,
} from '@designable/react'
import { LoadTemplate } from '../../common/LoadTemplate'
import { useDropTemplate } from '../../hooks'
import { createVoidFieldSchema } from '../Field'
import { AllSchemas } from '../../schemas'
import { AllLocales } from '../../locales'
import { matchComponent } from '../../shared'
let parseCollapse = function (parent) {
  let panels = []
  parent.children.forEach(function (node) {
    if (matchComponent(node, 'FormCollapse.CollapsePanel')) {
      panels.push(node)
    }
  })
  return panels
}
export var FormCollapse = observer(function (props) {
  let _a = __read(useState([]), 2),
    expandedKeys = _a[0],
    setExpandedKeys = _a[1]
  let node = useTreeNode()
  let nodeId = useNodeIdProps()
  let designer = useDropTemplate('FormCollapse', function (source) {
    let panelNode = new TreeNode({
      componentName: 'Field',
      props: {
        type: 'void',
        'x-component': 'FormCollapse.CollapsePanel',
        'x-component-props': {
          title: 'Unnamed Title',
        },
      },
      children: source,
    })
    setExpandedKeys(__spread(expandedKeys, [panelNode.id]))
    return [panelNode]
  })
  let panels = parseCollapse(node)
  let renderCollapse = function () {
    let _a
    if (!((_a = node.children) === null || _a === void 0 ? void 0 : _a.length))
      return React.createElement(DroppableWidget, null)
    return React.createElement(
      Collapse,
      __assign({}, props, {
        expandedKeys: panels.map(function (tab) {
          return tab.id
        }),
      }),
      panels.map(function (panel) {
        let _a
        let props = panel.props['x-component-props'] || {}
        return React.createElement(
          Collapse.Panel,
          __assign({}, props, {
            style: __assign({}, props.style),
            title: React.createElement(
              'span',
              {
                'data-content-editable': 'x-component-props.title',
                'data-content-editable-node-id': panel.id,
              },
              props.title
            ),
            key: panel.id,
          }),
          React.createElement(
            'div',
            ((_a = {}),
            (_a[designer.props.nodeIdAttrName] = panel.id),
            (_a.style = {
              padding: '20px 0',
            }),
            _a),
            panel.children.length
              ? React.createElement(TreeNodeWidget, { node: panel })
              : React.createElement(DroppableWidget, null)
          )
        )
      })
    )
  }
  return React.createElement(
    'div',
    __assign({}, nodeId),
    renderCollapse(),
    React.createElement(LoadTemplate, {
      actions: [
        {
          title: node.getMessage('addCollapsePanel'),
          icon: 'AddPanel',
          onClick: function () {
            let collapsePanel = new TreeNode({
              componentName: 'Field',
              props: {
                type: 'void',
                'x-component': 'FormCollapse.CollapsePanel',
                'x-component-props': {
                  title: 'Unnamed Title',
                },
              },
            })
            node.append(collapsePanel)
            setExpandedKeys(__spread(expandedKeys, [collapsePanel.id]))
          },
        },
      ],
    })
  )
})
FormCollapse.CollapsePanel = function (props) {
  return React.createElement(Fragment, null, props.children)
}
FormCollapse.Behavior = createBehavior(
  {
    name: 'FormCollapse',
    extends: ['Field'],
    selector: function (node) {
      return node.props['x-component'] === 'FormCollapse'
    },
    designerProps: {
      droppable: true,
      allowAppend: function (target, source) {
        return (
          target.children.length === 0 ||
          source.every(function (node) {
            return node.props['x-component'] === 'FormCollapse.CollapsePanel'
          })
        )
      },
      propsSchema: createVoidFieldSchema(AllSchemas.FormCollapse),
    },
    designerLocales: AllLocales.FormCollapse,
  },
  {
    name: 'FormCollapse.CollapsePanel',
    extends: ['Field'],
    selector: function (node) {
      return node.props['x-component'] === 'FormCollapse.CollapsePanel'
    },
    designerProps: {
      droppable: true,
      allowDrop: function (node) {
        return node.props['x-component'] === 'FormCollapse'
      },
      propsSchema: createVoidFieldSchema(AllSchemas.FormCollapse.CollapsePanel),
    },
    designerLocales: AllLocales.FormCollapsePanel,
  }
)
FormCollapse.Resource = createResource({
  icon: 'CollapseSource',
  elements: [
    {
      componentName: 'Field',
      props: {
        type: 'void',
        'x-component': 'FormCollapse',
      },
    },
  ],
})
