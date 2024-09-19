export const Cascader = {
  'zh-CN': {
    title: '联级选择',
    settings: {
      'x-component-props': {
        ignoreRootNode: {
          title: '忽略根节点',
          tooltip: '不显示根节点数据',
        },
        changeOnSelect: {
          title: '选择时触发',
          tooltip: '点选每级菜单选项值都会发生变化, 默认为 true',
        },
        displayRender: {
          title: '渲染函数',
          tooltip: '选择后展示的渲染函数，默认为label => label.join("/")	',
        },
        fieldNames: {
          title: '自定义字段名',
          tooltip:
            '默认值：{ label: "label", value: "value", children: "children" }',
        },
        checkStrictly: '父子节点选中不关联',
      },
    },
  },
  'en-US': {
    title: 'Cascader',
    settings: {
      'x-component-props': {
        ignoreRootNode: {
          title: 'Ignore root',
          tooltip: 'Ignore root node data',
        },
        changeOnSelect: {
          title: 'Change On Select',
          tooltip:
            'Click on each level of menu option value will change, Defaults is true',
        },
        displayRender: {
          title: 'Display Render',
          tooltip:
            'The rendering function displayed after selection, the default is label => label.join("/")	',
        },
        fieldNames: {
          title: 'Field Names',
          tooltip:
            'Defaults：{ label: "label", value: "value", children: "children" }',
        },
        checkStrictly: 'Check Strictly',
      },
    },
  },
  'ko-KR': {
    title: 'Cascader',
    settings: {
      'x-component-props': {
        changeOnSelect: {
          title: '선택 시 변경',
          tooltip: '메뉴 옵션 값의 레벨을 클릭하면 변경됩니다.',
        },
        displayRender: {
          title: '디스플레이 렌더링',
          tooltip:
            '선택 후 실행되는 렌더링 함수로 기본 값은 label => label.join("/")	',
        },
        fieldNames: {
          title: '필드 이름',
          tooltip:
            '기본 값：{ label: "label", value: "value", children: "children" }',
        },
        checkStrictly: 'Check Strictly',
      },
    },
  },
}
