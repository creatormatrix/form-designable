import React from 'react'
import { useField, observer } from '@formily/react'
import { usePrefix, IconWidget } from '@creatormatrix/react'
import { FoldItem } from '../FoldItem'
import { SizeInput } from '../SizeInput'
import { InputItems } from '../InputItems'
import cls from 'classnames'

type Position = 'top' | 'right' | 'left' | 'bottom' | 'all'
export interface IMarginStyleSetterProps {
  className?: string
  style?: React.CSSProperties
  labels?: React.ReactNode[]
  value?: string
  onChange?: (value: string) => void
  exclude?: string[]
}

const PositionMap = {
  top: 0,
  right: 1,
  bottom: 2,
  left: 3,
  all: 0,
}

const BoxRex =
  /([\d\.]+[^\d\s\.+-]+)(?:\s+([\d\.]+[^\d\s\.+-]+)(?:\s+([\d\.]+[^\d\s\.+-]+)(?:\s+([\d\.]+[^\d\s\.+-]+))?)?)?/

export const BoxStyleSetter: React.FC<IMarginStyleSetterProps> = observer(
  (props) => {
    const field = useField()
    const prefix = usePrefix('box-style-setter')
    const createPositionHandler = (
      position: Position,
      props: IMarginStyleSetterProps
    ) => {
      const matched =
        props.value === undefined ? [] : String(props.value).split(' ') || []
      const value = matched[PositionMap[position]]
      const v1 = matched[0]
      const v2 = matched[1]
      const v3 = matched[2]
      const v4 = matched[3]
      const allEqualls = v1 === v2 && v2 === v3 && v3 === v4
      return {
        ...props,
        value: position === 'all' ? (allEqualls ? v1 : undefined) : value,
        onChange(value: string) {
          if (position === 'all') {
            props.onChange?.(
              `${value || '0px'} ${value || '0px'} ${value || '0px'} ${
                value || '0px'
              }`
            )
          } else {
            matched[PositionMap[position]] = value
            props.onChange?.(
              `${matched[0] || '0px'} ${matched[1] || '0px'} ${
                matched[2] || '0px'
              } ${matched[3] || '0px'}`
            )
          }
        },
      }
    }

    const exclude = props.exclude || ['inherit', 'auto']

    return (
      <FoldItem className={cls(prefix, props.className)} label={field.title}>
        <FoldItem.Base>
          <SizeInput
            {...createPositionHandler('all', props)}
            exclude={exclude}
          />
        </FoldItem.Base>
        <FoldItem.Extra>
          <InputItems width="50%">
            <InputItems.Item icon={props.labels[0]}>
              <SizeInput
                {...createPositionHandler('top', props)}
                exclude={exclude}
              />
            </InputItems.Item>
            <InputItems.Item icon={props.labels[1]}>
              <SizeInput
                {...createPositionHandler('right', props)}
                exclude={exclude}
              />
            </InputItems.Item>
            <InputItems.Item icon={props.labels[2]}>
              <SizeInput
                {...createPositionHandler('bottom', props)}
                exclude={exclude}
              />
            </InputItems.Item>
            <InputItems.Item icon={props.labels[3]}>
              <SizeInput
                {...createPositionHandler('left', props)}
                exclude={exclude}
              />
            </InputItems.Item>
          </InputItems>
        </FoldItem.Extra>
      </FoldItem>
    )
  }
)

BoxStyleSetter.defaultProps = {
  labels: [
    <IconWidget infer="Top" size={16} key="1" />,
    <IconWidget infer="Right" size={16} key="2" />,
    <IconWidget infer="Bottom" size={16} key="3" />,
    <IconWidget infer="Left" size={16} key="4" />,
  ],
}
