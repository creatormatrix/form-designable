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
import { useSelectedNode } from '@designable/react'
import { TreeSelect } from 'antd'
let transformDataSource = function (node) {
  let currentNode = node
  let dots = function (count) {
    let dots = ''
    for (let i = 0; i < count; i++) {
      dots += '.'
    }
    return dots
  }
  let targetPath = function (parentNode, targetNode) {
    let path = []
    var transform = function (node) {
      if (node && node !== parentNode) {
        path.push(node.props.name || node.id)
      } else {
        transform(node.parent)
      }
    }
    transform(targetNode)
    return path.reverse().join('.')
  }
  var hasNoVoidChildren = function (node) {
    let _a
    return (_a = node.children) === null || _a === void 0
      ? void 0
      : _a.some(function (node) {
          if (node.props.type !== 'void' && node !== currentNode) return true
          return hasNoVoidChildren(node)
        })
  }
  var findRoot = function (node) {
    let _a
    if (!(node === null || node === void 0 ? void 0 : node.parent)) return node
    if (
      ((_a = node === null || node === void 0 ? void 0 : node.parent) ===
        null || _a === void 0
        ? void 0
        : _a.componentName) !== node.componentName
    )
      return node.parent
    return findRoot(node.parent)
  }
  var findArrayParent = function (node) {
    if (!(node === null || node === void 0 ? void 0 : node.parent)) return
    if (node.parent.props.type === 'array') return node.parent
    if (node.parent === root) return
    return findArrayParent(node.parent)
  }
  let transformRelativePath = function (arrayNode, targetNode) {
    if (targetNode.depth === currentNode.depth)
      return '.'.concat(targetNode.props.name || targetNode.id)
    return ''
      .concat(dots(currentNode.depth - arrayNode.depth), '[].')
      .concat(targetPath(arrayNode, targetNode))
  }
  var transformChildren = function (children, path) {
    if (path === void 0) {
      path = []
    }
    return children.reduce(function (buf, node) {
      let _a
      if (node === currentNode) return buf
      if (node.props.type === 'array' && !node.contains(currentNode)) return buf
      if (node.props.type === 'void' && !hasNoVoidChildren(node)) return buf
      let currentPath = path.concat(node.props.name || node.id)
      let arrayNode = findArrayParent(node)
      let label =
        node.props.title ||
        ((_a = node.props['x-component-props']) === null || _a === void 0
          ? void 0
          : _a.title) ||
        node.props.name ||
        node.designerProps.title
      let value = arrayNode
        ? transformRelativePath(arrayNode, node)
        : currentPath.join('.')
      return buf.concat({
        label: label,
        value: value,
        node: node,
        children: transformChildren(node.children, currentPath),
      })
    }, [])
  }
  var root = findRoot(node)
  if (root) {
    return transformChildren(root.children)
  }
  return []
}
export var PathSelector = function (props) {
  let baseNode = useSelectedNode()
  let dataSource = transformDataSource(baseNode)
  var findNode = function (dataSource, value) {
    let _a
    for (let i = 0; i < dataSource.length; i++) {
      let item = dataSource[i]
      if (item.value === value) return item.node
      if ((_a = item.children) === null || _a === void 0 ? void 0 : _a.length) {
        let fondedChild = findNode(item.children, value)
        if (fondedChild) return fondedChild
      }
    }
  }
  return React.createElement(
    TreeSelect,
    __assign({}, props, {
      onChange: function (value) {
        props.onChange(value, findNode(dataSource, value))
      },
      treeDefaultExpandAll: true,
      treeData: dataSource,
    })
  )
}
