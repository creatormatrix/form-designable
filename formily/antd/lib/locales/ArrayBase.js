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
        method: '方法',
        defaultValue: '默认值',
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
  'ko-KR': {
    title: '삭제',
  },
}
exports.ArrayMoveUp = {
  'zh-CN': {
    title: '上移按钮',
  },
  'en-US': {
    title: 'Move Up',
  },
  'ko-KR': {
    title: '위로 옮기기',
  },
}
exports.ArrayMoveDown = {
  'zh-CN': {
    title: '下移按钮',
  },
  'en-US': {
    title: 'Move Down',
  },
  'ko-KR': {
    title: '아래로 옮기기',
  },
}
exports.ArrayIndex = {
  'zh-CN': {
    title: '索引标识',
  },
  'en-US': {
    title: 'Index',
  },
  'ko-KR': {
    title: '색인',
  },
}
exports.ArraySortHandle = {
  'zh-CN': {
    title: '排序标识',
  },
  'en-US': {
    title: 'Sort Handle',
  },
  'ko-KR': {
    title: '정렬 핸들',
  },
}