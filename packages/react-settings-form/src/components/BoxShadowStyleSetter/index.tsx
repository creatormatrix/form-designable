import React, { useContext, useMemo } from 'react'
import { usePrefix } from '@creatormatrix/react'
import { useField, observer } from '@formily/react'
import { FoldItem } from '../FoldItem'
import { ColorInput } from '../ColorInput'
import { SizeInput } from '../SizeInput'
import { InputItems } from '../InputItems'
import cls from 'classnames'
import { SettingsFormContext } from '../../shared/context'
import {
  createClearOption,
  createDefaultOption,
  createPolyInput,
  createVarOption,
} from '../PolyInput'
import { variableToLabel } from '@creatormatrix/shared'

export interface IBoxShadowStyleSetterProps {
  className?: string
  style?: React.CSSProperties
  value?: string
  onChange?: (value: string) => void
  theme?: any
}

const isVarCss = (v: string) => /^var\(.*?\)$/.test(v)

export const BoxShadowStyleSetter: React.FC<IBoxShadowStyleSetterProps> =
  observer((props) => {
    const field = useField()
    const prefix = usePrefix('shadow-style-setter')

    const context = useContext(SettingsFormContext)
    const shadows = context?.theme?.boxShadow
    const MemoizedComponent = useMemo(() => {
      let PolyInput = ColorInput
      if (shadows && Object.keys(shadows).length > 0) {
        PolyInput = createPolyInput([
          createDefaultOption('Custom', ColorInput),
          ...Object.keys(shadows).map((i) => {
            return createVarOption(
              variableToLabel(i),
              `var(${shadows[i]})`,
              (v) => {
                return (
                  <span
                    style={{
                      boxShadow: v,
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

    const getSplittingValue = (v) => {
      return String(v || '')
        .trim()
        .split(' ')
    }

    const createBoxShadowConnector = (position: number) => {
      const splitting = getSplittingValue(props.value)
      return {
        value:
          props.value === undefined || isVarCss(props.value)
            ? props.value
            : splitting[position],
        onChange: (value: any) => {
          if (value === undefined || isVarCss(value)) {
            props.onChange?.(value)
          } else {
            splitting[position] = value
            props.onChange?.(
              `${splitting[0] || '0px'} ${splitting[1] || '0px'} ${
                splitting[2] || '0px'
              } ${splitting[3] || '0px'} ${splitting[4] || '#000000'}`
            )
          }
        },
      }
    }
    return (
      <FoldItem
        className={cls(prefix, props.className)}
        style={props.style}
        label={field.title}
        disabled={isVarCss(props.value)}
      >
        <FoldItem.Base>
          <MemoizedComponent {...createBoxShadowConnector(4)} />
        </FoldItem.Base>
        <FoldItem.Extra>
          <InputItems width="50%">
            <InputItems.Item icon="AxisX">
              <SizeInput
                exclude={['inherit', 'auto']}
                {...createBoxShadowConnector(0)}
              />
            </InputItems.Item>
            <InputItems.Item icon="AxisY">
              <SizeInput
                exclude={['inherit', 'auto']}
                {...createBoxShadowConnector(1)}
              />
            </InputItems.Item>
            <InputItems.Item icon="Blur">
              <SizeInput
                exclude={['inherit', 'auto']}
                {...createBoxShadowConnector(2)}
              />
            </InputItems.Item>
            <InputItems.Item icon="Shadow">
              <SizeInput
                exclude={['inherit', 'auto']}
                {...createBoxShadowConnector(3)}
              />
            </InputItems.Item>
          </InputItems>
        </FoldItem.Extra>
      </FoldItem>
    )
  })
