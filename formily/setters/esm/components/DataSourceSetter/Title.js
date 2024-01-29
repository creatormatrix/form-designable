import React from 'react'
import { clone, toArr } from '@formily/shared'
import { observer } from '@formily/reactive-react'
import { IconWidget, TextWidget, usePrefix } from '@designable/react'
import { traverseTree } from './shared'
import './styles.less'
export var Title = observer(function (props) {
  let prefix = usePrefix('data-source-setter-node-title')
  let getTitleValue = function (dataSource) {
    let optionalKeys = ['label', 'title', 'header']
    let nodeTitle
    optionalKeys.some(function (key) {
      let _a
      let title =
        (_a = toArr(dataSource).find(function (item) {
          return item.label === key
        })) === null || _a === void 0
          ? void 0
          : _a.value
      if (title !== undefined) {
        nodeTitle = title
        return true
      }
      return false
    })
    if (nodeTitle === undefined) {
      toArr(dataSource || []).some(function (item) {
        if (item.value && typeof item.value === 'string') {
          nodeTitle = item.value
          return true
        }
        return false
      })
    }
    return nodeTitle
  }
  let renderTitle = function (dataSource) {
    let nodeTitle = getTitleValue(dataSource)
    if (nodeTitle === undefined)
      return React.createElement(TextWidget, {
        token: 'SettingComponents.DataSourceSetter.defaultTitle',
      })
    else return nodeTitle + ''
  }
  return React.createElement(
    'div',
    { className: prefix },
    React.createElement(
      'span',
      { style: { marginRight: '5px' } },
      renderTitle(
        (props === null || props === void 0 ? void 0 : props.map) || []
      )
    ),
    React.createElement(IconWidget, {
      className: prefix + '-icon',
      infer: 'Remove',
      onClick: function () {
        let _a
        let newDataSource = clone(
          (_a =
            props === null || props === void 0
              ? void 0
              : props.treeDataSource) === null || _a === void 0
            ? void 0
            : _a.dataSource
        )
        traverseTree(newDataSource || [], function (dataItem, i, data) {
          if (data[i].key === props.duplicateKey) toArr(data).splice(i, 1)
        })
        props.treeDataSource.dataSource = newDataSource
      },
    })
  )
})
