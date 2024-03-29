import React from 'react'
import { CardProps } from 'antd'
import { TreeNode, createResource } from '@creatormatrix/core'
import {
  useTreeNode,
  TreeNodeWidget,
  DroppableWidget,
  useNodeIdProps,
  DnFC,
} from '@creatormatrix/react'
import { ArrayBase, Space } from '@formily/antd'
import { observer } from '@formily/react'
import { LoadTemplate } from '../../common/LoadTemplate'
import { useDropTemplate } from '../../hooks'
import {
  hasNodeByComponentPath,
  queryNodesByComponentPath,
  createEnsureTypeItemsNode,
  findNodeByComponentPath,
  createNodeId,
} from '../../shared'
import { createArrayBehavior } from '../ArrayBase'
import './styles.less'

const ensureObjectItemsNode = createEnsureTypeItemsNode('object')

const isArrayListOperation = (name: string) =>
  name === 'ArrayList.Remove' ||
  name === 'ArrayList.MoveDown' ||
  name === 'ArrayList.MoveUp'

export const ArrayList: DnFC<CardProps> = observer((props) => {
  const node = useTreeNode()
  const nodeId = useNodeIdProps()
  const designer = useDropTemplate('ArrayList', (source) => {
    const indexNode = new TreeNode({
      componentName: node.componentName,
      props: {
        type: 'void',
        'x-component': 'ArrayList.Index',
      },
    })
    const additionNode = new TreeNode({
      componentName: node.componentName,
      props: {
        type: 'void',
        title: 'Addition',
        'x-component': 'ArrayList.Addition',
      },
    })
    const removeNode = new TreeNode({
      componentName: node.componentName,
      props: {
        type: 'void',
        title: 'Addition',
        'x-component': 'ArrayList.Remove',
      },
    })
    const moveDownNode = new TreeNode({
      componentName: node.componentName,
      props: {
        type: 'void',
        title: 'Addition',
        'x-component': 'ArrayList.MoveDown',
      },
    })
    const moveUpNode = new TreeNode({
      componentName: node.componentName,
      props: {
        type: 'void',
        title: 'Addition',
        'x-component': 'ArrayList.MoveUp',
      },
    })

    const spaceNode = new TreeNode({
      componentName: node.componentName,
      props: {
        type: 'void',
        'x-component': 'Space',
      },
      children: [indexNode, ...source, removeNode, moveDownNode, moveUpNode],
    })

    const objectNode = new TreeNode({
      componentName: node.componentName,
      props: {
        type: 'object',
      },
      children: [spaceNode],
    })
    return [objectNode, additionNode]
  })
  const renderList = () => {
    if (node.children.length === 0) return <DroppableWidget />
    const additions = queryNodesByComponentPath(node, [
      'ArrayList',
      'ArrayList.Addition',
    ])
    const indexes = queryNodesByComponentPath(node, [
      'ArrayList',
      '*',
      'ArrayList.Index',
    ])
    const operations = queryNodesByComponentPath(node, [
      'ArrayList',
      '*',
      isArrayListOperation,
    ])
    const children = queryNodesByComponentPath(node, [
      'ArrayList',
      '*',
      (name) => name.indexOf('ArrayList.') === -1,
    ])
    return (
      <ArrayBase disabled>
        <ArrayBase.Item index={0} record={null}>
          <>
            {indexes.map((node, key) => (
              <TreeNodeWidget key={key} node={node} />
            ))}
            <Space {...createNodeId(designer, ensureObjectItemsNode(node).id)}>
              {children.length ? (
                children.map((node) => (
                  <TreeNodeWidget key={node.id} node={node} />
                ))
              ) : (
                <DroppableWidget hasChildren={false} />
              )}
            </Space>
            {operations.map((node) => (
              <TreeNodeWidget key={node.id} node={node} />
            ))}
          </>
          {/* <Card
            {...props}
            title={
              <Fragment>
                {indexes.map((node, key) => (
                  <TreeNodeWidget key={key} node={node} />
                ))}
                <span data-content-editable="x-component-props.title">
                  {props.title}
                </span>
              </Fragment>
            }
            className={cls('ant-formily-array-list-item', props.className)}
            extra={
              <Fragment>
                {operations.map((node) => (
                  <TreeNodeWidget key={node.id} node={node} />
                ))}
                {props.extra}
              </Fragment>
            }
          >
            <div {...createNodeId(designer, ensureObjectItemsNode(node).id)}>
              {children.length ? (
                children.map((node) => (
                  <TreeNodeWidget key={node.id} node={node} />
                ))
              ) : (
                <DroppableWidget hasChildren={false} />
              )}
            </div>
          </Card> */}
        </ArrayBase.Item>
        {additions.map((node) => (
          <TreeNodeWidget key={node.id} node={node} />
        ))}
      </ArrayBase>
    )
  }

  return (
    <div {...nodeId} className="dn-array-list">
      {renderList()}
      <LoadTemplate
        actions={[
          {
            title: node.getMessage('addIndex'),
            icon: 'AddIndex',
            onClick: () => {
              if (
                hasNodeByComponentPath(node, [
                  'ArrayList',
                  '*',
                  'ArrayList.Index',
                ])
              )
                return
              const indexNode = new TreeNode({
                componentName: node.componentName,
                props: {
                  type: 'void',
                  'x-component': 'ArrayList.Index',
                },
              })
              ensureObjectItemsNode(node).append(indexNode)
            },
          },

          {
            title: node.getMessage('addOperation'),
            icon: 'AddOperation',
            onClick: () => {
              const oldAdditionNode = findNodeByComponentPath(node, [
                'ArrayList',
                'ArrayList.Addition',
              ])
              if (!oldAdditionNode) {
                const additionNode = new TreeNode({
                  componentName: node.componentName,
                  props: {
                    type: 'void',
                    title: 'Addition',
                    'x-component': 'ArrayList.Addition',
                  },
                })
                ensureObjectItemsNode(node).insertAfter(additionNode)
              }
              const oldRemoveNode = findNodeByComponentPath(node, [
                'ArrayList',
                '*',
                'ArrayList.Remove',
              ])
              const oldMoveDownNode = findNodeByComponentPath(node, [
                'ArrayList',
                '*',
                'ArrayList.MoveDown',
              ])
              const oldMoveUpNode = findNodeByComponentPath(node, [
                'ArrayList',
                '*',
                'ArrayList.MoveUp',
              ])
              if (!oldRemoveNode) {
                ensureObjectItemsNode(node).append(
                  new TreeNode({
                    componentName: node.componentName,
                    props: {
                      type: 'void',
                      'x-component': 'ArrayList.Remove',
                    },
                  })
                )
              }
              if (!oldMoveDownNode) {
                ensureObjectItemsNode(node).append(
                  new TreeNode({
                    componentName: node.componentName,
                    props: {
                      type: 'void',
                      'x-component': 'ArrayList.MoveDown',
                    },
                  })
                )
              }
              if (!oldMoveUpNode) {
                ensureObjectItemsNode(node).append(
                  new TreeNode({
                    componentName: node.componentName,
                    props: {
                      type: 'void',
                      'x-component': 'ArrayList.MoveUp',
                    },
                  })
                )
              }
            },
          },
        ]}
      />
    </div>
  )
})

ArrayBase.mixin(ArrayList)

ArrayList.Behavior = createArrayBehavior('ArrayList')

ArrayList.Resource = createResource({
  icon: 'ArrayListSource',
  elements: [
    {
      componentName: 'Field',
      props: {
        type: 'array',
        'x-decorator': 'FormItem',
        'x-component': 'ArrayList',
        'x-component-props': {
          title: `Title`,
        },
      },
    },
  ],
})
