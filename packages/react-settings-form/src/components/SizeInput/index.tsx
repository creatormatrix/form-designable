import { InputNumber } from 'antd'
import { createPolyInput, createVarOption } from '../PolyInput'
import { variableToLabel } from '@creatormatrix/shared'
import { useContext, useMemo } from 'react'
import { SettingsFormContext } from '../../shared/context'
import React from 'react'

const takeNumber = (value: any) => {
  const num = String(value)
    .trim()
    .replace(/[^\d\-\.]+/, '')
  if (num === '') return
  return Number(num)
}

const createUnitType = (type: string) => {
  return {
    type,
    component: InputNumber,
    checker(value: any) {
      return String(value).includes(type)
    },
    toInputValue(value: any) {
      return takeNumber(value)
    },
    toChangeValue(value: any) {
      return `${value || 0}${type}`
    },
  }
}

const createSpecialSizeOption = (type: string) => ({
  type: type,
  checker(value: any) {
    if (value === type) return true
    return false
  },
  toChangeValue() {
    return type
  },
})

const NormalSizeOptions = [
  createSpecialSizeOption('inherit'),
  createSpecialSizeOption('auto'),
  createSpecialSizeOption('unset'),
  createUnitType('px'),
  createUnitType('%'),
  createUnitType('vh'),
  createUnitType('em'),
]

export const SizeInput = (props) => {
  const context = useContext(SettingsFormContext)
  const sizes = context?.theme?.[props.theme]
  const MemoizedComponent = useMemo(() => {
    let sizeOptions = NormalSizeOptions
    if (sizes && Object.keys(sizes).length > 0) {
      sizeOptions = [
        ...NormalSizeOptions,
        ...Object.keys(sizes).map((i) => {
          return createVarOption(variableToLabel(i), `var(${sizes[i]})`)
        }),
      ]
    }
    return createPolyInput(sizeOptions)
  }, [])
  return <MemoizedComponent {...props} />
}

createPolyInput(NormalSizeOptions)

export const BackgroundSizeInput = createPolyInput([
  createSpecialSizeOption('cover'),
  createSpecialSizeOption('contain'),
  createUnitType('px'),
  createUnitType('%'),
  createUnitType('vh'),
  createUnitType('em'),
])
