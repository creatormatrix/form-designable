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
import { isVoidField, onFieldReact } from '@formily/core'
import { GlobalRegistry } from '@designable/core'
import { isStr } from '@designable/shared'
import { IconWidget } from '@designable/react'
let takeIcon = function (message) {
  if (!isStr(message)) return
  let matched = message.match(/@([^:\s]+)(?:\s*\:\s*([\s\S]+))?/)
  if (matched) return [matched[1], matched[2]]
  return
}
let mapEnum = function (dataSource) {
  return function (item, index) {
    let _a, _b, _c
    let label = dataSource[index] || dataSource[item.value] || item.label
    let icon = takeIcon(label)
    return __assign(__assign({}, item), {
      value:
        (_a = item === null || item === void 0 ? void 0 : item.value) !==
          null && _a !== void 0
          ? _a
          : null,
      label: icon
        ? React.createElement(IconWidget, { infer: icon[0], tooltip: icon[1] })
        : (_c =
            (_b = label === null || label === void 0 ? void 0 : label.label) !==
              null && _b !== void 0
              ? _b
              : label) !== null && _c !== void 0
        ? _c
        : 'Unknow',
    })
  }
}
export var useLocales = function (node) {
  onFieldReact('*', function (field) {
    let _a, _b
    let path = field.path.toString().replace(/\.[\d+]/g, '')
    let takeMessage = function (prop) {
      let token = 'settings.'.concat(path).concat(prop ? '.'.concat(prop) : '')
      return node.getMessage(token) || GlobalRegistry.getDesignerMessage(token)
    }
    let title = takeMessage('title') || takeMessage()
    let description = takeMessage('description')
    let tooltip = takeMessage('tooltip')
    let dataSource = takeMessage('dataSource')
    let placeholder = takeMessage('placeholder')
    if (title) {
      field.title = title
    }
    if (description) {
      field.description = description
    }
    if (tooltip) {
      field.decorator[1] = field.decorator[1] || []
      field.decorator[1].tooltip = tooltip
    }
    if (placeholder) {
      field.component[1] = field.component[1] || []
      field.component[1].placeholder = placeholder
    }
    if (!isVoidField(field)) {
      if (
        dataSource === null || dataSource === void 0
          ? void 0
          : dataSource.length
      ) {
        if (
          (_a = field.dataSource) === null || _a === void 0 ? void 0 : _a.length
        ) {
          field.dataSource = field.dataSource.map(mapEnum(dataSource))
        } else {
          field.dataSource = dataSource.slice()
        }
      } else {
        field.dataSource =
          (_b = field.dataSource) === null || _b === void 0
            ? void 0
            : _b.filter(Boolean)
      }
    }
  })
}
