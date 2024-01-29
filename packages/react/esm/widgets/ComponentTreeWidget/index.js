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
let __spreadArray =
  (this && this.__spreadArray) ||
  function (to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i)
          ar[i] = from[i]
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from))
  }
import React, { Fragment, useEffect } from 'react'
import { useTree, usePrefix, useDesigner, useComponents } from '../../hooks'
import { TreeNodeContext, DesignerComponentsContext } from '../../context'
import { GlobalRegistry } from '@designable/core'
import { observer } from '@formily/reactive-react'
import cls from 'classnames'
import './styles.less'
export var TreeNodeWidget = observer(function (props) {
  let _a, _b
  let designer = useDesigner(
    (_b =
      (_a = props.node) === null || _a === void 0
        ? void 0
        : _a.designerProps) === null || _b === void 0
      ? void 0
      : _b.effects
  )
  let components = useComponents()
  let node = props.node
  let renderChildren = function () {
    let _a, _b
    if (
      (_a = node === null || node === void 0 ? void 0 : node.designerProps) ===
        null || _a === void 0
        ? void 0
        : _a.selfRenderChildren
    )
      return []
    return (_b = node === null || node === void 0 ? void 0 : node.children) ===
      null || _b === void 0
      ? void 0
      : _b.map(function (child) {
          return React.createElement(TreeNodeWidget, {
            key: child.id,
            node: child,
          })
        })
  }
  let renderProps = function (extendsProps) {
    let _a, _b, _c
    if (extendsProps === void 0) {
      extendsProps = {}
    }
    let props = __assign(
      __assign(
        __assign(
          __assign(
            {},
            (_a = node.designerProps) === null || _a === void 0
              ? void 0
              : _a.defaultProps
          ),
          extendsProps
        ),
        node.props
      ),
      (_c =
        (_b = node.designerProps) === null || _b === void 0
          ? void 0
          : _b.getComponentProps) === null || _c === void 0
        ? void 0
        : _c.call(_b, node)
    )
    if (node.depth === 0) {
      delete props.style
    }
    return props
  }
  let renderComponent = function () {
    let _a, _b
    let componentName = node.componentName
    let Component = components[componentName]
    let dataId = {}
    if (Component) {
      if (designer) {
        dataId[
          (_a =
            designer === null || designer === void 0
              ? void 0
              : designer.props) === null || _a === void 0
            ? void 0
            : _a.nodeIdAttrName
        ] = node.id
      }
      return React.createElement.apply(
        React,
        __spreadArray(
          [Component, renderProps(dataId)],
          __read(renderChildren()),
          false
        )
      )
    } else {
      if (
        (_b = node === null || node === void 0 ? void 0 : node.children) ===
          null || _b === void 0
          ? void 0
          : _b.length
      ) {
        return React.createElement(Fragment, null, renderChildren())
      }
    }
  }
  if (!node) return null
  if (node.hidden) return null
  return React.createElement(
    TreeNodeContext.Provider,
    { value: node },
    renderComponent()
  )
})
export var ComponentTreeWidget = observer(function (props) {
  let _a, _b
  let tree = useTree()
  let prefix = usePrefix('component-tree')
  let designer = useDesigner()
  let dataId = {}
  if (designer && tree) {
    dataId[
      (_a =
        designer === null || designer === void 0 ? void 0 : designer.props) ===
        null || _a === void 0
        ? void 0
        : _a.nodeIdAttrName
    ] = tree.id
  }
  useEffect(function () {
    GlobalRegistry.registerDesignerBehaviors(props.components)
  }, [])
  return React.createElement(
    'div',
    __assign(
      {
        style: __assign(
          __assign({}, props.style),
          (_b = tree === null || tree === void 0 ? void 0 : tree.props) ===
            null || _b === void 0
            ? void 0
            : _b.style
        ),
        className: cls(prefix, props.className),
      },
      dataId
    ),
    React.createElement(
      DesignerComponentsContext.Provider,
      { value: props.components },
      React.createElement(TreeNodeWidget, { node: tree })
    )
  )
})
ComponentTreeWidget.displayName = 'ComponentTreeWidget'
