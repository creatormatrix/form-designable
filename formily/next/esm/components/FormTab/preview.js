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
import React, { Fragment, useState } from 'react'
import { observer } from '@formily/react'
import { Tab } from '@alifd/next'
import { TreeNode, createBehavior, createResource } from '@designable/core'
import {
  useNodeIdProps,
  useTreeNode,
  TreeNodeWidget,
  DroppableWidget,
} from '@designable/react'
import { LoadTemplate } from '../../common/LoadTemplate'
import { useDropTemplate } from '../../hooks'
import { createVoidFieldSchema } from '../Field'
import { AllSchemas } from '../../schemas'
import { AllLocales } from '../../locales'
import { matchComponent } from '../../shared'
let parseTabs = function (parent) {
  let tabs = []
  parent.children.forEach(function (node) {
    if (matchComponent(node, 'FormTab.TabPane')) {
      tabs.push(node)
    }
  })
  return tabs
}
let getCorrectActiveKey = function (activeKey, tabs) {
  if (tabs.length === 0) return
  if (
    tabs.some(function (node) {
      return node.id === activeKey
    })
  )
    return activeKey
  return tabs[tabs.length - 1].id
}
export var FormTab = observer(function (props) {
  let _a = __read(useState(), 2),
    activeKey = _a[0],
    setActiveKey = _a[1]
  let nodeId = useNodeIdProps()
  let node = useTreeNode()
  let designer = useDropTemplate('FormTab', function (source) {
    return [
      new TreeNode({
        componentName: 'Field',
        props: {
          type: 'void',
          'x-component': 'FormTab.TabPane',
          'x-component-props': {
            title: 'Unnamed Title',
          },
        },
        children: source,
      }),
    ]
  })
  let tabs = parseTabs(node)
  let renderTabs = function () {
    let _a
    if (!((_a = node.children) === null || _a === void 0 ? void 0 : _a.length))
      return React.createElement(DroppableWidget, null)
    return React.createElement(
      Tab,
      __assign({}, props, {
        activeKey: getCorrectActiveKey(activeKey, tabs),
        onChange: function (id) {
          setActiveKey(id)
        },
      }),
      tabs.map(function (tab) {
        let _a
        let props = tab.props['x-component-props'] || {}
        return React.createElement(
          Tab.Item,
          __assign({}, props, {
            style: __assign({}, props.style),
            title: React.createElement(
              'span',
              {
                'data-content-editable': 'x-component-props.title',
                'data-content-editable-node-id': tab.id,
              },
              props.title
            ),
            key: tab.id,
          }),
          React.createElement(
            'div',
            ((_a = {}),
            (_a[designer.props.nodeIdAttrName] = tab.id),
            (_a.style = {
              padding: '20px 0',
            }),
            _a),
            tab.children.length
              ? React.createElement(TreeNodeWidget, { node: tab })
              : React.createElement(DroppableWidget, null)
          )
        )
      })
    )
  }
  return React.createElement(
    'div',
    __assign({}, nodeId),
    renderTabs(),
    React.createElement(LoadTemplate, {
      actions: [
        {
          title: node.getMessage('addTabPane'),
          icon: 'AddPanel',
          onClick: function () {
            let tabPane = new TreeNode({
              componentName: 'Field',
              props: {
                type: 'void',
                'x-component': 'FormTab.TabPane',
                'x-component-props': {
                  title: 'Unnamed Title',
                },
              },
            })
            node.append(tabPane)
            setActiveKey(tabPane.id)
          },
        },
      ],
    })
  )
})
FormTab.TabPane = function (props) {
  return React.createElement(Fragment, null, props.children)
}
FormTab.Behavior = createBehavior(
  {
    name: 'FormTab',
    extends: ['Field'],
    selector: function (node) {
      return node.props['x-component'] === 'FormTab'
    },
    designerProps: {
      droppable: true,
      allowAppend: function (target, source) {
        return (
          target.children.length === 0 ||
          source.every(function (node) {
            return node.props['x-component'] === 'FormTab.TabPane'
          })
        )
      },
      propsSchema: createVoidFieldSchema(AllSchemas.FormTab),
    },
    designerLocales: AllLocales.FormTab,
  },
  {
    name: 'FormTab.TabPane',
    extends: ['Field'],
    selector: function (node) {
      return node.props['x-component'] === 'FormTab.TabPane'
    },
    designerProps: {
      droppable: true,
      allowDrop: function (node) {
        return node.props['x-component'] === 'FormTab'
      },
      propsSchema: createVoidFieldSchema(AllSchemas.FormTab.TabPane),
    },
    designerLocales: AllLocales.FormTabPane,
  }
)
FormTab.Resource = createResource({
  icon: 'TabSource',
  elements: [
    {
      componentName: 'Field',
      props: {
        type: 'void',
        'x-component': 'FormTab',
      },
    },
  ],
})