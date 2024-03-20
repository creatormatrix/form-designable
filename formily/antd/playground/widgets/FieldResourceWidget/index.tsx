import {
  IResource,
  IResourceLike,
  TreeNode,
  isResourceHost,
  isResourceList,
} from '@creatormatrix/core'
import { isFn } from '@creatormatrix/shared'
import { observer } from '@formily/reactive-react'
import React, { useEffect, useState } from 'react'

import {
  IconWidget,
  TextWidget,
  usePrefix,
  useWorkbench,
} from '@creatormatrix/react'
import cls from 'classnames'

export type SourceMapper = (resource: IResource) => React.ReactChild

export interface IResourceWidgetProps {
  title: React.ReactNode
  sources?: IResourceLike[]
  className?: string
  defaultExpand?: boolean
  children?: SourceMapper | React.ReactElement
}

const transformFieldNames = (tree: TreeNode) => {
  const buf: string[] = []
  tree.children.forEach((i) => {
    if (i.componentName === 'Field' && i?.props?.name) {
      buf.push(i?.props?.name)
    }
    if (Array.isArray(i.children) && i.children.length > 0) {
      buf.push(...transformFieldNames(i))
    }
  })
  return buf
}

export const FieldResourceWidget: React.FC<IResourceWidgetProps> = observer(
  (props) => {
    const prefix = usePrefix('resource')
    const [expand, setExpand] = useState(props.defaultExpand)
    const [usedFields, setUsedFields] = useState<string[]>([])
    const [sources, setSources] = useState<IResource[]>([])
    const [resourceSources] = useState(
      (props?.sources || []).reduce<IResource[]>((buf, source) => {
        if (isResourceList(source)) {
          return buf.concat(source)
        } else if (isResourceHost(source)) {
          return buf.concat(source.Resource as IResource[])
        }
        return buf
      }, [])
    )
    const workbench = useWorkbench()
    const updateFields = () => {
      setUsedFields(transformFieldNames(workbench.engine.getCurrentTree()))
    }
    useEffect(() => {
      updateFields()
      workbench.engine.subscribeWith(
        ['append:node', 'insert:after', 'insert:before', 'remove:node'],
        () => {
          Promise.resolve().then(() => {
            updateFields()
          })
        }
      )
    }, [workbench])

    useEffect(() => {
      const buf = resourceSources.filter(
        (i) => !usedFields.includes((i as any)?.elements?.[0]?.props?.name)
      )
      setSources(buf)
    }, [usedFields])

    const renderNode = (source: IResource) => {
      const { node, icon, title, thumb, span } = source
      const n = node as TreeNode
      return (
        <div
          className={prefix + '-item'}
          style={{ gridColumnStart: `span ${span || 1}` }}
          key={n.id}
          data-designer-source-id={n.id}
        >
          {thumb && <img className={prefix + '-item-thumb'} src={thumb} />}
          {icon && React.isValidElement(icon) ? (
            <>{icon}</>
          ) : (
            <IconWidget
              className={prefix + '-item-icon'}
              infer={icon}
              style={{ width: 150, height: 40 }}
            />
          )}
          <span className={prefix + '-item-text'}>
            {
              <TextWidget>
                {title || n.children[0]?.getMessage('title')}
              </TextWidget>
            }
          </span>
        </div>
      )
    }

    const remainItems =
      sources.reduce((length, source) => {
        return length + (source.span ?? 1)
      }, 0) % 3
    return (
      <div
        className={cls(prefix, props.className, {
          expand,
        })}
      >
        <div
          className={prefix + '-header'}
          onClick={(e) => {
            e.stopPropagation()
            e.preventDefault()
            setExpand(!expand)
          }}
        >
          <div className={prefix + '-header-expand'}>
            <IconWidget infer="Expand" size={10} />
          </div>
          <div className={prefix + '-header-content'}>
            <TextWidget>{props.title}</TextWidget>
          </div>
        </div>
        <div className={prefix + '-content-wrapper'}>
          <div className={prefix + '-content'}>
            {sources.map(isFn(props.children) ? props.children : renderNode)}
            {remainItems ? (
              <div
                className={prefix + '-item-remain'}
                style={{ gridColumnStart: `span ${3 - remainItems}` }}
              ></div>
            ) : (
              <div
                style={{
                  background: '#fff',
                  gridColumnStart: 'span 3',
                  color: '#aaa',
                  fontSize: '12px',
                  justifyContent: 'center',
                  height: '88px',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                {resourceSources.length > 0 ? '字段都已使用' : '无可用字段'}
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
)

FieldResourceWidget.defaultProps = {
  defaultExpand: true,
}
