import set from 'lodash.set'
export const dataSourceToDeclare = (dataSource: any) => {
  if (Array.isArray(dataSource) && dataSource.length > 0) {
    // 转对象
    const obj = {}
    dataSource.forEach((i) => set(obj, i.value, `@${i.value}@`))
    // 格式化
    const str = JSON.stringify(obj, null, '\t')
    return str
      .split('\n\t')
      .map((i) => i.trim())
      .map((i) => {
        if (/@(.*?)@/.test(i)) {
          const key = i.match(/@(.*?)@/)[1]
          return `/**
          * ${dataSource.find((i) => i.value === key).label}
          */
          ${i.replace(/@(.*?)@/, 'any')}`
        }
        return i
      })
      .join('\n\t')
  }
}

export const dataSourceToExpressions = (dataSource: any) => {
  if (Array.isArray(dataSource) && dataSource.length > 0) {
    return `
      declare var $values : ${dataSourceToDeclare(dataSource)}
    `
  }
  return ''
}

export const contextExpressions = () => {
  return `
      declare var $context: {
        /**
        * 表单状态 \n
        * add: 新增 
        * edit: 编辑
        * read: 详情
        */
        formPattern: 'add' | 'update' | 'read';
        /**
        * 用户信息
        */
        user: any;
      }
    `
}
