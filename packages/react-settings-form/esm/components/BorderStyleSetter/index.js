import React, { Fragment, useMemo } from 'react'
import { usePrefix } from '@designable/react'
import { camelCase } from '@formily/shared'
import { Select } from '@formily/antd'
import { observable } from '@formily/reactive'
import { useField, Field, observer } from '@formily/react'
import { FoldItem } from '../FoldItem'
import { ColorInput } from '../ColorInput'
import { SizeInput } from '../SizeInput'
import { PositionInput } from '../PositionInput'
import cls from 'classnames'
import './styles.less'
let Positions = ['center', 'top', 'right', 'bottom', 'left']
let BorderStyleOptions = [
  {
    label: 'None',
    value: 'none',
  },
  {
    label: React.createElement('span', {
      className: 'border-style-solid-line',
    }),
    value: 'solid',
  },
  {
    label: React.createElement('span', {
      className: 'border-style-dashed-line',
    }),
    value: 'dashed',
  },
  {
    label: React.createElement('span', {
      className: 'border-style-dotted-line',
    }),
    value: 'dotted',
  },
]
let createBorderProp = function (position, key) {
  let insert = position === 'center' ? '' : '-'.concat(position)
  return camelCase('border'.concat(insert, '-').concat(key))
}
let parseInitPosition = function (field) {
  let basePath = field.address.parent()
  for (let i = 0; i < Positions.length; i++) {
    let position = Positions[i]
    let stylePath = ''
      .concat(basePath, '.')
      .concat(createBorderProp(position, 'style'))
    let widthPath = ''
      .concat(basePath, '.')
      .concat(createBorderProp(position, 'width'))
    let colorPath = ''
      .concat(basePath, '.')
      .concat(createBorderProp(position, 'color'))
    if (
      field.query(stylePath).value() ||
      field.query(widthPath).value() ||
      field.query(colorPath).value()
    ) {
      return position
    }
  }
  return 'center'
}
export var BorderStyleSetter = observer(function (_a) {
  let className = _a.className,
    style = _a.style
  let field = useField()
  let currentPosition = useMemo(
    function () {
      return observable({
        value: parseInitPosition(field),
      })
    },
    [field.value]
  )
  let prefix = usePrefix('border-style-setter')
  let createReaction = function (position) {
    return function (field) {
      field.display = currentPosition.value === position ? 'visible' : 'hidden'
      if (position !== 'center') {
        let borderStyle = field.query('.borderStyle').value()
        let borderWidth = field.query('.borderWidth').value()
        let borderColor = field.query('.borderColor').value()
        if (borderStyle || borderWidth || borderColor) {
          field.value = undefined
        }
      }
    }
  }
  return React.createElement(
    FoldItem,
    { label: field.title },
    React.createElement(
      FoldItem.Extra,
      null,
      React.createElement(
        'div',
        { className: cls(prefix, className), style: style },
        React.createElement(
          'div',
          { className: prefix + '-position' },
          React.createElement(PositionInput, {
            value: currentPosition.value,
            onChange: function (value) {
              currentPosition.value = value
            },
          })
        ),
        React.createElement(
          'div',
          { className: prefix + '-input' },
          Positions.map(function (position, key) {
            return React.createElement(
              Fragment,
              { key: key },
              React.createElement(Field, {
                name: createBorderProp(position, 'style'),
                basePath: field.address.parent(),
                dataSource: BorderStyleOptions,
                reactions: createReaction(position),
                component: [Select, { placeholder: 'Please Select' }],
              }),
              React.createElement(Field, {
                name: createBorderProp(position, 'width'),
                basePath: field.address.parent(),
                reactions: createReaction(position),
                component: [SizeInput, { exclude: ['auto'] }],
              }),
              React.createElement(Field, {
                name: createBorderProp(position, 'color'),
                basePath: field.address.parent(),
                reactions: createReaction(position),
                component: [ColorInput],
              })
            )
          })
        )
      )
    )
  )
})
