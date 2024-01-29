'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.ArraySortHandle =
  exports.ArrayIndex =
  exports.ArrayMoveDown =
  exports.ArrayMoveUp =
  exports.ArrayRemove =
  exports.ArrayAddition =
    void 0
var core_1 = require('@designable/core')
core_1.GlobalRegistry.registerDesignerLocales({
  'zh-CN': {
    Previews: {
      droppable: '可以拖入组件',
      addTabPane: '添加选项卡',
      addCollapsePanel: '添加手风琴卡片',
      addTableColumn: '添加表格列',
      addTableSortHandle: '添加排序',
      addIndex: '添加索引',
      addOperation: '添加操作',
    },
  },
})
exports.ArrayAddition = {
  'zh-CN': {
    title: '添加按钮',
    settings: {
      'x-component-props': {
        method: {
          title: '添加方法',
          dataSource: ['尾部', '头部'],
        },
        defaultValue: '默认值',
      },
    },
  },
  'en-US': {
    title: 'Addition',
    settings: {
      'x-component-props': {
        method: {
          title: 'Method',
          dataSource: ['Push', 'Unshift'],
        },
        defaultValue: 'Default Value',
      },
    },
  },
}
exports.ArrayRemove = {
  'zh-CN': {
    title: '删除按钮',
  },
  'en-US': {
    title: 'Remove',
  },
}
exports.ArrayMoveUp = {
  'zh-CN': {
    title: '上移按钮',
  },
  'en-US': {
    title: 'Move Up',
  },
}
exports.ArrayMoveDown = {
  'zh-CN': {
    title: '下移按钮',
  },
  'en-US': {
    title: 'Move Down',
  },
}
exports.ArrayIndex = {
  'zh-CN': {
    title: '索引标识',
  },
  'en-US': {
    title: 'Index',
  },
}
exports.ArraySortHandle = {
  'zh-CN': {
    title: '排序标识',
  },
  'en-US': {
    title: 'Sort Handle',
  },
}
