import React, { useContext, useMemo, useRef } from 'react'
import { Input, Popover } from 'antd'
import { usePrefix } from '@creatormatrix/react'
import { SketchPicker } from 'react-color'
import './styles.less'
import {
  createDefaultOption,
  createPolyInput,
  createClearOption,
  createVarOption,
} from '../PolyInput'
import { SettingsFormContext } from '../../shared/context'
import { variableToLabel } from '@creatormatrix/shared'

export interface IColorInputProps {
  value?: string
  onChange?: (color: string) => void
  theme?: string
}

export const ColorInput: React.FC<IColorInputProps> = (props) => {
  const context = useContext(SettingsFormContext)
  const presetColors = context?.presetColors
  const container = useRef<HTMLDivElement>()
  const prefix = usePrefix('color-input')
  const color = props.value as string
  return (
    <div ref={container} className={prefix}>
      <Input
        value={props.value}
        onChange={(e) => {
          props.onChange?.(e.target.value)
        }}
        placeholder="Color"
        prefix={
          <Popover
            autoAdjustOverflow
            trigger="click"
            overlayInnerStyle={{ padding: 0 }}
            getPopupContainer={() => container.current}
            content={
              <SketchPicker
                color={color}
                onChange={(v) => {
                  const { hex, rgb } = v
                  if (hex !== 'transparent') {
                    props.onChange?.(
                      `rgba(${rgb.r},${rgb.g},${rgb.b},${rgb.a})`
                    )
                  } else {
                    props.onChange?.(v.hex)
                  }
                }}
                presetColors={
                  presetColors || [
                    '#ff7875',
                    '#ff9c6e',
                    '#ffc069',
                    '#fff566',
                    '#d3f261',
                    '#5cdbd3',
                    '#69b1ff',
                    '#b37feb',
                    '#ff85c0',
                    '#ffffff',
                    '#f0f0f0',
                    '#999999',
                    '#666666',
                    '#333333',
                    'transparent',
                  ]
                }
              ></SketchPicker>
            }
          >
            <div
              className={prefix + '-color-tips'}
              style={{
                backgroundColor: color,
              }}
            ></div>
          </Popover>
        }
      />
    </div>
  )
}

export const MixColorInput: React.FC<IColorInputProps> = (props) => {
  const context = useContext(SettingsFormContext)
  const colors = context?.theme?.[props?.theme]
  const MemoizedComponent = useMemo(() => {
    let PolyInput = ColorInput
    if (colors && Object.keys(colors).length > 0) {
      PolyInput = createPolyInput([
        createDefaultOption('Custom', ColorInput),
        ...Object.keys(colors).map((i) => {
          return createVarOption(
            variableToLabel(i),
            `var(${colors[i]})`,
            (v) => {
              return (
                <span
                  style={{
                    backgroundColor: v,
                    width: '10px',
                    height: '10px',
                    borderRadius: '100%',
                    marginRight: '4px',
                    border: '1px solid #ddd',
                  }}
                />
              )
            }
          )
        }),
        createClearOption('Clear'),
      ])
    }
    return PolyInput
  }, [])

  return <MemoizedComponent {...props} />
}
